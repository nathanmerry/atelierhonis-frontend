"use client";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styled from "styled-components";
import TimesIcon from "/public/Images/Header/TimesIcon.svg";
import HomeIcon from "/public/Images/Header/HomeIcon.svg";
import ContactUsIcon from "/public/Images/Header/ContactUsIcon.svg";
import AboutUsIcon from "/public/Images/Header/AboutUsIcon.svg";
import BlogsIcon from "/public/Images/Header/BlogsIcon.svg";
import CustomFurnitureIcon from "/public/Images/Header/CustomFurnitureIcon.svg";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

// Define the type for the props that are not forwarded to the DOM
interface HeaderMobileContainerProps {
  isOpen: boolean;
  isScrolled: boolean;
}

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 2rem 0.5rem;
    .logo {
      padding: 0.5rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .site_logo {
        height: 3.56256rem;
        width: fit-content;
      }

      svg {
        path {
          fill: #000000;
        }
      }
    }

    .menu_items {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(51, 51, 51, 0.15);

      .link_item {
        padding: 0.5rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: #333;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

// Define a custom function to filter props
const shouldForwardProp = (prop: string) =>
  !["isOpen", "isScrolled"].includes(prop);

const HeaderMobileContainer = styled.div.withConfig({
  shouldForwardProp,
})<HeaderMobileContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: ${(props) => (props.isScrolled ? "#000000;" : "#ffffff0d;")};
  .top_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.25rem;

    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo_wrapper {
      .header_logo {
        transition: all 0.3s ease;
        width: fit-content;
        height: ${(props) => (props.isScrolled ? " 2.5rem" : "3rem")};
        object-fit: contain;
      }
    }
  }
`;

const menuItems = [
  { key: "navbar.home", icon: <HomeIcon />, href: "/" },
  { key: "navbar.aboutUs", icon: <AboutUsIcon />, href: "/about-us" },
  { key: "navbar.blogs", icon: <BlogsIcon />, href: "/blogs" },
  {
    key: "navbar.customFurniture",
    icon: <CustomFurnitureIcon />,
    href: "/custom-furniture",
  },
  { key: "navbar.contactUs", icon: <ContactUsIcon />, href: "/contact-us" },
];

export type HeaderMobilePropTypes = {};

const HeaderMobile: React.FC<HeaderMobilePropTypes> = () => {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { redirect } = useRouteRedirect();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setDrawerOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderMobileContainer isOpen={drawerOpen} isScrolled={isScrolled}>
      <ContainerMain className="top_header">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => redirect("/")}
          className="logo_wrapper"
        >
          <Image
            src="/Images/Header/SiteLogo.png"
            alt="Darp Logo"
            height={200}
            width={400}
            className="header_logo"
          />
        </span>

        <div className="controls">
          <Image
            src="/Images/Header/BarsSolid.svg"
            alt="BarsSolid"
            height={32}
            width={32}
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
        </div>
      </ContainerMain>

      <StyledDrawer
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={false}
      >
        <div className="logo">
          <span style={{ cursor: "pointer" }} onClick={() => redirect("/")}>
            <Image
              src="/Images/Header/SiteLogoBlack.png"
              alt="logo"
              height={100}
              width={200}
              className="site_logo"
            />
          </span>

          <TimesIcon onClick={() => setDrawerOpen(!drawerOpen)} />
        </div>

        <div className="menu_items">
          {menuItems.map((item, index) => (
            <span
              key={index}
              onClick={() => redirect(item.href)}
              className="link_item"
              style={{ cursor: "pointer" }}
            >
              {item.icon} {t(item.key)}
            </span>
          ))}
        </div>
      </StyledDrawer>
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
