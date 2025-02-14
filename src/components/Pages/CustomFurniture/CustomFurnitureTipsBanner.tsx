"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import { TipsBannerWrapper } from "../Blogs/styles";
import { Fade } from "react-awesome-reveal";

const CustomFurnitureTipsBannerWrapper = styled(TipsBannerWrapper)`
  margin-bottom: 12rem;
  .heading {
    max-width: 30rem;
  }
`;

const CustomFurnitureTipsBanner: React.FC = () => {
  const { t } = useI18n();
  return (
    <ContainerMain>
      <CustomFurnitureTipsBannerWrapper>
        <div className="content">
          <Fade triggerOnce={true} delay={40} direction="left">
            <h2 className="heading">
              {t("CustomFurnitureTipsBanner.heading1")}{" "}
              <span>{t("CustomFurnitureTipsBanner.heading2")}</span>
            </h2>
          </Fade>
          <Fade triggerOnce={true} delay={40} direction="left">
            <p className="description">{t("CustomFurnitureTipsBanner.desc")}</p>
          </Fade>
        </div>

        <Fade triggerOnce={true} delay={40} direction="right">
          <Image
            src="/Images/CustomFurniture/kitchen-filled-with-kitchenware2.png"
            alt="kitchen-filled-with-kitchenware2"
            height={620}
            width={1020}
            className="banner_image"
          />
        </Fade>
      </CustomFurnitureTipsBannerWrapper>
    </ContainerMain>
  );
};

export default CustomFurnitureTipsBanner;
