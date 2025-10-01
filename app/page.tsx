import { getAllPosts } from '@/lib/wordpress';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 6); // Show only the latest 6 posts

  return (
    <div className="container">
      <h1>Bienvenido a El Mundo de Samuel Suiri</h1>
      <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
        Portal web personal - Versión Headless WordPress + Netlify
      </p>

      <section>
        <h2>Últimas Publicaciones</h2>
        {latestPosts.length === 0 ? (
          <p>No hay publicaciones disponibles en este momento.</p>
        ) : (
          <div className="post-grid">
            {latestPosts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              
              return (
                <article key={post.id} className="post-card">
                  {featuredImage && (
                    <img 
                      src={featuredImage} 
                      alt={post.title.rendered}
                      className="post-card-image"
                    />
                  )}
                  <div className="post-card-content">
                    <h3 className="post-card-title">
                      <a href={`/blog/${post.slug}`}>{post.title.rendered}</a>
                    </h3>
                    <div 
                      className="post-card-excerpt"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <time className="post-card-date">
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </article>
              );
            })}
          </div>
        )}
        {latestPosts.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/blog" style={{ 
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3498db',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}>
              Ver todas las publicaciones
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
