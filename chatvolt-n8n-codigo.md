# Código Prático N8N para Chatvolt.ai

## 🔗 Configurações de Webhook

### 1. Webhook para Receber Leads do Chatvolt

#### Webhook Trigger Node
```json
{
  "httpMethod": "POST",
  "path": "chatvolt-lead",
  "responseMode": "responseNode",
  "options": {}
}
```

#### Function Node - Processar Lead Chatvolt
```javascript
// Processar dados do lead vindo do Chatvolt
const chatVoltData = $json;

// Extrair informações principais
const lead = {
  name: chatVoltData.contact?.name || 'Lead Anônimo',
  email: chatVoltData.contact?.email || '',
  phone: chatVoltData.contact?.phone || '',
  message: chatVoltData.message?.text || '',
  timestamp: new Date().toISOString(),
  source: 'chatvolt',
  conversationId: chatVoltData.conversationId,
  agentId: chatVoltData.agentId,
  platform: chatVoltData.platform // website, whatsapp, etc
};

// Análise de intenção básica
const messageText = lead.message.toLowerCase();
let intent = 'general';
let priority = 'normal';

if (messageText.includes('preço') || messageText.includes('valor') || messageText.includes('quanto custa')) {
  intent = 'pricing';
  priority = 'high';
} else if (messageText.includes('demo') || messageText.includes('apresentação')) {
  intent = 'demo';
  priority = 'high';
} else if (messageText.includes('suporte') || messageText.includes('problema')) {
  intent = 'support';
  priority = 'medium';
}

lead.intent = intent;
lead.priority = priority;

// Lead scoring básico
let score = 0;
if (lead.email) score += 20;
if (lead.phone) score += 20;
if (intent === 'pricing' || intent === 'demo') score += 30;
if (lead.message.length > 50) score += 10;

lead.score = score;

return { lead };
```

### 2. HTTP Request para API Chatvolt

#### Enviar Mensagem via Chatvolt
```json
{
  "method": "POST",
  "url": "https://api.chatvolt.ai/v1/messages",
  "headers": {
    "Authorization": "Bearer {{$credentials.chatvoltApi.token}}",
    "Content-Type": "application/json"
  },
  "body": {
    "agentId": "={{$json.agentId}}",
    "conversationId": "={{$json.conversationId}}",
    "message": {
      "text": "={{$json.messageText}}",
      "type": "text"
    },
    "metadata": {
      "source": "n8n_automation",
      "workflow": "lead_followup"
    }
  }
}
```

#### Criar Novo Agente Chatvolt
```json
{
  "method": "POST",
  "url": "https://api.chatvolt.ai/v1/agents",
  "headers": {
    "Authorization": "Bearer {{$credentials.chatvoltApi.token}}",
    "Content-Type": "application/json"
  },
  "body": {
    "name": "={{$json.agentName}}",
    "description": "={{$json.agentDescription}}",
    "config": {
      "temperature": 0.7,
      "maxTokens": 1000,
      "personality": "professional_helpful"
    },
    "knowledgeBase": "={{$json.knowledgeBaseId}}",
    "platforms": ["website", "whatsapp"]
  }
}
```

## 📧 Integração com Email/CRM

### 3. Envio para HubSpot

#### HTTP Request - Criar Contato HubSpot
```json
{
  "method": "POST",
  "url": "https://api.hubapi.com/crm/v3/objects/contacts",
  "headers": {
    "Authorization": "Bearer {{$credentials.hubspotApi.accessToken}}",
    "Content-Type": "application/json"
  },
  "body": {
    "properties": {
      "email": "={{$json.lead.email}}",
      "firstname": "={{$json.lead.name.split(' ')[0]}}",
      "lastname": "={{$json.lead.name.split(' ').slice(1).join(' ')}}",
      "phone": "={{$json.lead.phone}}",
      "hs_lead_status": "NEW",
      "lifecyclestage": "lead",
      "chatvolt_conversation_id": "={{$json.lead.conversationId}}",
      "chatvolt_agent_id": "={{$json.lead.agentId}}",
      "chatvolt_intent": "={{$json.lead.intent}}",
      "chatvolt_score": "={{$json.lead.score}}",
      "chatvolt_platform": "={{$json.lead.platform}}",
      "chatvolt_first_message": "={{$json.lead.message}}"
    }
  }
}
```

### 4. Function Node - Enriquecimento de Lead

```javascript
// Enriquecer lead com dados externos
const lead = $json.lead;

// Validação de email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validação de telefone brasileiro
function isValidBrazilianPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 11;
}

// Extrair domínio do email para enriquecimento
function extractCompanyDomain(email) {
  if (!isValidEmail(email)) return null;
  return email.split('@')[1];
}

// Análise avançada da mensagem
function analyzeMessage(message) {
  const text = message.toLowerCase();
  
  const analysis = {
    hasUrgencyWords: /urgent|asap|hoje|agora|imediato/.test(text),
    hasBudgetMention: /\$|real|reais|orçamento|budget|investir|pagar/.test(text),
    hasTimeframeMention: /semana|mês|ano|prazo|quando|até/.test(text),
    hasCompetitorMention: /concurrent|alternatívá|comparar|outro/.test(text),
    hasDecisionMakerWords: /diretor|gerente|responsável|decisão|aprovar/.test(text)
  };
  
  return analysis;
}

// Scoring avançado
function calculateAdvancedScore(lead, analysis) {
  let score = lead.score || 0;
  
  if (analysis.hasUrgencyWords) score += 15;
  if (analysis.hasBudgetMention) score += 20;
  if (analysis.hasTimeframeMention) score += 10;
  if (analysis.hasDecisionMakerWords) score += 25;
  if (analysis.hasCompetitorMention) score += 5;
  
  const domain = extractCompanyDomain(lead.email);
  if (domain && !['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'].includes(domain)) {
    score += 15; // Email corporativo
  }
  
  return Math.min(score, 100); // Cap at 100
}

// Aplicar enriquecimento
const messageAnalysis = analyzeMessage(lead.message);
const enrichedLead = {
  ...lead,
  isValidEmail: isValidEmail(lead.email),
  isValidPhone: isValidBrazilianPhone(lead.phone),
  companyDomain: extractCompanyDomain(lead.email),
  messageAnalysis,
  finalScore: calculateAdvancedScore(lead, messageAnalysis),
  enrichedAt: new Date().toISOString()
};

// Determinar próxima ação baseada no score
if (enrichedLead.finalScore >= 70) {
  enrichedLead.nextAction = 'immediate_contact';
  enrichedLead.priority = 'high';
} else if (enrichedLead.finalScore >= 40) {
  enrichedLead.nextAction = 'nurturing_sequence';
  enrichedLead.priority = 'medium';
} else {
  enrichedLead.nextAction = 'newsletter_only';
  enrichedLead.priority = 'low';
}

return { enrichedLead };
```

## 📱 Integração WhatsApp Business

### 5. Webhook WhatsApp + Chatvolt

#### Function Node - Processar Mensagem WhatsApp
```javascript
// Processar mensagem WhatsApp recebida via Chatvolt
const whatsappData = $json;

const message = {
  id: whatsappData.messageId,
  from: whatsappData.from,
  to: whatsappData.to,
  text: whatsappData.message?.text || '',
  type: whatsappData.message?.type || 'text',
  timestamp: whatsappData.timestamp,
  conversationId: whatsappData.conversationId,
  contactName: whatsappData.contact?.name || '',
  isFirstMessage: whatsappData.isFirstMessage || false
};

// Detectar idioma (simples)
function detectLanguage(text) {
  const portugueseWords = ['olá', 'oi', 'bom', 'dia', 'por', 'favor', 'obrigado', 'sim', 'não'];
  const englishWords = ['hello', 'hi', 'good', 'day', 'please', 'thank', 'yes', 'no'];
  
  const textLower = text.toLowerCase();
  const ptCount = portugueseWords.filter(word => textLower.includes(word)).length;
  const enCount = englishWords.filter(word => textLower.includes(word)).length;
  
  return ptCount > enCount ? 'pt' : 'en';
}

// Classificar tipo de consulta
function classifyQuery(text) {
  const textLower = text.toLowerCase();
  
  if (textLower.includes('preço') || textLower.includes('custo') || textLower.includes('valor')) {
    return 'pricing';
  } else if (textLower.includes('demo') || textLower.includes('apresentação')) {
    return 'demo_request';
  } else if (textLower.includes('suporte') || textLower.includes('ajuda') || textLower.includes('problema')) {
    return 'support';
  } else if (textLower.includes('horário') || textLower.includes('funciona') || textLower.includes('aberto')) {
    return 'business_hours';
  } else {
    return 'general';
  }
}

message.language = detectLanguage(message.text);
message.queryType = classifyQuery(message.text);

// Preparar resposta automática baseada no tipo
const responses = {
  pt: {
    pricing: "Olá! Vi que você tem interesse em nossos preços. Vou conectar você com nossa equipe comercial para apresentar as melhores opções. Um momento! 💼",
    demo_request: "Ótimo! Ficaria feliz em apresentar nossa solução. Vou agendar uma demonstração personalizada para você. 📅",
    support: "Entendi que você precisa de suporte. Vou encaminhar para nossa equipe técnica especializada. ⚡",
    business_hours: "Nosso horário de atendimento é de segunda a sexta, das 8h às 18h. Mas aqui no WhatsApp estamos sempre disponíveis! 🕐",
    general: "Olá! Como posso ajudar você hoje? Estou aqui para esclarecer qualquer dúvida! 😊"
  },
  en: {
    pricing: "Hello! I see you're interested in our pricing. I'll connect you with our sales team to present the best options. One moment! 💼",
    demo_request: "Great! I'd be happy to showcase our solution. I'll schedule a personalized demo for you. 📅",
    support: "I understand you need support. I'll forward this to our specialized technical team. ⚡",
    business_hours: "Our business hours are Monday to Friday, 8am to 6pm. But here on WhatsApp we're always available! 🕐",
    general: "Hello! How can I help you today? I'm here to answer any questions! 😊"
  }
};

message.suggestedResponse = responses[message.language][message.queryType];

return { message };
```

### 6. Enviar Template WhatsApp

#### HTTP Request - Template Message
```json
{
  "method": "POST",
  "url": "https://api.chatvolt.ai/v1/whatsapp/templates",
  "headers": {
    "Authorization": "Bearer {{$credentials.chatvoltApi.token}}",
    "Content-Type": "application/json"
  },
  "body": {
    "to": "={{$json.message.from}}",
    "template": {
      "name": "lead_followup",
      "language": "pt_BR",
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "={{$json.enrichedLead.name}}"
            },
            {
              "type": "text", 
              "text": "={{$json.enrichedLead.intent}}"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "={{$json.enrichedLead.conversationId}}"
            }
          ]
        }
      ]
    }
  }
}
```

## 🔄 Automações de Follow-up

### 7. Delay e Follow-up Inteligente

#### Function Node - Calcular Delay
```javascript
// Calcular delay baseado na prioridade e horário comercial
const lead = $json.enrichedLead;

function calculateDelay(priority, currentHour) {
  const businessHours = currentHour >= 8 && currentHour <= 18;
  
  switch(priority) {
    case 'high':
      return businessHours ? 300 : 1800; // 5min ou 30min
    case 'medium':
      return businessHours ? 1800 : 7200; // 30min ou 2h
    case 'low':
      return 86400; // 24h
    default:
      return 3600; // 1h
  }
}

const now = new Date();
const delay = calculateDelay(lead.priority, now.getHours());

return {
  delay: delay,
  shouldSendNow: delay <= 300,
  scheduledTime: new Date(now.getTime() + delay * 1000).toISOString()
};
```

### 8. Sequence de Nurturing

#### Function Node - Gerar Sequência
```javascript
// Gerar sequência de nurturing personalizada
const lead = $json.enrichedLead;

function generateNurturingSequence(lead) {
  const sequences = {
    pricing: [
      { day: 0, type: 'immediate', message: 'Informações sobre preços enviadas!' },
      { day: 1, type: 'value', message: 'Casos de sucesso de clientes similares' },
      { day: 3, type: 'social_proof', message: 'Depoimentos e resultados' },
      { day: 7, type: 'demo_offer', message: 'Oferta de demonstração personalizada' },
      { day: 14, type: 'limited_offer', message: 'Oferta especial por tempo limitado' }
    ],
    demo: [
      { day: 0, type: 'confirmation', message: 'Demo agendada - instruções' },
      { day: 1, type: 'preparation', message: 'Como aproveitar melhor a demo' },
      { day: 7, type: 'follow_up', message: 'Follow-up pós-demo' },
      { day: 14, type: 'proposal', message: 'Proposta comercial personalizada' }
    ],
    support: [
      { day: 0, type: 'resolution', message: 'Solução para o problema' },
      { day: 3, type: 'satisfaction', message: 'Pesquisa de satisfação' },
      { day: 7, type: 'additional_help', message: 'Outras formas de ajudar' }
    ],
    general: [
      { day: 0, type: 'welcome', message: 'Boas-vindas e apresentação' },
      { day: 2, type: 'education', message: 'Conteúdo educativo relevante' },
      { day: 7, type: 'case_study', message: 'Caso de uso similar' },
      { day: 14, type: 'demo_offer', message: 'Convite para conhecer melhor' }
    ]
  };
  
  const sequence = sequences[lead.intent] || sequences.general;
  
  return sequence.map((step, index) => ({
    ...step,
    id: `${lead.conversationId}_${index}`,
    leadId: lead.conversationId,
    executeAt: new Date(Date.now() + step.day * 24 * 60 * 60 * 1000).toISOString()
  }));
}

const sequence = generateNurturingSequence(lead);

return { 
  sequence,
  totalSteps: sequence.length,
  estimatedCompletionDays: Math.max(...sequence.map(s => s.day))
};
```

## 📊 Analytics e Relatórios

### 9. Function Node - Coletar Métricas

```javascript
// Coletar e processar métricas do Chatvolt
const data = $input.all();

function processMetrics(conversations) {
  const metrics = {
    totalConversations: conversations.length,
    leadsByPlatform: {},
    intentDistribution: {},
    conversionsByScore: {},
    avgResponseTime: 0,
    topAgents: {},
    hourlyDistribution: Array(24).fill(0),
    dailyTrends: {},
    sentimentAnalysis: { positive: 0, neutral: 0, negative: 0 }
  };
  
  let totalResponseTime = 0;
  
  conversations.forEach(conv => {
    // Platform distribution
    metrics.leadsByPlatform[conv.platform] = (metrics.leadsByPlatform[conv.platform] || 0) + 1;
    
    // Intent distribution
    metrics.intentDistribution[conv.intent] = (metrics.intentDistribution[conv.intent] || 0) + 1;
    
    // Score grouping
    const scoreGroup = conv.score >= 70 ? 'high' : conv.score >= 40 ? 'medium' : 'low';
    metrics.conversionsByScore[scoreGroup] = (metrics.conversionsByScore[scoreGroup] || 0) + 1;
    
    // Agent performance
    metrics.topAgents[conv.agentId] = (metrics.topAgents[conv.agentId] || 0) + 1;
    
    // Time analysis
    const hour = new Date(conv.timestamp).getHours();
    metrics.hourlyDistribution[hour]++;
    
    const date = conv.timestamp.split('T')[0];
    metrics.dailyTrends[date] = (metrics.dailyTrends[date] || 0) + 1;
    
    // Response time
    if (conv.responseTime) {
      totalResponseTime += conv.responseTime;
    }
    
    // Sentiment (simplified)
    if (conv.messageAnalysis?.sentiment) {
      metrics.sentimentAnalysis[conv.messageAnalysis.sentiment]++;
    }
  });
  
  metrics.avgResponseTime = conversations.length > 0 ? totalResponseTime / conversations.length : 0;
  
  return metrics;
}

const metrics = processMetrics(data);

// Generate insights
const insights = {
  bestPlatform: Object.keys(metrics.leadsByPlatform).reduce((a, b) => 
    metrics.leadsByPlatform[a] > metrics.leadsByPlatform[b] ? a : b),
  
  peakHour: metrics.hourlyDistribution.indexOf(Math.max(...metrics.hourlyDistribution)),
  
  topIntent: Object.keys(metrics.intentDistribution).reduce((a, b) => 
    metrics.intentDistribution[a] > metrics.intentDistribution[b] ? a : b),
  
  conversionRate: metrics.conversionsByScore.high / metrics.totalConversations * 100,
  
  averageScore: data.reduce((sum, conv) => sum + (conv.score || 0), 0) / data.length
};

return { metrics, insights };
```

### 10. HTTP Request - Slack Report

```json
{
  "method": "POST", 
  "url": "{{$credentials.slackWebhook.url}}",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "text": "📊 *Relatório Diário Chatvolt*",
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "📊 Relatório Chatvolt - {{DateTime.now().toFormat('dd/MM/yyyy')}}"
        }
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "mrkdwn",
            "text": "*Total de Conversas:*\n{{$json.metrics.totalConversations}}"
          },
          {
            "type": "mrkdwn", 
            "text": "*Taxa de Conversão:*\n{{$json.insights.conversionRate.toFixed(1)}}%"
          },
          {
            "type": "mrkdwn",
            "text": "*Melhor Plataforma:*\n{{$json.insights.bestPlatform}}"
          },
          {
            "type": "mrkdwn",
            "text": "*Horário de Pico:*\n{{$json.insights.peakHour}}h"
          }
        ]
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Top 3 Intenções:*\n{{Object.entries($json.metrics.intentDistribution).sort((a,b) => b[1] - a[1]).slice(0,3).map(([intent, count]) => `• ${intent}: ${count}`).join('\n')}}"
        }
      }
    ]
  }
}
```

## 🔧 Templates de Credenciais

### Chatvolt API Credential
```json
{
  "name": "Chatvolt API",
  "type": "generic",
  "data": {
    "token": "YOUR_CHATVOLT_API_TOKEN",
    "baseUrl": "https://api.chatvolt.ai/v1"
  }
}
```

### WhatsApp Business Credential  
```json
{
  "name": "WhatsApp Business",
  "type": "generic", 
  "data": {
    "phoneNumberId": "YOUR_PHONE_NUMBER_ID",
    "accessToken": "YOUR_ACCESS_TOKEN",
    "webhookVerifyToken": "YOUR_WEBHOOK_VERIFY_TOKEN"
  }
}
```

---

## 🚀 Workflow Templates Prontos

### Lead Capture → CRM (Básico)
1. **Webhook Trigger** (recebe lead Chatvolt)
2. **Function Node** (processa e enriquece)
3. **IF Node** (score >= 70?)
4. **HTTP Request** (cria contato CRM)
5. **Slack Notification** (notifica vendedor)

### WhatsApp Follow-up (Avançado)
1. **Webhook Trigger** (mensagem WhatsApp)
2. **Function Node** (analisa intent)
3. **Switch Node** (routing por intent)
4. **HTTP Request** (resposta automática)
5. **Wait Node** (delay inteligente)
6. **HTTP Request** (follow-up personalizado)

### Analytics Dashboard (Completo)
1. **Schedule Trigger** (diário às 9h)
2. **HTTP Request** (busca conversas Chatvolt)
3. **Function Node** (processa métricas)
4. **HTTP Request** (update Google Sheets)
5. **Slack Notification** (relatório executivo)

💡 **Dica**: Comece com o workflow básico e vá evoluindo conforme a necessidade!