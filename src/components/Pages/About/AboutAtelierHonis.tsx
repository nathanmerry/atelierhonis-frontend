import Image from "next/image";
import styled from "styled-components";
import { AboutAtelierHonisContainer } from "./styles";
import { useI18n } from "@/hooks/useI18n";
import { Fade } from "react-awesome-reveal";
import { ContactBtn } from "../Home/FurnitureTimeline";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { MaximizeImageWrapper } from "../Home/BestSolutions";
import { Button } from "antd";
import { useState,useEffect } from "react";


 const AboutAtelierHonis: React.FC = () => {
  const { t } = useI18n();
  const { redirect } = useRouteRedirect();

  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageId = "aboutatelierhonis";

  useEffect(() => {
    const handleHashChange = () => {
      setIsFullScreen(window.location.hash === `#${imageId}`);
    };

    const handleClickOutside = (e: MouseEvent) => {
      
      const target = e.target as HTMLElement;
      console.log(target.closest("img"));
      if (!target.closest("img") && !target.closest("button")) {
        setIsFullScreen(false);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(prev => {
      const newState = !prev;
      if (newState) {
        window.location.hash = `#${imageId}`;
      } else {
        window.history.pushState("", document.title, window.location.pathname);
      }
      return !prev;
    });
  };
 

  return (
    <AboutAtelierHonisContainer>
      <MaximizeImageWrapper
        className={`image ${isFullScreen ? "maximize" : ""}`}
      >
        <Button
          type="primary"
          htmlType="button"
          className="control_btn"
          onClick={() => toggleFullScreen()}
        >
          {isFullScreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
            </svg>
          )}
        </Button>
        <Fade triggerOnce={true} delay={40} direction="left">
          <Image
            src="/Images/About/AboutHonisBanner.png"
            alt="About Honis Banner"
            height={1200}
            width={1200}
            className="about_honis_banner"
          />
        </Fade>
      </MaximizeImageWrapper>

      <Fade triggerOnce={true} delay={40} direction="left">
        <div className="content">
          <h2 className="sub_heading">{t("AboutAtelierHonis.subHeading")}</h2>
          <h2 className="heading">
            {t("AboutAtelierHonis.heading1")}{" "}
            <span>{t("AboutAtelierHonis.heading2")}</span>
          </h2>
          <p className="description">{t("AboutAtelierHonis.description")}</p>

          <Fade triggerOnce={true} delay={40} direction="down">
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
