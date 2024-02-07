<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: KiriminAja Flux UI for Nuxt
- Package name: @kiriminaja/flux-ui
- Description: A UI Library for Web Apps, powered by Vue & TailwindCSS based on Flux Design System by KiriminAja
-->

# KiriminAja Flux UI for Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A UI Library for Web Apps, powered by Vue & TailwindCSS based on Flux Design System by KiriminAja

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@kiriminaja/flux-ui?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ Flux UI Design System out of Box
- 🚠 Tailwind CSS Support 
- 🌲 Dark Mode Utility Support out of Box

## Quick Setup

1. Add `@kiriminaja/flux-ui` dependency to your project

```bash
# Using pnpm
pnpm add -D @kiriminaja/flux-ui

# Using yarn
yarn add --dev @kiriminaja/flux-ui

# Using npm
npm install --save-dev @kiriminaja/flux-ui
```

2. Add `@kiriminaja/flux-ui` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@kiriminaja/flux-ui'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@kiriminaja/flux-ui/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@kiriminaja/flux-ui

[npm-downloads-src]: https://img.shields.io/npm/dm/@kiriminaja/flux-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@kiriminaja/flux-ui

[license-src]: https://img.shields.io/npm/l/@kiriminaja/flux-ui.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@kiriminaja/flux-ui

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
