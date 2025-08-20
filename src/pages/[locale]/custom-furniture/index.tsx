// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FurnitureToOrderDetailItemsType } from "@/components/Pages/About/FurnitureToOrderDetail";
import dynamic from "next/dynamic";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import SeoHead from "@/components/Layouts/SeoHead";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchSinglePageBySlug } from "@/lib/api";
import { i18nConfig } from "../../../../i18n";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);

const CustomFurnitureBanner = dynamic(
  () => import("@/components/Pages/CustomFurniture/CustomFurnitureBanner"),
  { ssr: false }
);
const CustomFurnitureTipsBanner = dynamic(
  () => import("@/components/Pages/CustomFurniture/CustomFurnitureTipsBanner"),
  { ssr: false }
);

const FurnitureToOrderDetail = dynamic(
  () => import("@/components/Pages/About/FurnitureToOrderDetail"),
  { ssr: false }
);

const CustomFurnitureItems: FurnitureToOrderDetailItemsType[] = [
  {
    sectionId: "mobila-bucatarie",
    image: "/Images/CustomFurniture/Furniture1.png",
    heading: "CustomFurnitureItems.heading1",
    listitems: [
      "CustomFurnitureItems.listItem1",
      "CustomFurnitureItems.listItem2",
      "CustomFurnitureItems.listItem3",
      "CustomFurnitureItems.listItem4",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
  {
    sectionId: "mobila-living",
    image: "/Images/CustomFurniture/Furniture2.png",
    heading: "CustomFurnitureItems.heading2",
    listitems: [
      "CustomFurnitureItems.listItem5",
      "CustomFurnitureItems.listItem6",
      "CustomFurnitureItems.listItem7",
      "CustomFurnitureItems.listItem8",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
  {
    sectionId: "mobilier-hol",
    image: "/Images/CustomFurniture/Furniture3.png",
    heading: "CustomFurnitureItems.heading3",
    listitems: [
      "CustomFurnitureItems.listItem9",
      "CustomFurnitureItems.listItem10",
      "CustomFurnitureItems.listItem11",
      "CustomFurnitureItems.listItem12",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
  {
    sectionId: "mobila-dormitor",
    image: "/Images/CustomFurniture/Furniture4.png",
    heading: "CustomFurnitureItems.heading4",
    listitems: [
      "CustomFurnitureItems.listItem13",
      "CustomFurnitureItems.listItem14",
      "CustomFurnitureItems.listItem15",
      "CustomFurnitureItems.listItem16",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
  {
    sectionId: "mobilier-baie",
    image: "/Images/CustomFurniture/Furniture5.png",
    heading: "CustomFurnitureItems.heading5",
    listitems: [
      "CustomFurnitureItems.listItem17",
      "CustomFurnitureItems.listItem18",
      "CustomFurnitureItems.listItem19",
      "CustomFurnitureItems.listItem20",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
  {
    sectionId: "mobilier-pentru-camera-copiilor",
    image: "/Images/CustomFurniture/Furniture6.png",
    heading: "CustomFurnitureItems.heading6",
    listitems: [
      "CustomFurnitureItems.listItem21",
      "CustomFurnitureItems.listItem22",
      "CustomFurnitureItems.listItem23",
      "CustomFurnitureItems.listItem24",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
  {
    sectionId: "mobilier-comercial",
    image: "/Images/CustomFurniture/Furniture7.png",
    heading: "CustomFurnitureItems.heading7",
    listitems: [
      "CustomFurnitureItems.listItem25",
      "CustomFurnitureItems.listItem26",
      "CustomFurnitureItems.listItem27",
      "CustomFurnitureItems.listItem28",
    ],
    link: { label: "CustomFurnitureItems.loadMore", href: "#" },
  },
];

interface CustomFurniturePageProps {
  pageData: {
    id: number;
    slug: string;
    language: string;
    h1: string;
    meta_title: string;
    meta_description: string;
    keywords: string;
    canonical_url: string;
    robots_directives: string;
    og_title: string;
    og_description: string;
    og_image: string;
    twitter_card: string;
    twitter_image: null;
    created_at: string;
    updated_at: string;
  };
  locale: string;
}

const CustomFurniturePage: React.FC<CustomFurniturePageProps> = ({
  pageData,
  locale,
}: CustomFurniturePageProps) => {
  return (
    <DefaultLayout>
      <SeoHead
        metaTitle={pageData.meta_title}
        description={pageData.meta_description}
        keywords={pageData.keywords}
        ogTitle={pageData.og_title}
        ogDescription={pageData.og_description}
        ogImage={pageData.og_image}
        twitterCard={pageData.twitter_card}
        twitterImage={pageData.twitter_image}
        robots="index, follow"
      />

      <CustomFurnitureBanner />
      <CustomFurnitureTipsBanner />

      <ContainerMain>
        <FurnitureToOrderDetail data={CustomFurnitureItems} />
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
    fallback: false, // Set to false to return 404 for unsupported locales
  };
};

// Generate static props for each locale
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;

  try {
    // Fetch page data for the specific locale
    const pageData = await fetchSinglePageBySlug(`/${locale}/custom-furniture`);

    return {
      props: {
        pageData,
        locale,
      },
      // Revalidate every hour (3600 seconds) for ISR
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

export default CustomFurniturePage;
