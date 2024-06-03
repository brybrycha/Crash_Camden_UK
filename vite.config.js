import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/student_data.csv',
          dest: ''
        },
        {
          src: 'public/export.geojson',
          dest: ''
        }
      ]
    })
  ]
});
