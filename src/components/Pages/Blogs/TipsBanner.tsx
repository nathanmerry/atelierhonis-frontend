"use client";

import Image from "next/image";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import styled from "styled-components";
import { TipsBannerWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";

const TipsBanner: React.FC = () => {
  const { t } = useI18n();
  return (
    <ContainerMain>
      <TipsBannerWrapper>
        <div className="content">
          <Fade direction="left">
            <h2 className="heading">
              {t("TipsBanner.heading1")} <span>{t("TipsBanner.heading2")}</span>
            </h2>
          </Fade>
          <Fade direction="left">
            <p className="description">{t("TipsBanner.desc")}</p>
          </Fade>
        </div>

        <Fade direction="right">
          <Image
            src="/Images/Blogs/kitchen-filled-with-kitchenware2.png"
            alt="kitchen-filled-with-kitchenware2"
            height={620}
            width={1020}
            className="banner_image"
          />
        </Fade>
      </TipsBannerWrapper>
    </ContainerMain>
  );
};

export default TipsBanner;
