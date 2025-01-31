# .cursorrules

## Project Overview

*   **Type:** [Derived from `projectType`: cursorrules_file]
*   **Description:** [From `description`: Building a web-based platform, EmoConnect, aiming to promote cultural exchange through emotional expressions shared across diverse cultures, targeting global users like travelers, language learners, and educators.]
*   **Primary Goal:** [Extract from `prd`: Foster cross-cultural understanding by encouraging users to explore and share emotional expressions and experiences through interactive storytelling and community-building features.]

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   `Next.js 14`: `app/[route]/page.tsx` conventions to encourage the exploration of emotions with stacked routing capabilities.
    *   Example 1: "Next.js 14 (App Router)" → Structured within `app/` directory utilizing page nesting for sections like `auth` and `stories`.

### Core Directories

*   **Versioned Structure:**

    *   `app/api`: Follows Next.js 14 API routes structure with Route Handlers for integrating third-party APIs like Google Maps and language services.
    *   `src/views`: Structured for user interface components, leveraging Tailwind CSS, Radix UI to create a cohesive, culturally inspired UI.

### Key Files

*   **Stack-Versioned Patterns:**

    *   `app/dashboard/layout.tsx`: Defines layout components, ensuring consistency in user navigation across EmoConnect's cultural exploration features.
    *   `app/auth/login/page.tsx`: Configures user authentication flows using Next.js 14's capabilities for secure and versatile user interactions.

## Tech Stack Rules

*   **Version Enforcement:**

    *   `next@14`: Enforces the use of the App Router to maintain a unified routing framework across the project, preventing the use of older `pages` directory paradigms.

## PRD Compliance

*   **Non-Negotiable:**

    *   "Interactive Storytelling with Clickable Maps and Multimedia" from `prd`: [Enforced use of Next.js 14 layouts and API routes for seamless integration and scalability in content delivery.]

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: "Next.js 14 Auth Flow → `app/auth/login/page.tsx` uses server actions and secure handling via Supabase authentication middleware."

### Input Context (Priority Order):

1.  `techStackDoc` (exact versions + routing patterns)
2.  `prd` (version-dependent requirements)
3.  `appFlow` (route-to-component mapping)
4.  `answers` (e.g., "We chose App Router for RSCs")

### Rules:

*   Derive folder/file patterns **directly** from `techStackDoc` versions.
*   If Next.js 14 App Router: Enforce `app/` directory with nested route folders.
*   If Pages Router: Use `pages/*.tsx` flat structure.
*   Mirror this logic for React Router, SvelteKit, etc.
*   Never mix version patterns (e.g., no `pages/` in App Router projects).
