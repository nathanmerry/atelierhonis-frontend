"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import { BlogsBannerContainer } from "./styles";
import { Fade } from "react-awesome-reveal";

const BlogsBanner: React.FC = () => {
  const { t } = useI18n();
  return (
    <BlogsBannerContainer>
      <Image
        src="/Images/Blogs/kitchen-filled-with-kitchenware.png"
        alt="kitchen-filled-with-kitchenware"
        height={1000}
        width={1400}
        className="blog_banner"
      />
      <ContainerMain>
        <div className="content">
          <Fade direction="left">
            <h2 className="sub_heading">{t("BlogBanner.subHeading")}</h2>
          </Fade>
          <Fade direction="left">
            <p className="heading">{t("BlogBanner.heading")}</p>
          </Fade>
        </div>
      </ContainerMain>
    </BlogsBannerContainer>
  );
};

export default BlogsBanner;
