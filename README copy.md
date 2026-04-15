project-root/
│
├─ apps/
│  ├─ web/                     # Frontend (Next.js)
│  ├─ admin/                   # Admin Dashboard (Next.js)
│  ├─ gateway/                 # API Gateway (NestJS)
│  ├─ auth-service/            # Service xác thực (NestJS)
│  ├─ user-service/            # Service người dùng
│  ├─ product-service/         # Service sản phẩm
│  ├─ order-service/           # Service đơn hàng
│  └─ notification-service/    # Service thông báo (email/SMS/push)
│
├─ packages/
│  ├─ core/                    # Domain logic chia sẻ
│  ├─ contracts/               # DTOs, interface, schemas
│  ├─ config/                  # Config dùng chung
│  ├─ utils/                   # Hàm tiện ích chung
│  ├─ ui/                      # Component UI chung
│  └─ sdk/                     # FE SDK (OpenAPI/tRPC auto-gen)
│
├─ infra/
│  ├─ prisma/                  # Schema, migration, seed
│  ├─ docker/                  # Dockerfile, compose dev/prod
│  ├─ nginx/                   # Reverse proxy
│  ├─ k8s/                     # Kubernetes manifests
│  ├─ terraform/               # IaC cho cloud
│  ├─ ci-cd/                   # Pipeline CI/CD
│  ├─ monitoring/              # Prometheus, Grafana, Loki, Jaeger
│  └─ scripts/                 # Build/deploy/test automation
│
├─ docs/
│  ├─ API_SPEC.md
│  ├─ SYSTEM_DESIGN.md
│  ├─ CONTRIBUTING.md
│  └─ ADR/
│
├─ .github/
│  ├─ workflows/
│  │  ├─ ci.yml
│  │  └─ deploy.yml
│  └─ ISSUE_TEMPLATE.md
│
├─ .env.example
├─ pnpm-workspace.yaml
├─ turbo.json
├─ tsconfig.base.json
└─ package.json
