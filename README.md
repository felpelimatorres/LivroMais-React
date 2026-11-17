# LIVRO+ | Página de apresentação (React)

Site de apresentação do PFC **LIVRO+**, um sistema web de biblioteca educacional desenvolvido no Bacharelado em Sistemas de Informação da UMC.

> Este repositório tem **só a página de apresentação**, feita em React. O sistema LIVRO+ (Flask + MySQL, arquitetura MVC) é outro projeto e fica em [FellT430/Sistema-Web-De-Biblioteca-](https://github.com/FellT430/Sistema-Web-De-Biblioteca-). Um projeto não altera o outro.

## Páginas

| Rota | Página | Conteúdo |
|---|---|---|
| `/` | Início | Hero, números do projeto, perfis e chamada para o sistema |
| `/sobre` | Sobre | Problema, solução e objetivo |
| `/funcionalidades` | Funcionalidades | Abas por perfil, segurança/LGPD e regras de negócio |
| `/tecnologias` | Tecnologias | Stack, arquitetura MVC e hospedagem |
| `/equipe` | Equipe | Integrantes, orientador e links do projeto |
| `*` | 404 | Página não encontrada |

## Tecnologias desta página

- React 19 + Vite
- React Router (navegação entre as páginas)
- React Icons
- CSS puro (sem framework)
- Deploy na Vercel

## Estrutura

```
src/
├── main.jsx            # ponto de entrada (BrowserRouter)
├── App.jsx             # rotas + Navbar e Footer
├── index.css           # estilos e cores (azul-marinho e amarelo)
├── data/projeto.js     # TODOS os textos e links do site
├── components/         # Navbar, Footer, Logo, CabecalhoPagina, ScrollToTop
└── pages/              # Inicio, Sobre, Funcionalidades, Tecnologias, Equipe, NaoEncontrada
```

Para mudar um texto ou um link, edite `src/data/projeto.js`.

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão de produção em dist/
```

## Deploy na Vercel

1. Suba este projeto para um repositório novo no GitHub.
2. Na Vercel: **Add New → Project** → importe o repositório.
3. A Vercel detecta o Vite sozinha (build `npm run build`, saída `dist`). Clique em **Deploy**.

O arquivo `vercel.json` faz todas as rotas abrirem o `index.html`, assim dá pra atualizar a página ou abrir um link direto (ex.: `/equipe`) sem erro 404.

## Uso de IA no desenvolvimento

Fluxo seguido: ideia → protótipo → código → ajustes → entrega.

### Prompts utilizados

1. _(cole aqui o primeiro prompt que você usou)_
2. _(cole os prompts de ajuste)_

### O que foi revisado/ajustado

- _(anote o que você conferiu ou mudou no código gerado)_

## Autores

- Bruno Dante Nogueira Alves — [@behsks-jpgs](https://github.com/behsks-jpgs)
- Felipe Lima Torres — [@FellT430](https://github.com/FellT430)

Orientador: Prof. Bruno Messias
