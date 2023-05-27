import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png'],
      manifest: {
        name: 'Welcome',
        short_name: 'Welcome',
        description: 'Welcome',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any muskable'
          }
        ]
      }
    })
  ],
  build: {
    outDir: './build'
  }
})
