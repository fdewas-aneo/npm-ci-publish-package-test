import consola from 'consola'

consola.log(`Publishing version...`);
await $`pnpm publish --access public --tag next`;
