import {defineNuxtModule, createResolver, addComponentsDir} from '@nuxt/kit'
import combineTailwind from "~/src/tailwind";

// Module options TypeScript interface definition
export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@kiriminaja/flux',
    configKey: 'fluxUI'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options: ModuleOptions, nuxt) {
    const {resolve} = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    nuxt.options.css.push(resolve('runtime/css/app.css'))

    await combineTailwind(options, nuxt, {resolve, runtimeDir})

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    await addComponentsDir({
      prefix: 'Flux',
      path: resolve('./runtime/components')
    })
  }
})
