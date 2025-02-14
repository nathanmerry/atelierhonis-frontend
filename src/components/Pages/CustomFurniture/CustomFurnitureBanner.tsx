"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import { BlogsBannerContainer } from "../Blogs/styles";
import { Fade } from "react-awesome-reveal";

const CustomFurnitureBanner: React.FC = () => {
  const { t } = useI18n();
  return (
    <BlogsBannerContainer>
      <Image
        src="/Images/CustomFurniture/beautiful-kitchen-interior-design.png"
        alt="beautiful-kitchen-interior-design"
        height={1000}
        width={1400}
        className="blog_banner"
      />
      <ContainerMain>
        <div className="content">
          <Fade triggerOnce={true} delay={40} direction="right">
            <h2 className="sub_heading">
              {t("CustomFurnitureBanner.subHeading")}
            </h2>
          </Fade>
          <Fade triggerOnce={true} delay={40} direction="right">
            <p className="heading" data-aos="fade-right" data-aos-delay="100">
              {t("CustomFurnitureBanner.heading")}
            </p>
          </Fade>
        </div>
      </ContainerMain>
    </BlogsBannerContainer>
  );
};

export default CustomFurnitureBanner;
