import {join} from 'pathe'
import {addTemplate, installModule, useNuxt} from "@nuxt/kit";
import type {ModuleOptions} from './module';
import {upperFirst} from "scule";

export default async function installTailwind(moduleOptions: ModuleOptions, nuxt = useNuxt(), {resolve, runtimeDir}) {
    // @ts-ignore
    nuxt.hook("tailwindcss:config", (tailwindConfig: any) => {
        tailwindConfig.theme = tailwindConfig.theme || {}
        tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
        tailwindConfig.theme.colors = tailwindConfig.theme.colors || {}

        tailwindConfig.theme.colors.flux = {
            transparent: 'transparent',
        }

        const colorVariants: string[] = [
            'primary',
            'secondary',
            'tertiary',
            'error',
            'info',
            'success',
            'warning'
        ]

        const codexColors: string[] = [
            "background",
            "onBackground",
            "outline",
            "outlineVariant",
            "surface",
            "onSurface",
            "surfaceVariant",
            "onSurfaceVariant",
            "inverseSurface",
            "onInverseSurface",
            "surfaceBright",
            "surfaceDim",
            "surfaceContainerLowest",
            "surfaceContainerLow",
            "surfaceContainer",
            "surfaceContainerHigh",
            "surfaceContainerHighest",
        ]

        colorVariants.forEach(v => {
            tailwindConfig.theme.colors.flux[`${v}`] = `var(--flux-${v})`
            tailwindConfig.theme.colors.flux[`on${upperFirst(v)}`] = `var(--flux-on${upperFirst(v)})`
            tailwindConfig.theme.colors.flux[`${v}Container`] = `var(--flux-${v}Container)`
            tailwindConfig.theme.colors.flux[`on${upperFirst(v)}Container`] = `var(--flux-on${upperFirst(v)}Container)`
        })

        codexColors.forEach(v => {
            tailwindConfig.theme.colors.flux[`${v}`] = `var(--flux-${v})`
        })
    })

    const configTemplate = addTemplate({
        filename: 'flux-wind.config.cjs',
        write: true,
        getContents: () => `
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        darkMode: 'class',
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
        ],
        content: {
          files: [
            ${JSON.stringify(resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'))},
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\\r\\n|\\r|\\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
              ]
            }
          }
        }
      }
    `
    })

    await installModule('@nuxtjs/tailwindcss', {
        exposeConfig: true,
        configPath: [
            configTemplate.dst,
            join(nuxt.options.rootDir, 'tailwind.config')
        ]
    })
}
