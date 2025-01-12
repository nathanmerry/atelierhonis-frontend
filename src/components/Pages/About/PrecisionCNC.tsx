import Image from "next/image";
import styled from "styled-components";
import { PrecisionCNCContainer } from "./styles";
import { useI18n } from "@/hooks/useI18n";
import { Fade } from "react-awesome-reveal";

const PrecisionCNC: React.FC = () => {
  const { t } = useI18n();
  return (
    <PrecisionCNCContainer>
      <div className="content_grid">
        <Fade direction="right">
          <div className="heading">
            {t("PrecisionCNC.heading")}{" "}
            <span>{t("PrecisionCNC.heading2")}</span>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="content">{t("PrecisionCNC.description")}</div>
        </Fade>
      </div>

      <Fade direction="down">
        <div className="grid_images_wrapper">
          <Image
            src="/Images/About/PrecisionImage1.png"
            alt="Precision Image 1"
            height={400}
            width={400}
            className="PrecisionImage1"
          />
          <div className="main_image_wrapper">
            <Image
              src="/Images/About/GuaranteeSticker.png"
              alt="GuaranteeSticker"
              height={700}
              width={700}
              className="sticker"
            />
            <Image
              src="/Images/About/PrecisionImage2.png"
              alt="Precision Image 2"
              height={400}
              width={400}
              className="PrecisionImage2"
            />
          </div>
          <Image
            src="/Images/About/PrecisionImage3.png"
            alt="Precision Image 3"
            height={400}
            width={400}
            className="PrecisionImage3"
          />
        </div>
      </Fade>
    </PrecisionCNCContainer>
  );
};

export default PrecisionCNC;
