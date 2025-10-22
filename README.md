# ArtifactIQ

ArtifactIQ is a monorepo scaffold for an AI-assisted artifact identification platform. It ships with a minimal Next.js web demo and placeholders for the mobile app, APIs, AI assets, design system, documentation, and infrastructure.

## Repository layout

```
apps/
	mobile/expo-app        # React Native (Expo) placeholder
	web/nextjs             # Next.js 14 demo screens
backend/
	api-node               # Node API scaffold (empty)
	api-python             # FastAPI scaffold (empty)
ai/                      # Prompt and eval stubs
design/                  # Brand assets and design references
docs/                    # Product, architecture, and brand documentation
infra/                   # CI, Docker, and other infra assets
```

## Quick start

### Run the web demo
1. `cd apps/web/nextjs`
2. `npm install`
3. `npm run dev`

The demo exposes four routes (Home, Add / Identify, Collection, Item Detail) and uses static sample data.

### Populate the scaffolds
- Mobile: add your Expo project inside `apps/mobile/expo-app`.
- APIs: implement Node or Python services under `backend/api-node` or `backend/api-python`.
- AI: capture prompts, datasets, and evaluations in `ai/prompts` and `ai/evals`.
- Design: place brand assets and guidelines under `design/`.
- Docs: extend living documentation in `docs/` (see the section below).
- Infra: add CI workflows, Dockerfiles, and deployment scripts under `infra/`.

## Documentation

High level docs live in `docs/`. Start with:

- `docs/product/overview.md` for the product brief and core scenarios.
- `docs/architecture/system-overview.md` for component interactions and future tech choices.
- `docs/brand/style-guide.md` for tone, visuals, and usage rules.

## Contributing

1. Keep changes scoped to a single area when possible.
2. Update or create documentation alongside feature work.
3. Run applicable tests or linting before opening a pull request.
4. Capture noteworthy architectural or product decisions in the docs.

