import {defineNuxtModule, addPlugin, createResolver, addComponent} from '@nuxt/kit'
import {type Link} from "@unhead/vue";
import installTailwind from "./tailwind";

// Module options TypeScript interface definition
export interface ModuleOptions {
    safelistColors?: string[]
}

const googleFont = [
    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    } as Link,
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
    } as unknown as Link,
    {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600;1,700;1,800&Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap',
        rel: 'stylesheet'
    } as Link,
]

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'flux-ui-module',
        configKey: 'myModule'
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    async setup(options, nuxt) {
        const {resolve} = createResolver(import.meta.url)
        const runtimeDir = resolve('./runtime')
        nuxt.options.css.push(resolve('runtime/css/app.css'))

        if (nuxt.options.app.head.link) {
            googleFont.forEach((value, key) => {
                // @ts-ignore
                nuxt.options.app.head.link?.push(value as Link<{ MaybeComputedRefEntries }>)
            })
        } else {
            nuxt.options.app.head.link = googleFont as []
        }

        await installTailwind(options, nuxt, {resolve, runtimeDir})

        await addComponent({
            name: 'FluxButton',
            filePath: resolve('runtime/components/Button.vue')
        })
    }
})
