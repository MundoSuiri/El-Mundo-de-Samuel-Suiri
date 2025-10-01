import { getAllPosts } from '@/lib/wordpress';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container">
      <h1>Blog</h1>
      <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
        Todas las publicaciones
      </p>

      {posts.length === 0 ? (
        <p>No hay publicaciones disponibles en este momento.</p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => {
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
    </div>
  );
}
