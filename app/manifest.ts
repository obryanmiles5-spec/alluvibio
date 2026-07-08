import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UK Peptides',
    short_name: 'UK Peptides',
    description: 'Buy premium research peptides online in the UK. High-purity laboratory peptides including Retatrutide, Tirzepatide, and BPC-157.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
