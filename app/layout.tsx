import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'El Mundo de Samuel Suiri',
  description: 'Portal web de Samuel Suiri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav className="nav-container">
            <div className="nav-content">
              <a href="/" className="logo">
                El Mundo de Samuel Suiri
              </a>
              <ul className="nav-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Samuel Suiri. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
