export interface Blog {
  id: number;
  title: string;
  description: string | null;
  content: string;
  lang: string;
  is_featured: number;
  category: string;
  tags: string | null;
  thumbnail: string;
  created_at: string;
  updated_at: string;

  // SEO fields
  meta_head: string | null;
  meta_title: string | null;
  canonical_url: string | null;
  robots_directives: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  twitter_card: string | null;
  twitter_image: string | null;
  published_date: string;
}
