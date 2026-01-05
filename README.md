# IEFA - CPAINT

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Deployed on Vercel](https://vercel.com/button)](https://cpaint.iefa.com.br)

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

Este projeto é deployado automaticamente via **Vercel** sempre que há push na branch `main`.

### Como funciona

- ✅ **Deploy automático**: Push no `main` → Build → Deploy
- ✅ **Preview deployments**: Cada PR gera uma URL de preview
- ✅ **Domínio customizado**: https://cpaint.iefa.com.br
- ✅ **SSL automático**: HTTPS configurado automaticamente
- ✅ **Edge Network global**: CDN em 100+ localizações

### Configuração de Domínio Customizado

1. No painel da Vercel, vá em **Settings → Domains**
2. Adicione: `cpaint.iefa.com.br`
3. Configure DNS:
   - Tipo: `CNAME`
   - Nome: `cpaint`
   - Valor: `cname.vercel-dns.com`
4. Aguarde propagação DNS (~10min)

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
