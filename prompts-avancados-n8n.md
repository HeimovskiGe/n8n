# Prompts Avançados para N8N

## 🤖 Automações com IA

### 1. Análise Inteligente de Documentos
```
Prompt: Crie um workflow que receba documentos via email/upload e:
- Extraia texto usando OCR (Tesseract/Google Vision)
- Analise conteúdo com OpenAI para categorizar o documento
- Identifique informações importantes (valores, datas, nomes)
- Salve dados estruturados no banco de dados
- Roteia documento para departamento correto baseado na categoria
- Envia notificação com resumo gerado por IA
```

### 2. Chatbot Inteligente com Escalation
```
Prompt: Configure um chatbot que:
- Receba mensagens via WhatsApp/Telegram/Discord
- Use OpenAI para entender a intenção do usuário
- Consulte base de conhecimento (Pinecone/Vector DB)
- Responda automaticamente questões simples
- Escalate para humano quando necessário
- Salve conversa completa no CRM
- Aprenda com feedbacks para melhorar respostas
```

### 3. Análise de Sentimento em Tempo Real
```
Prompt: Monitore sentimento da marca em tempo real:
- Capture menções em redes sociais, reviews, comentários
- Analise sentimento com multiple providers (OpenAI, AWS Comprehend)
- Detecte crises de imagem automaticamente
- Acione alertas urgentes para PR team
- Gere insights semanais sobre tendências de sentimento
- Sugira ações corretivas baseadas em padrões detectados
```

## 📈 Automações de Growth

### 4. Lead Scoring Dinâmico
```
Prompt: Sistema de lead scoring que se adapta automaticamente:
- Colete dados de comportamento (site, email, social)
- Use machine learning para calcular probabilidade de conversão
- Ajuste scoring baseado em conversões reais
- Identifique padrões de leads que convertem
- Automaticamente ajuste campanhas de marketing
- Envie leads quentes para vendas em tempo real
```

### 5. Otimização Automática de Campanhas
```
Prompt: Otimize campanhas de marketing automaticamente:
- Monitore performance de anúncios (Facebook, Google, LinkedIn)
- Analise ROI e métricas de conversão
- Pause campanhas com baixo desempenho
- Aumente budget em campanhas rentáveis
- Teste A/B automático de criativos
- Gere relatórios de otimizações realizadas
```

### 6. Churn Prediction & Prevention
```
Prompt: Previna churn de clientes proativamente:
- Analise padrões de comportamento que indicam churn
- Calcule health score de cada cliente
- Acione campanhas de retenção automáticas
- Personalize ofertas baseadas no histórico
- Agende calls de CS para clientes em risco
- Meça efetividade das ações de retenção
```

## 💰 Automações Financeiras

### 7. Conciliação Bancária Automática
```
Prompt: Automatize conciliação financeira:
- Importe extratos bancários via API/email
- Match transações com faturas pendentes
- Identifique discrepâncias automaticamente
- Gere relatórios de reconciliação
- Alertas para transações não identificadas
- Update status de pagamentos no ERP
- Acione cobrança para pendências
```

### 8. Gestão de Fluxo de Caixa Inteligente
```
Prompt: Previsão e gestão automática de caixa:
- Colete dados de receitas e despesas
- Analise padrões sazonais
- Preveja fluxo de caixa para próximos meses
- Alertas para possíveis problemas de liquidez
- Sugira ações para otimizar caixa
- Automatize aplicações financeiras conforme regras
```

### 9. Controle de Inadimplência
```
Prompt: Sistema anti-inadimplência automatizado:
- Monitore vencimentos de faturas
- Escalone cobrança conforme política (email → SMS → call)
- Analise perfil de risco do cliente
- Negocie automaticamente parcelamentos
- Acione juridico quando necessário
- Track success rate das estratégias de cobrança
```

## 🏢 Automações Corporativas

### 10. Onboarding de Funcionários
```
Prompt: Automatize onboarding completo:
- Novo funcionário → cria contas em todos sistemas
- Envia credenciais seguras via email criptografado
- Agenda treinamentos obrigatórios
- Assign equipamentos e acessos baseados no cargo
- Timeline de check-ins automáticos (30, 60, 90 dias)
- Coleta feedback sobre processo de onboarding
```

### 11. Gestão de Compliance Automática
```
Prompt: Monitore compliance corporativo:
- Verifique certificações próximas do vencimento
- Monitore mudanças em regulamentações
- Automatize auditorias internas
- Gere relatórios de conformidade
- Alertas para não-conformidades
- Track ações corretivas até resolução
```

### 12. Sistema de Aprovações Multinível
```
Prompt: Workflow de aprovações complexo:
- Solicitação → analisa valor/tipo → define aprovadores
- Roteamento baseado em hierarquia e alçadas
- Escalation automática por tempo
- Approval via email/Slack com autenticação
- Audit trail completo de todas decisões
- Dashboard para gestores acompanharem pendências
```

## 🛡️ Automações de Segurança

### 13. Monitoramento de Segurança
```
Prompt: Sistema de security monitoring:
- Monitore logs de segurança de múltiplos sistemas
- Detecte padrões suspeitos (múltiplos logins, IPs estranhos)
- Correlacione eventos entre sistemas
- Acione alertas em tempo real
- Automatize bloqueio de IPs maliciosos
- Gere relatórios de incidentes de segurança
```

### 14. Backup e Disaster Recovery
```
Prompt: Sistema robusto de backup:
- Backup automático de dados críticos
- Teste integridade dos backups
- Replica dados para múltiplas localizações
- Simule cenários de disaster recovery
- Documentação automática de procedimentos
- Alertas para falhas em backups
```

### 15. Gestão de Credenciais
```
Prompt: Rotação automática de senhas/tokens:
- Inventário de todas credenciais/APIs
- Rotação automática conforme política
- Update credenciais em todos sistemas
- Alertas para credenciais próximas do vencimento
- Audit de uso de credenciais
- Revogação automática de acesso para ex-funcionários
```

## 🌐 Integrações Complexas

### 16. Multi-Cloud Orchestration
```
Prompt: Orquestre serviços em múltiplas clouds:
- Monitore recursos AWS, Azure, GCP
- Otimize custos automaticamente
- Balance carga entre providers
- Migrate workloads conforme necessário
- Alertas para anomalias de custo/performance
- Relatórios unificados de infraestrutura
```

### 17. Event-Driven Architecture
```
Prompt: Sistema orientado a eventos:
- Capture eventos de todos sistemas
- Processe em tempo real com rules engine
- Acione workflows baseados em combinações de eventos
- Mantenha estado consistente entre sistemas
- Handle failures e retry logic
- Monitore performance e throughput
```

### 18. Data Pipeline Automático
```
Prompt: Pipeline de dados end-to-end:
- Extract dados de múltiplas fontes
- Transform conforme business rules
- Validate qualidade dos dados
- Load em data warehouse/lake
- Gere datasets para analytics
- Alertas para anomalias nos dados
```

## 🎯 Casos de Uso Específicos

### 19. E-learning Platform Automation
```
Prompt: Automatize plataforma de ensino:
- Novo aluno → cria conta e envia boas-vindas
- Monitore progresso e engajamento
- Sugira conteúdos baseado no perfil
- Automatize certificações quando completar curso
- Colete feedback e analise satisfação
- Acione suporte quando aluno trava
```

### 20. Real Estate CRM Automation
```
Prompt: CRM imobiliário automatizado:
- Capture leads de portais (ZAP, Viva Real)
- Qualifique baseado em orçamento/localização
- Agende visitas automaticamente
- Follow-up personalizado pós-visita
- Automatize processo de financiamento
- Track pipeline desde lead até fechamento
```

### 21. Healthcare Appointment System
```
Prompt: Sistema médico automatizado:
- Agendamento online com disponibilidade real-time
- Lembretes automáticos (email/SMS/WhatsApp)
- Triagem prévia com questionários
- Integração com prontuário eletrônico
- Cobrança automática de consultas
- Follow-up pós-consulta para satisfação
```

## 🔧 Templates de Debugging

### Debug Workflow Template
```
Para debuggar workflows complexos:
1. Adicione nós "Set" para capturar estado em cada etapa
2. Use "Function" nodes para logging detalhado
3. Implemente error handling em cada branch
4. Adicione timeouts para evitar workflows infinitos
5. Configure webhook para capturar dados de debug
6. Use conditional logic para bypass em testing
```

### Error Handling Pattern
```
Pattern padrão para tratamento de erros:
- Try/Catch em operações críticas
- Retry logic com backoff exponencial
- Dead letter queue para falhas persistentes
- Alertas diferenciados por severidade
- Rollback automático quando possível
- Logging estruturado para análise
```

### Performance Optimization
```
Otimizações de performance:
- Batch processing para operações em massa
- Parallel execution onde possível
- Cache de dados frequentemente acessados
- Rate limiting para APIs externas
- Async processing para operações lentas
- Monitoring de tempo de execução
```

---

## 🚀 Prompt para Gerar Novos Workflows

```
Baseado no processo [DESCREVER PROCESSO], crie um workflow N8N que:

**Contexto do Negócio:**
- Empresa: [tipo/segmento]
- Processo atual: [como é feito hoje]
- Pain points: [problemas atuais]
- Volume: [quantos por dia/mês]

**Requisitos Técnicos:**
- Sistemas envolvidos: [lista]
- APIs disponíveis: [lista]
- Dados necessários: [campos]
- Integrações: [outros sistemas]

**Resultado Esperado:**
- Automatize [X%] do processo
- Reduza tempo de [X] para [Y]
- Elimine [problemas específicos]
- Gere [insights/relatórios]

**Constraints:**
- Budget: [limitações]
- Tempo: [prazo para implementar]
- Recursos: [equipe disponível]
- Compliance: [requisitos]

Configure o workflow com:
1. Triggers apropriados
2. Error handling robusto
3. Logging e monitoring
4. Documentação clara
5. Testes automatizados
```

💡 **Dica:** Use estes prompts como templates e adapte para suas necessidades específicas. Cada workflow deve ser testado em ambiente de desenvolvimento antes de ir para produção.