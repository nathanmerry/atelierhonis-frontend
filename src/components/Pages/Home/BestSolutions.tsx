import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import styled from "styled-components";

const BestSolutionsWrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  align-items: center;
  gap: 6rem;

  .content {
    .title {
      color: #000;
      font-family: "Abhaya Libre";
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 105%;

      span {
        color: var(--Style, #ff6f00);
        font-family: "Abhaya Libre";
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 105%;
      }
    }
    .description {
      color: #1e1e1e;
      font-family: Gilroy;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 500;
      line-height: 185%;
      max-width: 22.6rem;
    }
  }

  .contact_btn {
    margin-top: 1rem;
    height: 3rem;
    width: fit-content;
    padding: 0.54338rem 1.18563rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.39519rem;

    border-radius: 4.3125rem;
    background: #000;

    color: #fff;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.02rem;
  }

  @media screen and (max-width: 1200px) {
    .content {
      .title {
        font-size: 3rem;
        span {
          font-size: 3rem;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 4rem;
    .content {
      .title {
        font-size: 2rem;
        span {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const MaximizeImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    height: calc(100% - 2rem);
    width: calc(100% - 5rem);
    border-radius: 1.25rem;
    background: #deebff;
    position: absolute;
    top: -2rem;
    left: -3.8rem;
    z-index: -1;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 1.25rem;
  }

  .control_btn {
    opacity: 0;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 19;

    border-radius: 2.3125rem;
    background: #ff6f00 !important;

    height: 2rem;
    width: 2rem;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg path {
      fill: #ffffff;
    }
  }

  &.maximize {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100vh;
    width: 100%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      height: 100%;
      width: 100%;
      border-radius: 0;
      background: #deebff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .control_btn {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
    }

    img {
      max-height: calc(100vh - 3rem);
      width: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 991px) {
    &::before {
      left: -2px;
      height: calc(100% + 3rem);
    }

    .control_btn {
      top: 0.5rem !important;
      left: 0.5rem !important;
    }
  }

  &:hover {
    .control_btn {
      opacity: 1;
    }
  }
`;

const BestSolutions: React.FC = () => {
  const { t } = useI18n();

  const { redirect } = useRouteRedirect();

   const [isFullScreen, setIsFullScreen] = useState(false);
    const imageId = "bestsolutions";
  
    useEffect(() => {
      const handleHashChange = () => {
        setIsFullScreen(window.location.hash === `#${imageId}`);
      };
  
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
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
    <BestSolutionsWrapper>
      <div className="content">
        <Fade triggerOnce={true} delay={40} direction="right">
          <h2 className="title">
            {t("bestSolutions.heading1")}{" "}
            <span>{t("bestSolutions.heading2")}</span>
          </h2>
        </Fade>

        <Fade triggerOnce={true} delay={40} direction="right">
          <p className="description">{t("bestSolutions.description")}</p>
        </Fade>

        <Fade triggerOnce={true} delay={40} direction="right">
          <span
            onClick={() => redirect("/contact-us")}
            className="contact_btn"
            style={{ cursor: "pointer" }}
          >
            {t("FurnitureToOrder.contactBtn")}
          </span>
        </Fade>
      </div>

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
            src="/Images/Home/12StandardKitchenSizes.png"
            alt="12 Standard Kitchen Sizes"
            height={768}
            width={1440}
          />
        </Fade>
      </MaximizeImageWrapper>
    </BestSolutionsWrapper>
  );
};

export default BestSolutions;
