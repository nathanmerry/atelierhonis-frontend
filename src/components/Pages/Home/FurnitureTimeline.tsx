import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

import styled from "styled-components";

interface FurntureTimelineWrapperProps {
  isEven?: boolean;
}

const FurntureTimelineWrapperOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin: 3rem 0;

  &::before {
    content: "";
    height: 100%;
    width: 0rem;
    border-right: 1px dashed rgba(255, 111, 0, 0.65);
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 991px) {
    &::before {
      content: unset;
    }
  }
`;

export const FurntureTimelineWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isEven",
})<FurntureTimelineWrapperProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8rem;

  grid-template-areas: ${(props) =>
    props.isEven ? `"image content"` : `"content image"`};

  .content_wrapper {
    overflow: hidden;
    position: relative;
    grid-area: content;
    min-height: 21.56706rem;
    flex-shrink: 0;
    border-radius: 0.8125rem;
    background: rgba(21, 101, 216, 0.04);
    padding: 3rem 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ${(props) =>
      props.isEven
        ? `
      &::before {
        content: '';
        width: 2.58113rem;
        height: 4.368rem;
        position: absolute;
        top: 4.5rem;
        left: -2.5rem;
        background: url('/Images/Icons/AngleLeftLg.svg');
        background-repeat: no-repeat;
        background-size: contain;
      }

      &::after {
        content: '';
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        top: 5.5rem;
        left: -5.23rem;
        background: url('/Images/Icons/Pulses.png');
        background-repeat: no-repeat;
        background-size: contain;
        object-position: center;
        border-radius: 50%;
      }
    `
        : `

        align-items:end;
        text-align:right;
      &::before {
        content: '';
        width: 2.58113rem;
        height: 4.368rem;
        position: absolute;
        top: 4.5rem;
        right: -2.5rem;
        background: url('/Images/Icons/AngleRightLg.svg');
        background-repeat: no-repeat;
        background-size: contain;
      }

      &::after {
        content: '';
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        top: 5.5rem;
        right: -5.23rem;
        background: url('/Images/Icons/Pulses.png');
        background-repeat: no-repeat;
        background-size: contain;
        object-position: center;
        border-radius: 50%;
      }
    `}

    .heading {
      color: #000;
      font-family: "Abhaya Libre";
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 110.417%;
      /* text-transform: capitalize; */

      span {
        color: #ff6f00;
        font-family: "Abhaya Libre";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 110.417%;
        /* text-transform: capitalize; */
      }

      @media screen and (max-width: 1200px) {
        font-size: 2.5rem;
        span {
          font-size: 2.5rem;
        }
      }
    }

    .tag {
      margin-bottom: 0.5rem;
      display: flex;
      width: fit-content;
      /* height: 2.3125rem; */
      padding: 0.5rem 2rem 0.5rem 1.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 2.3125rem;
      background: #ff6f00;
      color: #ffffff;
      font-family: "Abhaya Libre";
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 122.176%;
    }
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;

    .content_wrapper {
      min-height: fit-content;
      width: 100%;
      padding: 1.26rem;

      .heading {
        font-size: 2rem;
        span {
          font-size: 2rem;
        }
      }

      .tag {
        font-size: 1.8rem;
      }
      &::before,
      &::after {
        content: unset;
      }
    }
  }
`;

const FurnitureTimelineHeading = styled.div`
  margin-top: 4.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.94rem;
  text-align: center;
  max-width: 49.02406rem;
  margin-left: auto;
  margin-right: auto;
`;

export const BlackLink = styled(Link)`
  display: flex;
  height: 3rem;
  width: fit-content;
  padding: 0.54338rem 1.18563rem 0.64219rem 1.18563rem;
  justify-content: center;
  align-items: center;
  gap: 0.39519rem;
  border-radius: 4.3125rem;
  background: #000;

  color: #ffffff;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.02rem;
`;

interface GradientHeadingProps {
  size?: "sm" | "md" | "lg";
}

const fontSizeMap = {
  sm: "2.2rem",
  md: "3rem",
  lg: "3.75rem",
};

const fontSizeMapMedia = {
  sm: "1.75rem",
  md: "2rem",
  lg: "2.75rem",
};

export const GradientHeading = styled.h2<GradientHeadingProps>`
  color: #000;
  font-family: "Abhaya Libre";
  font-style: normal;
  /* text-transform: capitalize; */
  font-size: ${(props) => fontSizeMap[props.size || "md"]};

  span {
    font-size: ${(props) => fontSizeMap[props.size || "md"]};
    color: #ff6f00;
    font-family: "Abhaya Libre";
    font-style: normal;
    /* text-transform: capitalize; */
  }

  @media (max-width: 991px) {
    font-size: ${(props) => fontSizeMapMedia[props.size || "md"]};

    span {
      font-size: ${(props) => fontSizeMapMedia[props.size || "md"]};
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  grid-area: image;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .control_btn {
    position: absolute;
    top: 0;
    right: 0;
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
`;

export const ContactBtn = styled.div`
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
`;

type FurnitureTimelineType = {
  key: string;
  tag: string;
  heading1: string;
  heading2: string;
  image: string;
};

const TimelineData: FurnitureTimelineType[] = [
  {
    key: "shape",
    tag: "furnitureTimeline.items.0.tag",
    heading1: "furnitureTimeline.items.0.heading1",
    heading2: "furnitureTimeline.items.0.heading2",
    image: "/Images/Home/Timeline1.png",
  },
  {
    key: "compartments",
    tag: "furnitureTimeline.items.1.tag",
    heading1: "furnitureTimeline.items.1.heading1",
    heading2: "furnitureTimeline.items.1.heading2",
    image: "/Images/Home/Timeline2.png",
  },
  {
    key: "materials",
    tag: "furnitureTimeline.items.2.tag",
    heading1: "furnitureTimeline.items.2.heading1",
    heading2: "furnitureTimeline.items.2.heading2",
    image: "/Images/Home/Timeline3.png",
  },
  {
    key: "milling",
    tag: "furnitureTimeline.items.3.tag",
    heading1: "furnitureTimeline.items.3.heading1",
    heading2: "furnitureTimeline.items.3.heading2",
    image: "/Images/Home/Timeline4.png",
  },
  {
    key: "fronts",
    tag: "furnitureTimeline.items.4.tag",
    heading1: "furnitureTimeline.items.4.heading1",
    heading2: "furnitureTimeline.items.4.heading2",
    image: "/Images/Home/Timeline5.png",
  },
  {
    key: "countertop",
    tag: "furnitureTimeline.items.5.tag",
    heading1: "furnitureTimeline.items.5.heading1",
    heading2: "furnitureTimeline.items.5.heading2",
    image: "/Images/Home/Timeline6.png",
  },
  {
    key: "handles",
    tag: "furnitureTimeline.items.6.tag",
    heading1: "furnitureTimeline.items.6.heading1",
    heading2: "furnitureTimeline.items.6.heading2",
    image: "/Images/Home/Timeline7.png",
  },
  {
    key: "touchUps",
    tag: "furnitureTimeline.items.7.tag",
    heading1: "furnitureTimeline.items.7.heading1",
    heading2: "furnitureTimeline.items.7.heading2",
    image: "/Images/Home/Timeline8.png",
  },
  {
    key: "finalDesign",
    tag: "furnitureTimeline.items.8.tag",
    heading1: "furnitureTimeline.items.8.heading1",
    heading2: "furnitureTimeline.items.8.heading2",
    image: "/Images/Home/Timeline9.png",
  },
];

const FurnitureTimeline: React.FC = () => {
  const { t } = useI18n();

  // State to track the index of the fullscreen item
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);
  const { redirect } = useRouteRedirect();

  const handleToggleFullScreen = (index: number) => {
    // If the current index is already fullscreen, reset it; otherwise, set it
    setFullScreenIndex(fullScreenIndex === index ? null : index);
  };

  return (
    <>
      <FurnitureTimelineHeading>
        <Fade triggerOnce={true} delay={40} direction="left">
          <GradientHeading size="lg">
            {t("transactionTimeline.tagLine.heading1")}{" "}
            <span>{t("transactionTimeline.tagLine.heading2")}</span>
          </GradientHeading>
        </Fade>
        {/* <Fade triggerOnce={true} delay={40} direction="down">
          <BlackLink href="#">
            {t("transactionTimeline.tagLine.link")}
          </BlackLink>
        </Fade> */}
      </FurnitureTimelineHeading>

      <FurntureTimelineWrapperOuter>
        {TimelineData.map((timeline, index) => (
          <FurntureTimelineWrapper key={timeline.key} isEven={index % 2 === 0}>
            <ImageWrapper
              className={fullScreenIndex === index ? "maximize" : ""}
            >
              <Button
                type="primary"
                htmlType="button"
                className="control_btn"
                onClick={() => handleToggleFullScreen(index)}
              >
                {fullScreenIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
                  </svg>
                )}
              </Button>
              <Fade triggerOnce={true} delay={40} direction="right">
                <Image
                  src={timeline.image}
                  alt={t(timeline.heading1)}
                  height={800}
                  width={1000}
                />
              </Fade>
            </ImageWrapper>
            <div className="content_wrapper" data-aos="fade-left">
              <Fade triggerOnce={true} delay={40} direction="left">
                <div className="tag">
                  {index + 1}. {t(timeline.tag)}
                </div>
                <h3 className="heading">
                  {t(timeline.heading1)} <span>{t(timeline.heading2)}</span>{" "}
                </h3>
              </Fade>
            </div>
          </FurntureTimelineWrapper>
        ))}
      </FurntureTimelineWrapperOuter>

      <Fade triggerOnce={true} delay={40} direction="down">
        <ContactBtn
          onClick={() => redirect("/contact-us")}
          style={{ cursor: "pointer", margin: "auto" }}
        >
          {t("FurnitureToOrder.contactBtn")}
        </ContactBtn>
      </Fade>
    </>
  );
};

export default FurnitureTimeline;
