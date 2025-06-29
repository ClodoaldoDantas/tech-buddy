# ⭐ Tech Buddy

Tech Buddy é uma aplicação web para avaliação e consulta de tecnologias, permitindo que usuários encontrem, avaliem e comentem sobre diferentes stacks e ferramentas do universo da programação.

## Funcionalidades

- Listagem de tecnologias com paginação
- Busca por nome de tecnologia
- Visualização de detalhes de cada tecnologia
- Avaliação (reviews) com nota e comentário
- Paginação de reviews
- Cálculo automático da média de avaliações e total de reviews

## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=react,next,ts,tailwind,prisma,postgres)](https://skillicons.dev)

## Como rodar o projeto

1. **Clone o repositório**
```bash
git clone https://github.com/clodoaldodantas/tech-buddy.git
cd tech-buddy
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
- Copie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente, especialmente a conexão do banco de dados.

4. **Rode as migrations do Prisma**
```bash
npx prisma migrate dev
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

6. **Acesse em**
```
http://localhost:3000
```

## Scripts úteis

- `npm run dev` — inicia o servidor em modo desenvolvimento
- `npm run build` — gera a build de produção
- `npm run start` — inicia o servidor em produção
- `npx prisma studio` — interface visual para o banco de dados

## Estrutura de Pastas

```
src/
  features/
    technologies/
    reviews/
  lib/
  utils/
  pages/
```

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.
