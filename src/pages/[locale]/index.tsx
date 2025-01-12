import SeoHead from "@/components/Layouts/SeoHead";
import { ContainerMain } from "../../../public/Styles/Layout/styles";
import dynamic from "next/dynamic";

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

const Home = () => {
  return (
    <DefaultLayout>
      <SeoHead
        title="Acasă - ATELIER HONIS"
        description="Atelier Honis realizează mobilier la comandă, îmbinând calitatea, stilul și funcționalitatea pentru casa dumneavoastră. Descoperiți soluții de design personalizate pentru fiecare cameră."
        keywords="mobilier, mobilier la comandă, mobilier pentru casă, design personalizat, ateliere de mobilă, mobilier de calitate"
        ogImage="/Images/Home/Timeline1.jpg"
        twitterImage="/Images/Home/Timeline1.jpg"
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

export default Home;
