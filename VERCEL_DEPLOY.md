# Deploy na Vercel

## Configuração

Este projeto está configurado para deploy na Vercel com as seguintes características:

- **Frontend**: React + Vite (SPA)
- **Backend**: Express.js (Serverless Functions)
- **Build Output**: `dist/spa`

## Arquivos de Configuração

### `vercel.json`
- Define o comando de build: `npm run build:vercel`
- Configura as funções serverless em `/api`
- Define rewrites para SPA routing

### `api/index.ts`
- Função serverless principal
- Contém todas as rotas da API
- Configurada para runtime Node.js 18.x

## Deploy

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. A Vercel detectará automaticamente as configurações

## Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure as variáveis necessárias:

```bash
cp .env.example .env.local
```

## Scripts

- `npm run dev` - Desenvolvimento local
- `npm run build:vercel` - Build para produção (Vercel)
- `npm run build:client` - Build apenas do frontend
