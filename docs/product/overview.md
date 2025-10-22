# ArtifactIQ Product Overview

## Vision

ArtifactIQ helps museums, collectors, and field researchers document and identify cultural artifacts quickly. The platform combines guided data capture, AI-powered identification, and collection management into a single workspace.

## Target users

- Collections managers cataloging new acquisitions.
- Field archaeologists capturing details on-site with limited connectivity.
- Researchers comparing artifacts across institutions.

## Core use cases

1. Capture artifact details with photos, provenance, and condition notes.
2. Suggest likely identifications using a fine-tuned vision-language model.
3. Maintain searchable collections with export and sharing workflows.
4. Track review status and handoffs between curators and researchers.

## Success metrics

- < 5 minutes to capture a new artifact record, including images.
- 80% of identifications require only curator confirmation (not rewrite).
- Reduction in duplicate records across participating institutions.

## Roadmap snapshots

- **Near term**: Flesh out mobile data capture flows, integrate a FastAPI service for metadata storage, and surface AI suggestions in the web app.
- **Mid term**: Add role-based access control, audit trails, and batch import pipelines.
- **Long term**: Expose an API for partner institutions and deliver offline-first mobile syncing.

## Open questions

- How will artifact images be stored and versioned (cloud bucket, DAM integration)?
- What existing catalogs should seed the identification model?
- Which compliance frameworks (e.g., NAGPRA, GDPR) influence data retention policies?
