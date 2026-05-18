### 1. The Tech Stack Specification

- **Language:** TypeScript (Strict mode enabled)
- **Backend Framework:** NestJS (Running on the Fastify adapter for maximum throughput)
- **Database:** PostgreSQL 16
- **ORM:** Prisma (For end-to-end type safety and easy schema migrations)
- **Containerization:** Docker & Docker Compose (Multi-stage builds for optimization)
- **Validation:** `class-validator` and `class-transformer` (Standard NestJS)
- **Testing:** Jest (Unit) & Supertest (E2E)

---

### 2. The Project Outline (Directory Structure)

Domain-Driven Design (DDD) folder structure:

```text
/src
  /common               # Global utilities, guards, interceptors, filters
    /decorators
    /filters
    /guards
  /config               # Environment variables and config validation
  /prisma               # Database module and Prisma service wrapper
  /modules              # Feature modules (Domain-driven)
    /users
      dto/              # Data Transfer Objects (Validation schemas)
      entities/         # Domain models
      users.controller.ts
      users.service.ts
      users.module.ts
  main.ts               # Application entry point (Fastify setup)
  app.module.ts         # Root module
/prisma
  schema.prisma         # Database schema definition
  migrations/
Dockerfile              # Multi-stage production build
docker-compose.yml      # Local dev environment (App + Postgres)
.env.example

```

---

### 3. Docker Infrastructure

implement a **multi-stage Dockerfile** and a **docker-compose** setup.

**Key requirements to give Copilot for the `Dockerfile`:**

1. **Stage 1 (Builder):** Use `node:20-alpine`, install dependencies, generate Prisma client, and run `npm run build`.
2. **Stage 2 (Production):** Copy only the `dist` folder, `node_modules`, and the generated Prisma client. Do not run as root.
3. **Command:** `CMD ["node", "dist/main"]`

**Key requirements to give Copilot for the `docker-compose.yml`:**

1. **Services:** `api` (the NestJS app) and `db` (PostgreSQL 16).
2. **Volumes:** Map a persistent volume for Postgres data to ensure database survival between restarts.
3. **Environment:** Link the `api` service to the `db` service using the standard Prisma `DATABASE_URL` format.

---

Once Copilot generates the infrastructure, you can subsequently ask it to "Generate a Users module with CRUD operations using Prisma," and it will scaffold the entire module perfectly based on the context above.
