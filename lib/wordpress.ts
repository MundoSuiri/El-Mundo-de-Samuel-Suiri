const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://samuelsuiri.info/wp-json/wp/v2';

export interface Post {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface Page {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from WordPress API: ${endpoint}`, error);
    throw error;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const posts = await fetchAPI('/posts?_embed&per_page=100');
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Return empty array - Netlify will handle this gracefully
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await fetchAPI(`/posts?slug=${slug}&_embed`);
    return posts[0] || null;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const pages = await fetchAPI(`/pages?slug=${slug}`);
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPages(): Promise<Page[]> {
  try {
    const pages = await fetchAPI('/pages?per_page=100');
    return pages;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}
