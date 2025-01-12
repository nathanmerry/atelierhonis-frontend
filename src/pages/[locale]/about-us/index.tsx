import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SeoHead from "@/components/Layouts/SeoHead";
import AboutUsMain from "@/components/Pages/About/AboutUsMain";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Despre noi - ATELIER HONIS"
        description="Aflați mai multe despre ATELIER HONIS, atelierul de mobilă la comandă care îmbină designul personalizat cu calitatea superioară. Descoperiți povestea noastră și angajamentul nostru pentru excelență."
        keywords="despre noi, atelier de mobilă, mobilier la comandă, design personalizat, ATELIER HONIS"
        ogImage="/Images/About/AboutHonisBanner.png"
        twitterImage="/Images/About/AboutHonisBanner.png"
      />

      <AboutUsMain />
    </>
  );
};
export default AboutUsPage;
