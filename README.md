# 🌌 Hero hub (Super Hero App)

Aplicação web para explorar e favoritar heróis do universo dos quadrinhos, com interface moderna, responsiva e funcionalidades avançadas de busca, ordenação e navegação.

Utilizei a **[superheroapi.com](https://superheroapi.com/)** como fonte de dados, já que a API da Marvel estava instável durante o desenvolvimento. Portanto, segui fielmente ao design e incrementei pequenas alterações na UI usufruindo ao máximo essa API - um pouco perfomática em comparação com a da marvel

---
## Home
<img width="1863" height="932" alt="image" src="https://github.com/user-attachments/assets/c8c6ce6a-a2ab-414e-8ab1-da8f9f8542ac" />

## Hero detail
<img width="1862" height="929" alt="image" src="https://github.com/user-attachments/assets/1e533c84-d7f7-4c16-8ed8-21d351224ca5" />

---

## 🚀 Funcionalidades

- ✅ **Listagem de heróis** com carregamento eficiente
- 🔍 **Barra de pesquisa com autocomplete** (sugestões em tempo real)
- ⏱️ **Barra de carregamento** no topo da página (feedback visual)
- 🔤 **Ordenação por nome** (A → Z)
- 📄 **Paginação** (20 heróis por página)
- ❤️ **Sistema de favoritos** com persistência no `localStorage`
- 🔗 **Navegação dinâmica** para detalhes do herói (`/hero/[id]`)
- 📱 **Layout 100% responsivo** (mobile, tablet, desktop)
- 🧩 **Componentes reutilizáveis** e bem estruturados
- 🧠 **Estado global** com Context API (`LoadingContext`, `FavoritesContext`)
- ⚙️ **API Routes no Next.js** como proxy seguro
- 💾 **Cache de 60 segundos** para melhor performance

---

## 🛠️ Tecnologias Utilizadas

- **Next.js App Router** (React Server Components)
- **TypeScript** – para tipagem segura e manutenibilidade
- **Tailwind CSS** – estilização rápida e responsiva
- **Context API** – gerenciamento de estado global
- **superheroapi.com** – fonte de dados dos heróis
- **Next.js API Routes** – proxy seguro e cache com `revalidate`
- **localStorage** – persistência de favoritos

---

## 📁 Estrutura de Pastas
app/
├── api/ → Rotas da API (proxy para superheroapi)
├── hero/[id]/ → Página dinâmica de detalhes
├── components/ → Componentes reutilizáveis (HeroCard, SearchBar, etc.)
├── context/ → Contextos globais (Loading, Favorites)
├── types/ → Interfaces e tipos TypeScript
├── public/ → Assets (imagens, ícones, fonts)
└── template/ → Layout base com Header e Footer

---

## 📦 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/superhero-app.git
   cd superhero-app

2. npm install

3. Crie um arquivo `.env.local`com *SUPERHERO_API_TOKEN*=sua_chave_aqui

4. npm run dev e acesse: `localhost:3000`

> *"Como você lidaria com o limite de 5 favoritos se estivesse usando Redux ou Zustand?"*

No caso de gerenciamento de favoritos com limite, seja usando Redux ou Zustand, minha abordagem seria centralizar essa lógica diretamente na store. No Zustand, por exemplo, implementei a verificação dentro da própria função addFavorite, validando se o herói já está na lista e se o total não ultrapassa 5. 

Caso ultrapasse, retorno uma notificação via toast para o usuário, sem adicionar o item. Isso garante que a UI permaneça limpa e desacoplada das regras de negócio, mantendo a responsabilidade do controle de favoritos na camada de estado global.

