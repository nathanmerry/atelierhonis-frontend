// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchSinglePageBySlug } from "@/lib/api";
import { i18nConfig } from "../../../../i18n";
import SeoHead from "@/components/Layouts/SeoHead";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);

const BlogsBanner = dynamic(
  () => import("@/components/Pages/Blogs/BlogsBanner"),
  { ssr: false }
);

const TipsBanner = dynamic(
  () => import("@/components/Pages/Blogs/TipsBanner"),
  { ssr: false }
);

const BlogsMain = dynamic(() => import("@/components/Pages/Blogs/BlogsMain"), {
  ssr: false,
});

interface BlogsPageProps {
  pageData: {
    id: number;
    slug: string;
    language: string;
    h1: string;
    meta_title: string;
    meta_description: string;
    canonical_url: string;
    robots_directives: string;
    og_title: string;
    og_description: string;
    keywords: string;
    og_image: string;
    twitter_card: string;
    twitter_image: string | null;
    created_at: string;
    updated_at: string;
  };
  locale: string;
}

const BlogsPage: React.FC<BlogsPageProps> = ({ pageData, locale }) => {
  return (
    <DefaultLayout>
      <SeoHead
        metaTitle={pageData.meta_title}
        description={pageData.meta_description}
        ogTitle={pageData.og_title}
        ogDescription={pageData.og_description}
        ogImage={pageData.og_image}
        keywords={pageData.keywords}
        twitterCard={pageData.twitter_card}
        twitterImage={pageData.twitter_image}
        robots="index, follow"
      />
      <BlogsBanner />
      <TipsBanner />
      <BlogsMain />
    </DefaultLayout>
  );
};
// Generate static paths for all supported locales
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = i18nConfig.locales.map((locale) => ({
    params: { locale },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Generate static props for each locale
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;

  try {
    const pageData = await fetchSinglePageBySlug(`/${locale}/blogs`);

    return {
      props: {
        pageData,
        locale,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(`Error fetching data for locale ${locale}:`, error);

    return {
      props: {
        pageData: null,
        locale,
      },
      revalidate: 3600,
    };
  }
};

export default BlogsPage;
