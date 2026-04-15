# Template Monorepo

This README describes the structure and basic usage of this monorepo repository (Next.js frontend, NestJS/Express backend, shared packages, and pnpm/Turborepo).

## Overview

This project is a monorepo containing multiple apps and packages for full-stack development:

- Main web application: `apps/web`
- Admin dashboard: `apps/admin`
- Gateway/API service: `apps/services/gateway`
- Shared packages: `packages/` (config, UI, utils, core, etc.)
- Infrastructure and DevOps configuration: `infra/` (Docker, Kubernetes, Prisma, Terraform, etc.)

Goal: provide a ready-to-use template for fast development with TypeScript, Turborepo, and pnpm.

## Key Features

- Monorepo architecture powered by Turborepo
- Frontend: Next.js (React + TypeScript)
- Backend: NestJS / Express (TypeScript)
- Shared code across apps through packages in `packages/`
- Dockerfiles and configuration for containerized deployment
- Linting/formatting setup (ESLint, Prettier) and pre-commit hooks

## System Requirements

- Node.js >= 18 (recommended)
- pnpm (pnpm workspace is used)
- Docker (if you want to run containers)

## Quickstart

1. Install pnpm if you do not have it yet:

```bash
npm install -g pnpm
```

2. Install dependencies for the entire workspace:

```bash
pnpm install
```

3. Run an app in the workspace (for example, `web` or `admin`):

```bash
pnpm --filter ./apps/web dev
# or
pnpm --filter ./apps/admin dev
```

Note: depending on the repository setup, the package name in each app's `package.json` may differ. You can also change into the app directory and run `pnpm dev` directly.

4. Run the gateway service (server):

```bash
pnpm --filter ./apps/services/gateway dev
```

5. Run tasks configured in the Turborepo pipeline (for example, build all):

```bash
pnpm -w run build
```

## Directory Structure (Summary)

- `apps/` - applications (web, admin, services)
- `packages/` - shared libraries used across apps (UI, utils, core, etc.)
- `infra/` - infrastructure configuration (Docker, Kubernetes, Prisma schema)
- `docs/` - documentation, ADRs, design system

Each app usually contains `package.json`, `tsconfig.json`, and a `src/` or `app/` folder (Next.js 13+ App Router).

## Lint, Format, and Test

- Lint: `pnpm -w run lint` (or run `pnpm lint` inside each package/app)
- Format: `pnpm -w run format` (uses Prettier)
- Test: `pnpm -w run test` or run tests per workspace individually

## Docker / Docker Compose

Some folders include a `Dockerfile` (for example, `apps/web`, `apps/services/gateway`). To build images or run Docker Compose, refer to `infra/docker/docker-compose.yml` or `compose.yml` in the root (if available).

Example: build an image for `web`:

```bash
# from root or the corresponding folder (depending on Dockerfile setup)
docker build -t my-web:local -f apps/web/Dockerfile .
```

## Notes on Turborepo and pnpm

- This repository uses Turborepo to optimize pipelines (caching, parallel tasks). If you do not want to use Turborepo, you can remove `turbo.json` and related dependencies.
- Workspace commands use `pnpm` with the `--filter` flag to run commands for a specific package/app only.

## Contributing

- Please read `docs/CONTRIBUTING.md` for contribution guidelines.
- Before opening a PR, make sure your code passes lint checks and basic tests.

## Resources and License

- Add license information if needed (in the `LICENSE` file), or contact the maintainer for details.

## Quick Troubleshooting

- If you have dependency issues: delete `node_modules` and the lockfile, then run `pnpm install` again.
- If you have TypeScript errors across packages: check `paths` and each package's `tsconfig`.
