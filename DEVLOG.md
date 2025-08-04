# DEVLOG do Projeto

## Dia 1 – Quarta-feira  
Setup inicial e análise de API  
- Inicialização do projeto com Next.js, TypeScript e Tailwind CSS  
- Estruturação de pastas por funcionalidade (components, context, types, api, etc.)  
- Pesquisa e tentativa de integração com a API da Marvel  
- Identificação de instabilidade (API fora do ar)  
- Decisão de migrar para a superheroapi.com como alternativa viável  

## Dia 2 – Quinta-feira  
Estrutura base e integração com nova API  
- Configuração da API Route do Next.js para proxy seguro  
- Criação da rota `/api/heroes` para buscar e cache dos dados  
- Implementação do `revalidate: 60` para otimização de performance  
- Definição do sistema de design: cores, fontes, ícones e theme  
- Criação dos componentes base: Header, Footer e Template reutilizável  

## Dia 3 – Sexta-feira  
Página Home e funcionalidades de UI  
- Desenvolvimento da página inicial com estrutura estática  
- Implementação da barra de carregamento no topo com estado global (LoadingContext)  
- Criação do componente SearchBar com autocomplete e navegação dinâmica  
- Adição de ordenação alfabética com toggle (A → Z / desligado)  
- Integração da listagem com dados da API e exibição em grid responsivo  

## Dia 4 – Sábado  
Estado global e navegação dinâmica  
- Implementação do FavoritesContext para gerenciar heróis favoritos  
- Persistência dos favoritos no localStorage  
- Botão de favoritar no HeroCard com feedback visual (ícone cheio/vazio)  
- Criação da rota dinâmica `/api/hero/[id]` para detalhes do herói  
- Correção de parsing de ID e validação segura com `parseInt` e `isNaN`  
- Preparação da estrutura para página de detalhes  

## Dia 5 – Domingo  
Finalização e refinamento do produto  
- Implementação da paginação na listagem de heróis (20 por página)  
- Botões de navegação com controle de estado e desativação condicional  
- Adaptação completa do layout para dispositivos móveis, tablets e desktop  
- Ajustes finos em UX: transições, espaçamentos, acessibilidade e responsividade  
- Organização final do código, limpeza de componentes e preparação para entrega  