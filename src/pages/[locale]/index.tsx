import SeoHead from "@/components/Layouts/SeoHead";
import { ContainerMain } from "../../../public/Styles/Layout/styles";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchSinglePageBySlug } from "@/lib/api";
import { i18nConfig } from "../../../i18n";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);
const HeroSection = dynamic(
  () => import("@/components/Pages/Home/HeroSection"),
  { ssr: false }
);
const BestSolutions = dynamic(
  () => import("@/components/Pages/Home/BestSolutions"),
  { ssr: false }
);
const FurnitureTimeline = dynamic(
  () => import("@/components/Pages/Home/FurnitureTimeline"),
  { ssr: false }
);
const FurnitureGallery = dynamic(
  () => import("@/components/Pages/Home/FurnitureGallery"),
  { ssr: false }
);

interface HomeProps {
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
    og_image: string;
    twitter_card: string;
    twitter_image: string | null;
    created_at: string;
    keywords: string;
    updated_at: string;
  };
  locale: string;
}

const Home: React.FC<HomeProps> = ({ pageData, locale }) => {
  return (
    <DefaultLayout>
      <SeoHead
        metaTitle={pageData.meta_title}
        description={pageData.meta_description}
        ogTitle={pageData.og_title}
        ogDescription={pageData.og_description}
        keywords={pageData.keywords}
        ogImage={pageData.og_image}
        twitterCard={pageData.twitter_card}
        twitterImage={pageData.twitter_image}
        robots="index, follow"
      />

      <HeroSection />
      <ContainerMain>
        <BestSolutions />
        <FurnitureTimeline />
        <FurnitureGallery />
      </ContainerMain>
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
    // For home page, we might use a different slug or just the locale
    const pageData = await fetchSinglePageBySlug(`/${locale}/home`);

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

export default Home;
