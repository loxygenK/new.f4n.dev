import { defineConfig } from 'vite'
import Pages from "vite-plugin-pages";
import solid from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solid(),
    Pages(),
  ]
})
