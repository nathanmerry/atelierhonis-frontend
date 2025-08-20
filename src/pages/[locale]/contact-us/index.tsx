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

const ContactUsBanner = dynamic(() => import("@/components/Pages/ContactUs/Banner"), {
  ssr: false,
});

interface ContactUsPageProps {
  pageData: {
    id: number;
    slug: string;
    language: string;
    h1: string;
    meta_title: string;
    meta_description: string;
    canonical_url: string;
    robots_directives: string;
    keywords: string;
    og_title: string;
    og_description: string;
    og_image: string;
    twitter_card: string;
    twitter_image: string | null;
    created_at: string;
    updated_at: string;
  };
  locale: string;
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({ pageData, locale }) => {
  return (
    <DefaultLayout>
      <SeoHead
        metaTitle={pageData.meta_title}
        description={pageData.meta_description}
        ogTitle={pageData.og_title}
        ogDescription={pageData.og_description}
        ogImage={pageData.og_image}
        twitterCard={pageData.twitter_card}
        keywords={pageData.keywords}
        twitterImage={pageData.twitter_image}
        robots="index, follow"
      />
     <ContactUsBanner/>
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
    const pageData = await fetchSinglePageBySlug(`/${locale}/contact-us`);

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

export default ContactUsPage;
