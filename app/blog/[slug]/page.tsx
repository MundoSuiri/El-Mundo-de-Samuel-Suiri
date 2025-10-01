import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className="container">
      <a href="/blog" className="back-link">
        ← Volver al blog
      </a>

      <article>
        <h1>{post.title.rendered}</h1>
        
        <div className="post-meta">
          Publicado el {new Date(post.date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        {featuredImage && (
          <img 
            src={featuredImage} 
            alt={post.title.rendered}
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px',
              marginBottom: '2rem'
            }}
          />
        )}

        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}
