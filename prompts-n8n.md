# Prompts para Automações N8N

## 🔄 Automações de CRM/Vendas

### 1. Lead Qualification Workflow
```
Crie um workflow que:
- Receba leads via webhook
- Qualifique automaticamente baseado em score
- Envie para CRM (HubSpot/Pipedrive)
- Notifique vendedor via Slack/Teams
- Agende follow-up automático
```

### 2. Pipeline de Nutrição de Leads
```
Configure uma automação que:
- Monitore novos contatos no CRM
- Segmente por interesse/comportamento
- Envie emails personalizados via Mailchimp
- Atualize status no CRM conforme engajamento
- Escalate para vendas quando lead scoring atingir threshold
```

### 3. Gestão de Propostas
```
Automatize o processo de propostas:
- Novo deal criado no CRM → gera proposta no Google Docs
- Envia para aprovação via Slack
- Approved → envia para cliente via email
- Rejected → notifica vendedor com razão
- Cliente aceita → cria projeto no Asana/Monday
```

## 📧 Automações de Marketing

### 4. Social Media Monitoring
```
Monitore menções da marca:
- Busque menções no Twitter/LinkedIn via APIs
- Analise sentimento com OpenAI
- Resposta positiva → adiciona ao banco de testimonials
- Resposta negativa → alerta time de CS via Slack
- Salve dados no Airtable para análise
```

### 5. Content Distribution
```
Automatize distribuição de conteúdo:
- Novo post no blog (RSS/webhook)
- Redimensiona imagens automaticamente
- Posta no LinkedIn, Twitter, Facebook
- Agenda stories no Instagram
- Notifica time de marketing no Slack
```

### 6. Email Marketing Automation
```
Sequência de email marketing:
- Novo subscriber → série de boas-vindas (5 emails)
- Comprou produto → onboarding emails
- Não abriu em 30 dias → reativação campaign
- Cancelou → pesquisa de feedback + oferta especial
```

## 🛒 E-commerce & Vendas

### 7. Order Processing Workflow
```
Automatize processamento de pedidos:
- Nova venda no Shopify/WooCommerce
- Valida pagamento via API do gateway
- Atualiza estoque no ERP
- Gera nota fiscal
- Envia tracking por email/WhatsApp
- Atualiza CRM com dados da compra
```

### 8. Abandoned Cart Recovery
```
Recuperação de carrinho abandonado:
- Detecta carrinho abandonado (webhook)
- Espera 1h → primeiro email
- Espera 24h → segundo email com desconto
- Espera 72h → último email com urgência
- Se comprar → remove da sequência
```

### 9. Review & Feedback Collection
```
Coleta de avaliações automática:
- Produto entregue → aguarda 3 dias
- Envia email solicitando review
- Review positiva → compartilha nas redes sociais
- Review negativa → encaminha para CS
- Salva dados no banco para análise
```

## 🎯 Automações de Atendimento

### 10. Support Ticket Routing
```
Roteamento inteligente de tickets:
- Novo ticket via email/form → analisa conteúdo
- Classifica por prioridade/categoria (OpenAI)
- Roteia para agente especializado
- Urgente → notifica manager via SMS
- Atualiza cliente com tempo estimado
```

### 11. Customer Onboarding
```
Onboarding automático de clientes:
- Novo cliente → cria conta nos sistemas
- Envia credenciais de acesso seguro
- Agenda call de onboarding
- Série de emails educativos
- Monitora primeiros passos e engajamento
```

### 12. Feedback Loop Automation
```
Loop de feedback contínuo:
- Coleta NPS automaticamente (email/SMS)
- Score alto → solicita review público
- Score baixo → agenda call com CS
- Analisa trends e alertas gerenciais
- Relatório mensal automático
```

## 📊 Automações de Relatórios

### 13. KPI Dashboard Automation
```
Dashboard automático de KPIs:
- Coleta dados de múltiplas fontes (CRM, GA, financeiro)
- Processa e calcula métricas
- Atualiza Google Sheets/Data Studio
- Envia relatório semanal por email
- Alertas quando métricas saem do padrão
```

### 14. Financial Reporting
```
Relatórios financeiros automáticos:
- Sincroniza dados do ERP/contabilidade
- Calcula receita, custos, margem
- Gera gráficos automáticos
- Envia para stakeholders
- Backup em Google Drive/OneDrive
```

## 🔧 Integrações Técnicas

### 15. API Data Sync
```
Sincronização entre sistemas:
- Monitora mudanças no sistema A
- Transforma dados conforme necessário
- Atualiza sistema B via API
- Log de erros para debugging
- Retry automático em falhas
```

### 16. Backup & Monitoring
```
Monitoramento e backup automático:
- Verifica saúde dos sistemas (health checks)
- Backup automático de dados críticos
- Alertas em caso de falhas
- Logs centralizados para análise
- Relatório de uptime mensal
```

## 🎨 Templates de Prompts Personalizados

### Template Base para Novos Workflows
```
Contexto: [Descreva o processo atual]
Objetivo: [O que você quer automatizar]
Sistemas envolvidos: [Lista os sistemas/APIs]
Triggers: [O que inicia o processo]
Ações: [Passos da automação]
Condições: [Regras de negócio]
Outputs: [Resultado esperado]
Tratamento de erros: [Como lidar com falhas]
```

### Checklist para Implementação
- [ ] Definir webhooks/triggers
- [ ] Configurar autenticações
- [ ] Mapear campos entre sistemas
- [ ] Implementar tratamento de erros
- [ ] Configurar logs e monitoramento
- [ ] Testar cenários de falha
- [ ] Documentar o workflow
- [ ] Treinar equipe

## 💡 Dicas de Boas Práticas

1. **Sempre inclua tratamento de erros**: Use nós "If" para validar dados antes de processar
2. **Implemente retry logic**: Configure tentativas automáticas em falhas de API
3. **Use delays estratégicos**: Evite rate limiting com delays entre requests
4. **Monitore performance**: Configure alertas para workflows que demoram muito
5. **Documente tudo**: Mantenha notas claras em cada nó do workflow
6. **Teste edge cases**: Sempre teste com dados inválidos/incompletos
7. **Backup de configurações**: Exporte workflows regularmente
8. **Versionamento**: Use Git para versionar workflows complexos

---

💡 **Prompt Meta**: Use estes prompts como base e adapte conforme suas necessidades específicas. Cada automação pode ser quebrada em workflows menores para facilitar manutenção e debugging.