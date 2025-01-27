import styled from "styled-components";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/hooks/useI18n";
import { FurnitureToOrderContainer } from "./styles";
import { Fade } from "react-awesome-reveal";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { MaximizeImageWrapper } from "../Home/BestSolutions";
import { Button } from "antd";
import { useState } from "react";

const ItemsList = [
  {
    icon: "/Images/About/Item1.png",
    heading: "FurnitureToOrder.itemheading1",
    paragraph: "FurnitureToOrder.itemparagraph1",
  },
  {
    icon: "/Images/About/Item2.png",
    heading: "FurnitureToOrder.itemheading2",
    paragraph: "FurnitureToOrder.itemparagraph2",
  },
  {
    icon: "/Images/About/Item3.png",
    heading: "FurnitureToOrder.itemheading3",
    paragraph: "FurnitureToOrder.itemparagraph3",
  },
];

const FurnitureToOrder: React.FC = () => {
  const { t } = useI18n();
  const { redirect } = useRouteRedirect();
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <FurnitureToOrderContainer>
      <ContainerMain>
        <div className="inner_container">
          <MaximizeImageWrapper
            className={`image ${isFullScreen ? "maximize" : ""}`}
          >
            <Button
              type="primary"
              htmlType="button"
              className="control_btn"
              onClick={() => setIsFullScreen(!isFullScreen)}
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
            <Fade direction="left">
              <Image
                src="/Images/About/MobilierLaComanda.png"
                alt="Mobilier la comanda"
                height={1000}
                width={1000}
                className="main_banner"
              />
            </Fade>
          </MaximizeImageWrapper>

          <div className="content">
            <Fade direction="right">
              <h2 className="heading">
                {t("FurnitureToOrder.heading")}{" "}
                <span>{t("FurnitureToOrder.heading2")}</span>
              </h2>
            </Fade>

            <div className="list_items">
              {ItemsList.map((item, index) => (
                <Fade direction="right" key={index}>
                  <div className="list_item">
                    <Image
                      src={item.icon}
                      alt="Item1"
                      height={200}
                      width={200}
                      className="icon"
                    />

                    <div className="inner_content">
                      <h2 className="inner_heading">{t(item.heading)}</h2>
                      <p className="inner_paragraph">{t(item.paragraph)}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>

            <Fade direction="right">
              <span
                onClick={() => redirect("/contact-us")}
                className="contact_btn"
                style={{ cursor: "pointer" }}
              >
                {t("FurnitureToOrder.contactBtn")}
              </span>
            </Fade>
          </div>
        </div>
      </ContainerMain>
    </FurnitureToOrderContainer>
  );
};

export default FurnitureToOrder;
