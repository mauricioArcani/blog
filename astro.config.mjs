import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://marcos-arcani-blo.netlify.app",
  integrations: [preact()]
});