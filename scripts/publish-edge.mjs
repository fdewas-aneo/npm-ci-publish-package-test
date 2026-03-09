import consola from 'consola'

consola.log(`Publishing version...`);
await $`pnpm publish --tag next`;
