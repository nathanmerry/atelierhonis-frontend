import parse from 'html-react-parser';
import Head from "next/head";

interface SeoHeadProps {
  metaTitle: string;
  description?: string | null;
  keywords?: string | null;
  canonicalUrl?: string | null;
  robots?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  twitterCard?: string | null;
  twitterImage?: string | null;
  title?: string | null;
  metaHead?: string | null; // raw HTML, optional
}

const SeoHead: React.FC<SeoHeadProps> = ({
  metaTitle,
  description,
  keywords,
  canonicalUrl,
  robots,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard,
  twitterImage,
  metaHead,
}) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description || ogDescription || ""} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots ?? "index, follow"} />

      <link rel="icon" href="/favicon.ico" />
    
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || metaTitle} />
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      <meta property="og:image" content={ogImage || "/Images/default-home.jpg"} />
      <meta property="og:type" content="article" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={ogTitle || metaTitle} />
      {ogDescription && <meta name="twitter:description" content={ogDescription} />}
      <meta name="twitter:image" content={twitterImage || "/Images/default-home.jpg"} />

      {/* Optional raw HTML injection */}
      {metaHead && <>{parse(metaHead)}</>}
    </Head>
  );
};

export default SeoHead
