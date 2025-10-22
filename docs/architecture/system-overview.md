# System Overview

## Current state

The repository is a scaffold with a functioning Next.js demo and placeholders for other layers. No shared packages or build orchestration exist yet.

## Target architecture

```text
[Mobile App (Expo)] --->
                         \
[Web App (Next.js)] ----->  [API Gateway / FastAPI or Node] ---> [PostgreSQL + Object Storage]
[Partner Integrations] -->/
                             \
                              [AI Inference (vision-language model)]
```

- **Clients**: A responsive Next.js web app and a React Native (Expo) mobile client share component patterns but ship as separate projects.
- **APIs**: A service layer exposes REST endpoints. The Python FastAPI service is the preferred home for AI-assisted workflows; Node services can support auxiliary integrations.
- **Data**: PostgreSQL stores structured metadata. Asset binaries (images, scans) live in object storage such as S3 or Azure Blob. Each record references one or more assets via signed URLs.
- **AI services**: A vision-language model handles identification suggestions. Model artifacts and evaluation notebooks live under `ai/`.
- **Infra**: Docker images encapsulate API services. CI orchestrates formatters, tests, and deployments.

## Cross-cutting concerns

- **Authentication**: Plan for OAuth-based SSO for institutions and optional magic-link access for external researchers.
- **Authorization**: Role-based access (admin, curator, contributor, viewer) enforced at the API layer; clients render capabilities accordingly.
- **Auditability**: All artifact changes produce immutable history entries with actor, timestamp, and rationale.
- **Observability**: Centralized logging and metrics (OpenTelemetry) feed dashboards and alerts.

## Next steps

1. Decide on API service ownership (Python, Node, or hybrid) and set up shared domain models.
2. Define a common schema package to reuse between clients and APIs.
3. Stand up a dev PostgreSQL instance and migration workflow.
4. Prototype the AI inference pathway (upload image, queue job, return ranked candidates).
