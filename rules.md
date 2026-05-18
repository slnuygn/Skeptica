> I am building a new backend service. The tech stack is TypeScript, NestJS (using the Fastify adapter), Prisma ORM, and PostgreSQL. The application will be containerized using Docker.
> Please adhere to the following rules for all code generation:
>
> 1. Use Domain-Driven Design. Place all feature code inside `src/modules/<feature-name>`.
> 2. Always use DTOs with `class-validator` for input validation.
> 3. Inject the PrismaService into feature services for database operations; do not use raw SQL unless explicitly requested.
> 4. Keep Controllers thin (only routing and HTTP status codes) and put all business logic in Services.
> 5. Ensure all TypeScript code uses strict typing; avoid `any`.
>
> To begin, please generate the `docker-compose.yml` file to spin up a PostgreSQL database and a generic Node/NestJS API service.
