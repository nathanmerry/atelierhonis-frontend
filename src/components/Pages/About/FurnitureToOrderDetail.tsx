import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";
import styled from "styled-components";
import { FurnitureToOrderDetailContainer } from "./styles";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { useState } from "react";
import { Button } from "antd";

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 37.72481rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 1.25rem;
    background: #deebff;
    position: absolute;
    left: -4rem;
    top: -4rem;
    z-index: -1;
  }

  &::after {
    content: "";
    height: calc(100% - 9rem);
    width: calc(100% - 9rem);
    border-radius: 1.25rem;
    background: #deebff;
    position: absolute;
    right: -3.8rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  .control_btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 19;
    opacity: 0;
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

  &:hover {
    .control_btn {
      opacity: 1;
    }
  }

  &.maximize {
    max-width: 100%;
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
      max-height: calc(100vh - 4rem);
      width: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 991px) {
    .control_btn {
      top: -2.5rem;
      left: 0rem;
    }
  }
`;

export type FurnitureToOrderDetailItemsType = {
  image: string;
  heading: string;
  subheading?: string;
  listitems: string[];
  sectionId?: string;
  extra?: string;
  link?: {
    href: string;
    label: string;
  };
};

type FurnitureToOrderDetailType = {
  data: FurnitureToOrderDetailItemsType[];
};

const FurnitureToOrderDetail: React.FC<FurnitureToOrderDetailType> = ({
  data,
}) => {
  const { t } = useI18n();
  const { redirect } = useRouteRedirect();

  // State to track the index of the fullscreen item
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  const handleToggleFullScreen = (index: number) => {
    // If the current index is already fullscreen, reset it; otherwise, set it
    setFullScreenIndex(fullScreenIndex === index ? null : index);
  };

  return (
    <FurnitureToOrderDetailContainer>
      {data.map((item, index) => (
        <div
          className="inner_container"
          key={index}
          {...(item.sectionId && { id: item.sectionId })}
        >
          <ImageWrapper className={fullScreenIndex === index ? "maximize" : ""}>
            <Fade triggerOnce={true} delay={40} direction={index % 2 == 0 ? "right" : "left"}>
              <span>
                <Button
                  type="primary"
                  htmlType="button"
                  className="control_btn"
                  onClick={() => handleToggleFullScreen(index)}
                >
                  {fullScreenIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
                    </svg>
                  )}
                </Button>
                <Image
                  src={item.image}
                  alt={item.heading}
                  height={1200}
                  width={1200}
                />
              </span>
            </Fade>
          </ImageWrapper>

          <div className="content">
            <Fade triggerOnce={true} delay={40} direction={index % 2 == 0 ? "left" : "right"}>
              <h2 className="heading">{t(item.heading)}</h2>
            </Fade>
            <Fade triggerOnce={true} delay={40} direction={index % 2 == 0 ? "left" : "right"}>
              {item.subheading && (
                <p className="sub_heading">{t(item.subheading)}</p>
              )}
            </Fade>
            <Fade triggerOnce={true} delay={40} direction={index % 2 == 0 ? "left" : "right"}>
              <ul className="list_items">
                {item.listitems.map((liitem, index) => (
                  <li key={index}>{t(liitem)}</li>
                ))}
              </ul>
            </Fade>
            <Fade triggerOnce={true} delay={40} direction={index % 2 == 0 ? "left" : "right"}>
              {item.extra && <h3 className="extra">{t(item.extra)}</h3>}
            </Fade>
            <Fade triggerOnce={true} delay={40} direction={index % 2 == 0 ? "left" : "right"}>
              {item.link && (
                <span
                  onClick={() => redirect("/contact-us")}
                  style={{ cursor: "pointer" }}
                  className="load_more_link"
                >
                  {t("abouthero.navlink")}
                </span>
              )}
            </Fade>
          </div>
        </div>
      ))}
    </FurnitureToOrderDetailContainer>
  );
};

export default FurnitureToOrderDetail;
