# Prompts N8N para Chatvolt.ai / FluxVolt

## 🤖 Automações Específicas para Chatvolt.ai

### 1. Lead Capture Automation via Chatvolt
```
Prompt: Configure uma automação que:
- Monitore novos leads capturados pelo chatbot Chatvolt
- Receba dados via webhook do Chatvolt quando um lead for qualificado
- Enriqueça o lead com dados externos (LinkedIn, APIs)
- Crie/atualize contato no CRM (HubSpot/Pipedrive)
- Dispare sequência de nutrição personalizada
- Notifique vendedor via Slack com contexto da conversa
- Agende follow-up automático baseado no perfil do lead
```

### 2. WhatsApp Business Integration
```
Prompt: Integre Chatvolt WhatsApp com automações que:
- Capture mensagens recebidas via webhook Chatvolt
- Analise intenção do cliente com IA (OpenAI)
- Rotee conversa baseada no tipo de demanda:
  * Vendas → CRM + notificação vendedor
  * Suporte → Sistema de tickets + notificação CS
  * Agendamento → Calendly + confirmação automática
- Envie mensagens proativas baseadas em triggers do CRM
- Mantenha histórico unificado no banco de dados
```

### 3. Multi-Agent Workflow Orchestration
```
Prompt: Orquestre múltiplos agentes Chatvolt via N8N:
- Agente Vendas: Qualifica leads, agenda demos
- Agente Suporte: Resolve tickets, escalação inteligente
- Agente Cobrança: Follow-up automático de pagamentos
- Agente Onboarding: Guia novos clientes
- Coordene handoffs entre agentes baseado no contexto
- Mantenha estado da conversa sincronizado
- Analytics unificado de performance dos agentes
```

### 4. Intelligent Lead Scoring com Chatvolt
```
Prompt: Sistema de lead scoring integrado:
- Capture dados da conversa do chatbot Chatvolt
- Analise palavras-chave, tempo de engajamento, perguntas feitas
- Calcule score baseado em:
  * Urgência da necessidade (IA analysis)
  * Budget mencionado
  * Timeline do projeto
  * Autoridade de decisão
- Atualize score no CRM dinamicamente
- Trigger automações baseadas no score:
  * High Score → Notificação imediata vendedor
  * Medium Score → Sequência nurturing
  * Low Score → Newsletter mensal
```

### 5. Customer Journey Automation
```
Prompt: Automatize jornada do cliente com Chatvolt:
- Prospect → Lead (primeiro contato chatbot)
- Lead → Oportunidade (qualificação atingida)
- Oportunidade → Cliente (fechamento)
- Cliente → Advocate (onboarding completo)

Para cada etapa:
- Trigger automático baseado em ações no Chatvolt
- Conteúdo personalizado via email/WhatsApp
- Tasks automáticas para time comercial
- Métricas de conversão entre etapas
- Alertas para leads estagnados
```

## 📊 Integrações CRM Específicas

### 6. HubSpot + Chatvolt Sync
```
Prompt: Sincronização bidirecional completa:
- Novo lead Chatvolt → Contato HubSpot automático
- Atualização de deal HubSpot → Mensagem personalizada Chatvolt
- Histórico de conversas Chatvolt → Timeline HubSpot
- Properties HubSpot → Personalização Chatvolt
- Workflow HubSpot → Trigger mensagens Chatvolt
- Relatórios unificados de performance de vendas
```

### 7. Pipedrive + Chatvolt Integration
```
Prompt: Automatize pipeline de vendas:
- Lead qualificado Chatvolt → Deal Pipedrive automático
- Stage mudou Pipedrive → Notificação Chatvolt para cliente
- Won deal → Onboarding sequence via Chatvolt
- Lost deal → Re-engagement campaign
- Activities Pipedrive → Follow-up automático Chatvolt
- Custom fields sync entre plataformas
```

### 8. Notion Database Integration
```
Prompt: Use Notion como hub central:
- Leads Chatvolt → Database Notion organizado
- Status tracking de cada lead com properties
- Templates de resposta para agents Chatvolt
- Knowledge base Notion → Training data Chatvolt
- Team collaboration comments em cada lead
- Automated reports generation via N8N
```

## 🔄 Automações de Atendimento

### 9. Smart Ticket Routing
```
Prompt: Roteamento inteligente via Chatvolt:
- Classifique tickets automaticamente por:
  * Categoria (técnico, comercial, financeiro)
  * Prioridade (urgente, normal, baixa)
  * Cliente (plan, histórico, valor)
- Route para agente especializado Chatvolt
- Escalation automática por tempo de resposta
- SLA tracking e alertas preventivos
- Customer satisfaction survey pós-resolução
```

### 10. Proactive Customer Success
```
Prompt: CS proativo com Chatvolt:
- Monitore health score do cliente no CRM
- Score baixo → Outreach automático Chatvolt
- Milestone alcançado → Congratulations message
- Feature adoption → Tutorial personalizado
- Renewal risk → Intervention workflow
- Success metrics → Upsell opportunities
- Automated NPS surveys via chatbot
```

### 11. Multi-Language Support Automation
```
Prompt: Suporte multilíngue inteligente:
- Detecte idioma automaticamente no Chatvolt
- Route para agente apropriado
- Translate messages automaticamente (Google Translate)
- Maintain conversation context
- Cultural customization por região
- Performance analytics por idioma
```

## 🎯 Marketing Automation

### 12. Content-Driven Lead Generation
```
Prompt: Geração de leads baseada em conteúdo:
- Chatbot Chatvolt oferece ebooks/webinars
- Capture informações em troca de conteúdo
- Segment leads baseado no conteúdo consumido
- Drip campaign personalizada via email/WhatsApp
- Track engagement e ajuste messaging
- Convert content leads para sales qualified leads
```

### 13. Retargeting Automation
```
Prompt: Retargeting inteligente com Chatvolt:
- Track visitors que não converteram no chatbot
- Create custom audiences no Facebook/Google
- Triggered ads para visitors abandonados
- Chatvolt messenger ads para re-engagement
- A/B testing de diferentes approaches
- Attribution tracking até conversion final
```

### 14. Event-Driven Marketing
```
Prompt: Marketing baseado em eventos:
- Customer action triggers → Chatvolt message
- Abandoned cart → WhatsApp reminder
- Trial ending → Upgrade conversation
- Feature release → Announcement + tutorial
- Competitor mention → Competitive comparison
- Seasonal events → Personalized offers
```

## 📱 WhatsApp Business Avançado

### 15. WhatsApp Business API Automation
```
Prompt: Maximizar WhatsApp Business com Chatvolt:
- Template messages para diferentes use cases
- Interactive buttons e quick replies
- Media messages (imagens, documentos, vídeos)
- Location sharing para appointments
- Payment integration via WhatsApp
- Broadcast lists segmentadas
- Analytics avançado de engagement
```

### 16. Customer Onboarding via WhatsApp
```
Prompt: Onboarding completo via WhatsApp:
- Welcome series automatizada pós-venda
- Step-by-step tutorial via messages
- Document collection (RG, CPF, etc)
- Account setup assistance
- Feature introduction sequencial
- Milestone celebrations
- 30-60-90 day check-ins automáticos
```

### 17. E-commerce WhatsApp Automation
```
Prompt: E-commerce via WhatsApp com Chatvolt:
- Product catalog integration
- Order placement via chat
- Payment link generation
- Order tracking updates
- Delivery confirmation
- Review request automation
- Cross-sell/upsell based on purchase history
```

## 🔍 Analytics e Insights

### 18. Conversation Analytics
```
Prompt: Analytics avançado das conversas:
- Sentiment analysis das conversas Chatvolt
- Topic modeling para identificar trends
- Response time tracking
- Conversion rate por tipo de conversa
- Agent performance metrics
- Customer satisfaction correlation
- Automated insights e recommendations
```

### 19. ROI Tracking Automation
```
Prompt: Track ROI completo do Chatvolt:
- Custos: Licença + tempo agentes + desenvolvimento
- Benefícios: Leads convertidos + time saved + satisfaction
- Automated monthly ROI reports
- Attribution modeling primeira vs última interação
- Lifetime value impact tracking
- Compare performance pre vs pós Chatvolt
```

### 20. Predictive Analytics
```
Prompt: Analytics preditivo com Chatvolt:
- Predict lead conversion probability
- Optimal timing para outreach
- Churn risk identification
- Personalization recommendations
- A/B testing automation
- Performance forecasting
- Anomaly detection em conversações
```

## ⚡ Integrações Técnicas

### 21. API Monitoring e Fallback
```
Prompt: Monitoring robusto da integração:
- Health check APIs Chatvolt regulares
- Automatic fallback para human agents
- Error logging e alertas
- Performance monitoring
- Rate limiting handling
- Backup webhook endpoints
- Disaster recovery procedures
```

### 22. Data Backup e Compliance
```
Prompt: Backup e conformidade com LGPD:
- Backup automático de conversas Chatvolt
- Data anonymization para analytics
- Consent tracking e management
- Data retention policy automation
- Right to be forgotten implementation
- Audit trail completo
- Privacy policy updates automation
```

### 23. Custom Integration Development
```
Prompt: Desenvolvimentos customizados:
- Chatvolt webhook → Custom business logic
- Custom dashboard development
- Advanced reporting automation
- Third-party API integrations
- Custom workflow triggers
- Performance optimization
- Scalability planning
```

## 🎨 Templates de Implementação

### Template Base para Chatvolt Integration
```
Contexto: [Empresa e uso atual do Chatvolt]
Objetivo: [O que automatizar especificamente]
Triggers: [Eventos do Chatvolt que iniciam workflow]
Sistemas alvo: [CRM, email, etc]
Business rules: [Lógica específica do negócio]
Fallback: [O que fazer se API falhar]
Success metrics: [Como medir sucesso]
```

### Checklist de Implementação Chatvolt
- [ ] Webhook Chatvolt configurado corretamente
- [ ] API keys e credenciais configuradas
- [ ] Estrutura de dados mapeada entre sistemas
- [ ] Business logic implementada e testada
- [ ] Error handling para edge cases
- [ ] Performance testing realizado
- [ ] Monitoring e alertas configurados
- [ ] Documentation completa criada
- [ ] Team training realizado

## 💡 Boas Práticas Específicas

### Para Chatvolt.ai
1. **Sempre mantenha fallback humano**: Configure escalation quando chatbot não conseguir resolver
2. **Personalize por segmento**: Use dados do CRM para personalizar respostas
3. **Monitore sentiment**: Track satisfação do cliente via análise de sentimento
4. **Otimize timing**: Analise melhores horários para outreach automático
5. **Teste A/B contínuo**: Sempre teste diferentes approaches de conversação
6. **LGPD compliance**: Garanta que dados sejam tratados conforme regulamentação

### Dicas de Performance
- Use cache para dados frequentemente acessados
- Implemente rate limiting nas APIs
- Configure retry logic com exponential backoff
- Monitore latência end-to-end
- Mantenha logs estruturados para debugging

---

## 🚀 Próximos Passos

1. **Identifique seu use case prioritário** do Chatvolt
2. **Configure webhooks** necessários na plataforma
3. **Mapeie os dados** entre Chatvolt e sistemas destino
4. **Implemente MVP** do workflow mais crítico
5. **Teste com dados reais** em ambiente controlado
6. **Monitore performance** e otimize continuamente

💡 **Lembre-se**: O Chatvolt.ai é uma plataforma brasileira moderna - aproveite suas funcionalidades específicas de WhatsApp Business e integração com ecossistema nacional!