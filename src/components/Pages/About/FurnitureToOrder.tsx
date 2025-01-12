import styled from "styled-components";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/hooks/useI18n";
import { FurnitureToOrderContainer } from "./styles";
import { Fade } from "react-awesome-reveal";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

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
  return (
    <FurnitureToOrderContainer>
      <ContainerMain>
        <div className="inner_container">
          <Fade direction="left">
            <Image
              src="/Images/About/MobilierLaComanda.png"
              alt="Mobilier la comanda"
              height={1000}
              width={1000}
              className="main_banner"
            />
          </Fade>

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
