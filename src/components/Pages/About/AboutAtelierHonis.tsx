import Image from "next/image";
import styled from "styled-components";
import { AboutAtelierHonisContainer } from "./styles";
import { useI18n } from "@/hooks/useI18n";
import { Fade } from "react-awesome-reveal";
import { ContactBtn } from "../Home/FurnitureTimeline";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

const AboutAtelierHonis: React.FC = () => {
  const { t } = useI18n();
  const { redirect } = useRouteRedirect();

  return (
    <AboutAtelierHonisContainer>
      <Fade direction="right">
        <Image
          src="/Images/About/AboutHonisBanner.png"
          alt="About Honis Banner"
          height={1200}
          width={1200}
          className="about_honis_banner"
        />
      </Fade>

      <Fade direction="left">
        <div className="content">
          <h2 className="sub_heading">{t("AboutAtelierHonis.subHeading")}</h2>
          <h2 className="heading">
            {t("AboutAtelierHonis.heading1")}{" "}
            <span>{t("AboutAtelierHonis.heading2")}</span>
          </h2>
          <p className="description">{t("AboutAtelierHonis.description")}</p>

          <Fade direction="down">
            <ContactBtn
              onClick={() => redirect("/contact-us")}
              style={{ cursor: "pointer" }}
            >
              {t("FurnitureToOrder.contactBtn")}
            </ContactBtn>
          </Fade>
        </div>
      </Fade>
    </AboutAtelierHonisContainer>
  );
};

export default AboutAtelierHonis;
