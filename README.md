<div align="center">

<img src="https://res.cloudinary.com/delo0gvyb/image/upload/v1759242629/refund_eituds.jpg" alt="Banner - Aplicação de Reembolso (Dashboard Financeiro)" style="width:100%; border-radius:8px;" />

# Refund v2.0

<p>
  <a href="#setup"><img alt="Static Badge" src="https://img.shields.io/badge/Setup-Docs-555?style=plastic&logo=readthedocs&logoColor=%23fff"></a>
  <a href="#tecnologias"><img alt="Static Badge" src="https://img.shields.io/badge/Stack-Tecnologias-0E1117?style=plastic&logo=stackshare&logoColor=%23fff"></a>
  <a href="#padroes"><img alt="Static Badge" src="https://img.shields.io/badge/Padr%C3%B5es-Guia-1D4ED8?style=plastic&logo=blueprint&logoColor=%23fff"></a>
  <a href="#scripts"><img alt="Static Badge" src="https://img.shields.io/badge/Scripts-%F0%9F%94%A5-059669?style=plastic&logo=gnometerminal&logoColor=%23fff"></a>
  <a href="#configuracoes"><img alt="Static Badge" src="https://img.shields.io/badge/Config-Env-7C3AED?style=plastic&logo=dotenv&logoColor=%23fff"></a>
</p>

<p>
  <img alt="Static Badge" src="https://img.shields.io/badge/React-19-087EA4?style=plastic&logo=react&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=plastic&logo=typescript&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/Vite-6-646CFF?style=plastic&logo=vite&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=plastic&logo=tailwindcss&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/React%20Router-7-CA4245?style=plastic&logo=reactrouter&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/Axios-1.12-5A29E4?style=plastic&logo=axios&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/Zod-4-3E67B1?style=plastic&logo=zotero&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/ESLint-9-4B32C3?style=plastic&logo=eslint&logoColor=%23fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/Prettier-3-1A2C34?style=plastic&logo=prettier&logoColor=%23fff">
</p>

<small>Desenvolvido por <strong>Emmanuel Oliveira</strong> • Fonte de estudo: <strong>[Rocketseat](https://www.rocketseat.com.br/)</strong></small>

</div>

---

### 📚 Menu

- **🏁 Início**: visão geral e banner
- **🧰 Setup**: instalação e execução
- **🧱 Tecnologias**: bibliotecas e ferramentas
- **🧩 Padrões**: organização e boas práticas
- **🧪 Scripts**: comandos disponíveis
- **⚙️ Configurações**: variáveis e ajustes

---

## Visão Geral

Aplicação web React para gestão de reembolsos, construída com Vite e TypeScript, estilizada com TailwindCSS e validações com Zod. Roteamento via React Router e consumo de API com Axios.

## Tecnologias e Bibliotecas

<a id="tecnologias"></a>

- **Framework**: React 19, Vite 6, TypeScript 5.7
- **Estilo**: TailwindCSS 4, `@tailwindcss/vite`, `tailwind-merge`
- **Roteamento**: React Router 7
- **HTTP**: Axios 1.12
- **Validação**: Zod 4
- **UI Loading**: `react-spinners`
- **Qualidade**: ESLint 9, Prettier 3, `prettier-plugin-tailwindcss`

## Padrões de Projeto e Organização

<a id="padroes"></a>

- **Arquitetura por domínios**: `pages/`, `components/`, `services/`, `hooks/`, `contexts/`, `utils/`, `dtos/`, `routes/`, `layout/`.
- **Tipagem explícita** em contratos e serviços; evitar `any`.
- **Estilo utilitário** com Tailwind; composição com `clsx` e `tailwind-merge` para evitar conflitos de classes.
- **Validação na borda** usando Zod em formulários e serviços.
- **Separação de camadas**: `services` para chamadas HTTP (Axios), `dtos` para esquemas e tipos, `pages` para telas, `components` para UI reutilizável.
- **Qualidade**: ESLint + Prettier integrados ao projeto.

## Setup

<a id="setup"></a>

Pré-requisitos: Node 18+ (ou Bun), PNPM/NPM.

```bash
# instalar dependências
pnpm i   # ou npm i / bun install

# executar em desenvolvimento
pnpm dev # ou npm run dev / bun run dev

# build de produção
pnpm build

# pré-visualização do build
pnpm preview
```

## Scripts

<a id="scripts"></a>

- `dev`: inicia o Vite com HMR
- `build`: compila TypeScript e gera build de produção
- `lint`: executa ESLint
- `preview`: serve o build localmente

## Configurações

<a id="configuracoes"></a>

- **Vite**: `vite.config.ts` com plugins `@vitejs/plugin-react` e `@tailwindcss/vite`.
- **TailwindCSS**: v4 com utilitários; estilos em `src/index.css`.
- **Variáveis de ambiente**: utilize `.env`/`.env.local` com prefixo `VITE_` para acesso no cliente (ex.: `VITE_API_URL`).
- **Assets públicos**: coloque arquivos em `public/` (ex.: `icon.svg`).

---

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>
<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/in/oliveira-emmanuel/)<br>
&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>

Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
Explore o código do projeto para entender sua estrutura e funcionamento.
<br>

<strong>Faça um Fork</strong>

Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

<strong>Clone o Repositório</strong>

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

<strong>Crie uma Nova Branch:</strong>

Crie uma nova branch para isolar suas alterações.<br>
Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

<strong>Faça as Alterações:</strong>

Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

<strong>Crie um Pull Request:</strong>

Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
<br>

<strong>Revise e Responda a Feedback:</strong>

Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/oliveira-emmanuel/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:oliveira.frontend@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2025 This project is under the **MIT license**<br>
<br>

<div align="center">
**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

</div>
