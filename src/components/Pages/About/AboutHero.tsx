import { useI18n } from "@/hooks/useI18n";
import { BackgroundImage, HeroSectionWhiteGradient } from "../Home/styles";
import Link from "next/link";
import { AboutHeroWrapper } from "./styles";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { Fade } from "react-awesome-reveal";

const AboutHeroSection: React.FC = () => {
  const { t } = useI18n();
  const { redirect } = useRouteRedirect();
  return (
    <>
      <AboutHeroWrapper>
        <BackgroundImage
          src="/Images/About/HeroImage.png"
          alt="About Background"
          height={1000}
          width={1440}
          priority
        />

        <div className="hero_section_content">
          <div
            className="inner_content_wrapper"
            style={{ maxWidth: "71.6495rem" }}
          >
            <Fade direction="down">
              <h1 className="heading">{t("abouthero.heading")}</h1>
            </Fade>

            <Fade direction="down">
              <h2 className="paragraph">{t("abouthero.description")}</h2>
            </Fade>

            <Fade direction="down">
              <span
                onClick={() => redirect("/contact-us")}
                className="nav_link"
                style={{ cursor: "pointer" }}
              >
                {t("FurnitureToOrder.contactBtn")}
              </span>
            </Fade>
          </div>
        </div>
      </AboutHeroWrapper>

      <HeroSectionWhiteGradient>
        <div className="inner_gradient"></div>
      </HeroSectionWhiteGradient>
    </>
  );
};

export default AboutHeroSection;
