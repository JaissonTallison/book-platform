# Plataforma de Livros

> Transformando livros em experiências digitais.

O **Livro Vivo** é uma plataforma SaaS desenvolvida para editoras, escolas e leitores, transformando cada livro em uma experiência digital interativa por meio de QR Code, Inteligência Artificial, gamificação, conteúdos multimídia e acompanhamento de aprendizagem.

Este projeto tem como objetivo aproximar o universo editorial das tecnologias modernas, permitindo que cada obra publicada continue gerando valor muito além da venda do livro físico.

---

##  Visão Geral

Imagine comprar um livro físico e, ao escanear um QR Code, acessar:

-  Biblioteca Digital
-  IA especializada no conteúdo do livro
-  Vídeos complementares
-  Áudios
-  Exercícios
-  Quizzes
-  Mapas mentais
-  Gamificação
-  Acompanhamento de progresso
-  Certificados

O Livro Vivo conecta leitores, professores, escolas e editoras em um único ecossistema digital.

---

#  Funcionalidades

## Landing Page

- Página institucional
- Apresentação da plataforma
- Planos
- Demonstração
- Contato

---

## Área do Leitor

- Cadastro
- Login
- Biblioteca
- Livros adquiridos
- Leitura digital
- Conteúdo complementar
- IA
- Quiz
- Certificados
- Perfil

---

## Área da Editora

- Dashboard
- Cadastro de livros
- Cadastro de capítulos
- Gestão de autores
- Upload de vídeos
- Upload de PDFs
- Gestão de usuários
- Relatórios
- Analytics

---

## Área Escolar

- Escolas
- Professores
- Turmas
- Alunos
- Tarefas
- Relatórios de desempenho
- Acompanhamento de leitura

---

## Inteligência Artificial

A IA poderá:

- Explicar capítulos
- Criar resumos
- Gerar exercícios
- Criar simulados
- Responder dúvidas
- Gerar flashcards
- Auxiliar nos estudos

---

## Gamificação

- Medalhas
- Ranking
- Pontuação
- Trilhas
- Metas
- Certificados

---

#  Arquitetura

```text
src/
│
├── app/
│   ├── (landing)
│   ├── (auth)
│   ├── (reader)
│   ├── (publisher)
│   └── (school)
│
├── components/
├── features/
├── hooks/
├── lib/
├── mocks/
├── providers/
├── services/
├── styles/
└── types/
```

---

# 🛠 Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- React Query
- React Hook Form
- Zod

---

## Futuro Backend

- NestJS
- PostgreSQL
- Redis
- RabbitMQ
- MinIO

---

## Mobile

- React Native
- Expo

---

#  Estrutura do Projeto

```text
book-platform/

src/

public/

docs/

package.json
```

---

#  Ambiente de Desenvolvimento

| Serviço | Porta |
|----------|------:|
| Frontend Next.js | 3200 |

Futuramente:

| Serviço | Porta |
|----------|------:|
| API NestJS | 3500 |
| PostgreSQL | 5440 |
| Redis | 6385 |
| RabbitMQ | 5690 |
| RabbitMQ Dashboard | 15690 |
| MinIO API | 9200 |
| MinIO Console | 9201 |

---

#  Executando

```bash
pnpm install

pnpm dev
```

Acesse:

```
http://localhost:3200
```

---

#  Roadmap

- [x] Fundação do projeto
- [x] Configuração da stack
- [x] Design System
- [ ] Landing Page
- [ ] Área do Leitor
- [ ] Biblioteca Digital
- [ ] IA
- [ ] Dashboard da Editora
- [ ] Área Escolar
- [ ] Aplicativo Mobile
- [ ] Backend NestJS

---

#  Objetivo

Mais do que vender livros, o Livro Vivo busca criar um ecossistema digital onde cada publicação se transforma em uma experiência contínua de aprendizado, interação e relacionamento entre leitores, professores, escolas e editoras.

---

##  Licença

Este projeto está em desenvolvimento e todos os direitos são reservados.
