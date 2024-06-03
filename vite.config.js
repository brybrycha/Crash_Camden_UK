import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/student_data.csv', // Path to your CSV file
          dest: '' // Destination directory, empty means root of the build output
        },
        {
          src: 'public/export.geojson', // Path to your GeoJSON file
          dest: '' // Destination directory, empty means root of the build output
        }
      ]
    })
  ]
});
