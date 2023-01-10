import { build, emptyDir } from '../deps.ts'

await emptyDir('./npm')
await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    deno: true,
  },
  package: {
    name: '@drx/fx',
    version: Deno.args[0],
    description: '',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'https://github.com/DRX-R-D/DRX-Open-Source/tree/master/fx',
    },
  },
})

Deno.copyFileSync('LICENSE', 'npm/LICENSE')
Deno.copyFileSync('README.md', 'npm/README.md')
