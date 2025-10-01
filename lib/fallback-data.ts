// Fallback data in case WordPress API is unavailable
// This ensures the site can still build and display something

import { Post, Page } from './wordpress';

export const fallbackPosts: Post[] = [
  {
    id: 1,
    date: new Date().toISOString(),
    modified: new Date().toISOString(),
    slug: 'bienvenida',
    status: 'publish',
    link: '/blog/bienvenida',
    title: {
      rendered: 'Bienvenida a El Mundo de Samuel Suiri'
    },
    content: {
      rendered: '<p>Este es un sitio web construido con tecnología Headless WordPress y Next.js, desplegado en Netlify.</p><p>El contenido se carga dinámicamente desde WordPress.</p>'
    },
    excerpt: {
      rendered: '<p>Bienvenida al portal web de Samuel Suiri</p>'
    },
    author: 1,
    featured_media: 0
  }
];

export const fallbackPages: Page[] = [
  {
    id: 1,
    date: new Date().toISOString(),
    slug: 'inicio',
    status: 'publish',
    link: '/',
    title: {
      rendered: 'Inicio'
    },
    content: {
      rendered: '<p>Página de inicio</p>'
    }
  }
];
