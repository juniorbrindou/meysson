# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes utiles

```bash
npm run dev      # Serveur de développement (http://localhost:3000)
npm run build    # Build de production (SSG — génère les pages statiques)
npm run start    # Serveur de production (après build)
npm run lint     # ESLint
```

Il n'y a pas de tests configurés dans ce projet.

## Architecture

### Internationalisation (next-intl)

Toutes les pages sont imbriquées sous `app/[locale]/`. Les locales supportées sont `fr` (défaut) et `en`, définies dans `i18n/routing.ts`.

- **Messages** : `messages/fr.json` et `messages/en.json` — toutes les chaînes UI y sont centralisées par namespace (`nav`, `common`, `home`, `about`, `expertises`, etc.)
- **Navigation i18n** : importer `Link`, `usePathname`, `useRouter` depuis `@/i18n/navigation` (et non depuis `next/navigation`) pour que les liens préservent le locale courant
- **Côté serveur** : utiliser `getTranslations()` de `next-intl/server` ; côté client : `useTranslations()` de `next-intl`
- Aucun `middleware.ts` n'est présent : la détection de locale repose sur le segment `[locale]` dans l'URL

### Styling (Tailwind CSS v4)

Pas de `tailwind.config.js`. La configuration est entièrement dans `app/globals.css` via le bloc `@theme {}`.

Les couleurs custom à utiliser :
- `bg-primary` / `text-primary` → `#2e6c0c` (vert industriel principal)
- `bg-primary-dark` / `bg-primary-light` → variantes foncée/claire
- `text-accent` / `bg-accent` → `#5abf20` (vert CTA)
- `text-gray-text` → `#353535`

### Composants réutilisables

| Composant | Usage |
|-----------|-------|
| `PageHero` | Hero plein-largeur avec fond `primary`, titre, sous-titre et breadcrumbs |
| `SectionTitle` | Titre de section avec label coloré, titre principal et sous-titre |
| `ServiceCard` | Carte avec icône Lucide, titre, description, bénéfice |
| `DomainCard` | Carte domaine avec icône, tags et lien |
| `SectionExplorer` | Sections alternées image/texte avec scroll-reveal (IntersectionObserver) |
| `HeroVideoSlider` | Slider vidéo pour la homepage |
| `LanguageSwitcher` | Bascule fr/en, utilise `useRouter` de `@/i18n/navigation` |

### Animations scroll-reveal

Les classes CSS `expertise-row`, `expertise-panel-image` et `expertise-slide-item` (définies dans `globals.css`) pilotent les animations de `SectionExplorer` via l'attribut `data-visible="true"` positionné par un `IntersectionObserver`.

### Alias de chemin

`@/` est l'alias racine du projet (configuré dans `tsconfig.json`).
