import { defineConfig } from 'vite'
import Pages from "vite-plugin-pages";
import solid from 'vite-plugin-solid'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    solid(),
    Pages(),
  ]
})
