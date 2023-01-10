import { build, emptyDir } from '../deps.ts'

await emptyDir('./npm')
await build({
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims: {
    deno: true,
  },
  package: {
    name: '@bnpgg/fx',
    version: Deno.args[0],
    description: '',
    author: 'freevuehub',
    private: false,
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/DRX-R-D/DRX-Open-Source.git',
    },
  },
})

Deno.copyFileSync('LICENSE', 'npm/LICENSE')
Deno.copyFileSync('README.md', 'npm/README.md')
