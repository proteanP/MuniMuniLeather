// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH lets a build be served from a subfolder (e.g. a preview at /muni-muni/a/).
// The live site leaves it unset and is served from the root.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
});
