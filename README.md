# Meysson Engineering — Plateforme Digitale

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![i18n](https://img.shields.io/badge/i18n-next--intl-FF69B4?style=for-the-badge)

## 📌 Présentation

Ce dépôt contient le code source du site vitrine de **Meysson Engineering**, partenaire stratégique en ingénierie industrielle, maintenance, énergie et télécoms en Côte d'Ivoire. La plateforme est conçue pour présenter l'expertise de l'entreprise, ses services techniques et ses références projets à travers une expérience utilisateur fluide et multilingue.

## 🚀 Technologies utilisées

- **Framework** : [Next.js 15+](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalisation** : [next-intl](https://next-intl-docs.vercel.app/) (FR / EN)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Qualité de code** : ESLint

## ⚡ Philosophie de Performance

> **La performance est une priorité absolue sur ce projet.**

Ce site est un vitrine professionnelle : chaque milliseconde compte pour l'expérience utilisateur et le référencement (Core Web Vitals).

### Règles à respecter

- **Zéro dépendance inutile** : avant d'installer un nouveau package, demandez-vous si la fonctionnalité peut être réalisée nativement
- **Pas de librairies d'animation tierces** : les transitions sont gérées par CSS `transition` / `@keyframes`.
- **Pas de librairie de formulaire lourde** : sauf besoin démontré et validé.
- **Pas de gestionnaire d'état global** : un `useState` / `useContext` local suffit pour l'instant.
- **Images et vidéos optimisées** : utiliser `next/image` pour toutes les images ; limiter les sources vidéo au format MP4 720p.
- **Server Components par défaut** : n'ajouter `"use client"` que lorsque l'interactivité est strictement nécessaire.
- Chaque ajout de dépendance doit être **justifié et validé** par l'équipe avant merge.

### Objectifs Lighthouse (production)

| Métrique | Cible |
|---|---|
| Performance | ≥ 90 |
| Accessibilité | ≥ 90 |
| Bonnes pratiques | ≥ 95 |
| SEO | ≥ 95 |

---

## 📁 Structure du projet

```text
├── app/[locale]        # Routes de l'application (Internationalisées)
├── components/         # Composants React réutilisables (Header, Footer, Cards...)
├── i18n/               # Configuration de l'internationalisation
├── messages/           # Fichiers de traduction JSON (fr.json, en.json)
├── public/             # Assets statiques (images, svgs, logos)
├── next.config.ts      # Configuration Next.js
└── tailwind.config.mjs # Configuration Tailwind CSS
```

## 🛠️ Installation et Démarrage

### Prérequis

- Node.js 20.x ou supérieur
- npm ou yarn

### Installation

1. Clonez le dépôt :
   ```bash
   git clone <url-du-depot>
   cd meysson
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

Le site sera accessible sur `http://localhost:3000`.

## 🌍 Internationalisation (i18n)

Le projet supporte nativement le Français et l'Anglais.
- Les traductions se trouvent dans le dossier `/messages`.
- Le routage est géré par `next-intl` via le segment dynamique `[locale]`.

## 📜 Scripts disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement avec rechargement à chaud. |
| `npm run build` | Compile l'application pour la production. |
| `npm run start` | Lance l'application compilée en mode production. |
| `npm run lint` | Analyse le code pour détecter les erreurs de style ou potentielles. |

## 🏗️ Déploiement

Le projet est optimisé pour un déploiement sur **Vercel**. Pour déployer :
1. Connectez votre dépôt GitHub à Vercel.
2. Vercel détectera automatiquement les paramètres Next.js.
3. Cliquez sur "Deploy".

---

Projet développé avec passion pour **Meysson Engineering**.
