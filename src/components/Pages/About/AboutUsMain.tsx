// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { FurnitureToOrderDetailItemsType } from "@/components/Pages/About/FurnitureToOrderDetail";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);

const AboutHeroSection = dynamic(
  () => import("@/components/Pages/About/AboutHero"),
  { ssr: false }
);

const MadeToPerfection = dynamic(
  () => import("@/components/Pages/About/MadeToPerfection"),
  { ssr: false }
);

const AboutAtelierHonis = dynamic(
  () => import("@/components/Pages/About/AboutAtelierHonis"),
  { ssr: false }
);

const PrecisionCNC = dynamic(
  () => import("@/components/Pages/About/PrecisionCNC"),
  { ssr: false }
);

const FurnitureToOrder = dynamic(
  () => import("@/components/Pages/About/FurnitureToOrder"),
  { ssr: false }
);

const FurnitureToOrderDetail = dynamic(
  () => import("@/components/Pages/About/FurnitureToOrderDetail"),
  { ssr: false }
);

const FurnitureToOrderDetailItems: FurnitureToOrderDetailItemsType[] = [
  {
    image: "/Images/About/Consultanta.png",
    heading: "FurnitureToOrderDetailItems.heading1",
    subheading: "FurnitureToOrderDetailItems.subHeading1",
    listitems: [
      "FurnitureToOrderDetailItems.listItem1",
      "FurnitureToOrderDetailItems.listItem2",
      "FurnitureToOrderDetailItems.listItem3",
      "FurnitureToOrderDetailItems.listItem4",
    ],
    extra: "FurnitureToOrderDetailItems.extra1",
  },
  {
    image: "/Images/About/Proiectare.png",
    heading: "FurnitureToOrderDetailItems.heading2",
    listitems: [
      "FurnitureToOrderDetailItems.listItem5",
      "FurnitureToOrderDetailItems.listItem6",
      "FurnitureToOrderDetailItems.listItem7",
      "FurnitureToOrderDetailItems.listItem8",
    ],
    extra: "FurnitureToOrderDetailItems.extra2",
  },
  {
    image: "/Images/About/Executie.png",
    heading: "FurnitureToOrderDetailItems.heading3",
    subheading: "FurnitureToOrderDetailItems.subHeading2",
    listitems: [
      "FurnitureToOrderDetailItems.listItem9",
      "FurnitureToOrderDetailItems.listItem10",
      "FurnitureToOrderDetailItems.listItem11",
      "FurnitureToOrderDetailItems.listItem12",
    ],
  },
];

const AboutUsMain: React.FC = () => {
  return (
    <DefaultLayout>
      <AboutHeroSection />

      <MadeToPerfection />
      <ContainerMain>
        <AboutAtelierHonis />
        <PrecisionCNC />
      </ContainerMain>
      <FurnitureToOrder />

      <ContainerMain>
        <FurnitureToOrderDetail data={FurnitureToOrderDetailItems} />
      </ContainerMain>
    </DefaultLayout>
  );
};
export default AboutUsMain;
