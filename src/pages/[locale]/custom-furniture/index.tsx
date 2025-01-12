// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FurnitureToOrderDetailItemsType } from "@/components/Pages/About/FurnitureToOrderDetail";
import dynamic from "next/dynamic";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import SeoHead from "@/components/Layouts/SeoHead";

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

const CustomFurniturePage: React.FC = () => {
  return (
    <DefaultLayout>
      <SeoHead
        title="Mobila la comanda - ATELIER HONIS"
        description="La ATELIER HONIS, oferim mobilier personalizat la comandă, adaptat nevoilor și preferințelor tale. Descoperă cum putem crea piese unice pentru casa ta."
        keywords="mobilier personalizat, mobilier la comandă, design mobilier, mobilier de calitate, ATELIER HONIS"
        ogImage="/Images/custom-furniture.jpg"
        twitterImage="/Images/custom-furniture.jpg"
      />

      <CustomFurnitureBanner />
      <CustomFurnitureTipsBanner />

      <ContainerMain>
        <FurnitureToOrderDetail data={CustomFurnitureItems} />
      </ContainerMain>
    </DefaultLayout>
  );
};
export default CustomFurniturePage;
