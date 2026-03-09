import consola from 'consola'

consola.log(`Publishing version...`);
await $`pnpm publish --access public --no-git-checks --tag next`;
