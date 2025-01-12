import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  favicon?: string;
  ogImage?: string;
  twitterImage?: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords = "",
  favicon = "/favicon.ico", 
  ogImage = "/Images/default-home.jpg", 
  twitterImage = "/Images/default-home.jpg", 
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content="https://yourwebsite.com" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />

      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default SeoHead;
