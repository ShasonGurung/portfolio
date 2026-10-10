---
title: BestBETs for Vets
area: Veterinary evidence
period: 2026–present
summary: Rebuilding a veterinary evidence platform with modern search, identity and collaborative editing tools.
role: Software Engineer · full-stack contributor
technologies: [ASP.NET Core, Next.js, PostgreSQL, EF Core, Keycloak, SignalR]
order: 1
links:
  - label: Existing website
    url: https://www.bestbetsforvets.org/
---

## The project

BestBETs for Vets helps veterinary professionals find and create structured summaries of research evidence. The current work is a team rewrite of an existing PHP application in ASP.NET Core and Next.js.

## My contribution

- Implemented PostgreSQL full-text search as the replacement for the previous Apache Solr search system.
- Integrated Keycloak-backed account and permission flows as the team moves from LDAP-based identity management.
- Worked across evidence editing and review features, including SignalR indicators that show when others are editing a field.
- Added API and database-backed tests for complex application behaviour.

The rewrite is ongoing. These examples describe my engineering contribution within a wider team effort.
