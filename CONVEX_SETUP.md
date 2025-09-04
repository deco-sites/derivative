# Configuração do Convex - Derivative

## 📋 Resumo da Configuração

O Convex foi configurado com sucesso para o projeto Derivative com schema simplificado:

### 🔧 Ambientes Configurados

#### Development
- **Deployment**: `dev:acrobatic-parakeet-865`
- **URL**: `https://acrobatic-parakeet-865.convex.cloud`
- **Arquivo de configuração**: `.env.local`

## 🗄️ Schema da Database

### Tabela: `contact_forms`

```typescript
{
  _id: string,                     // ID automático do Convex
  nome: string,                    // Nome do contato
  email: string,                   // Email do contato
  mensagem: string,                // Mensagem principal
  created_at: number,              // Timestamp de criação
  _creationTime: number            // Timestamp automático do Convex
}
```

### Índices Criados
- `by_created_at`: Ordenação por data de criação
- `by_email`: Busca por email

## 🚀 Funções Disponíveis

### Mutations (Escrita)
- `submitContactForm`: Inserir novo contato

### Queries (Leitura)
- `listar`: Listar todos os contatos (ordenados por data)
- `buscarPorEmail`: Buscar contatos por email

## 📝 Scripts Disponíveis

```bash
# Development
npm run convex:dev              # Iniciar modo desenvolvimento
npm run convex:deploy:dev       # Deploy único para dev

# Production  
npm run convex:deploy:prod      # Deploy para production
```

## 🔗 URLs dos Dashboards

- **Development**: https://dashboard.convex.dev/d/acrobatic-parakeet-865

## ✅ Status dos Testes

Todos os testes foram executados com sucesso:
- ✅ Inserção de contatos
- ✅ Listagem de contatos
- ✅ Busca por email
- ✅ Integração com formulário ContactFormHybrid

## 🎯 Próximos Passos

1. **✅ Integração com Frontend**: Formulário ContactFormHybrid já conectado
2. **Monitoramento**: Acesse o dashboard para monitorar uso e performance
3. **Deploy para Production**: Execute `npm run convex:deploy:prod` quando necessário
4. **Backup**: Configure backups automáticos se necessário

## 📚 Documentação

- [Convex Docs](https://docs.convex.dev/)
- [Convex Dashboard](https://dashboard.convex.dev/)
