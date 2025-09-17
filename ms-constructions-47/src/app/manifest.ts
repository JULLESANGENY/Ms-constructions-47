import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MS Constructions 47',
    short_name: 'MSC47',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#E53935',
    icons: [
      { src: '/icon-192', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512', sizes: '512x512', type: 'image/png' },
    ],
  }
}