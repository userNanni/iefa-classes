# IEFA - CPAINT

[![Deploy to GitHub Pages](https://github.com/userNanni/iefa-classes/actions/workflows/deploy.yml/badge.svg)](https://github.com/userNanni/iefa-classes/actions/workflows/deploy.yml)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentação do curso CPAINT (Curso de Planejamento Avançado Integrado).


## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deploy

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Primeira Configuração

1. Faça push do código para o repositório GitHub
2. Vá em **Settings → Pages** no repositório
3. Em **Source**, selecione **GitHub Actions**
4. O workflow executará automaticamente e fará o deploy

### Deploy Automático

Após a configuração inicial, cada push na branch `main` acionará automaticamente:
- ✅ Build do projeto com Astro
- ✅ Deploy no GitHub Pages
- ✅ Site disponível em: https://usernanni.github.io/iefa-classes/

Você pode acompanhar o status dos deploys na aba **Actions** do repositório.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
