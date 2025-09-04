# Configuração dos Ambientes Convex

## 🔧 **Ambientes Configurados**

### Development
- **Deployment**: `dev:acrobatic-parakeet-865`
- **URL**: `https://acrobatic-parakeet-865.convex.cloud`
- **Uso**: Desenvolvimento e testes locais
- **Dashboard**: https://dashboard.convex.dev/d/acrobatic-parakeet-865

### Production
- **Deployment**: `prod:watchful-capybara-907`
- **URL**: `https://watchful-capybara-907.convex.cloud`
- **Uso**: Site em produção
- **Dashboard**: https://dashboard.convex.dev/d/watchful-capybara-907

## 📝 **Como Funciona**

### **Development**
- Usado durante desenvolvimento local
- Dados de teste e desenvolvimento
- Acessado via `npx convex dev`

### **Production**
- Usado pelo site em produção
- Dados reais dos usuários
- Acessado via `npx convex deploy`

## 🔄 **Comandos Úteis**

```bash
# Development
npx convex dev                    # Iniciar modo desenvolvimento
npx convex run contatos:listar    # Executar query em development

# Production
npx convex deploy                 # Deploy para production
npx convex run contatos:listar --prod  # Executar query em production
```

## ✅ **Status Atual**

- ✅ **Development**: Funcionando com dados de teste
- ✅ **Production**: Funcionando com dados reais do formulário
- ✅ **Formulário**: Enviando para production corretamente
