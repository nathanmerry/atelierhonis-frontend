"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Switch } from "antd";
import { usePathname } from "next/navigation";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { i18nConfig } from "../../../../i18n";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

interface HeaderContainerProps {
  isScrolled: boolean;
}

// Define a custom function to filter props
const shouldForwardProp = (prop: string) => !["isScrolled"].includes(prop);

const HeaderContainer = styled.div.withConfig({
  shouldForwardProp,
})<HeaderContainerProps>`
  ${(props) =>
    props.isScrolled
      ? "background: #000; padding: 1rem; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      : "background: transparent; padding: 2rem 1rem;"};
  transition: all 0.3s ease;
  width: 100%;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;

  .inner_container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo_wrapper {
      img {
        width: fit-content;
        height: ${(props) => (props.isScrolled ? "3rem" : "4rem")};
        flex-shrink: 0;
        object-fit: contain;
        transition: all 0.3s ease-in-out;
      }
    }

    .menu_items {
      display: flex;
      align-items: center;
      gap: 2.8rem;

      .main_item {
        position: relative;
        .link_item {
          position: relative;
          display: inline-block;
          padding: 0.5rem 0;
          color: rgba(255, 255, 255, 0.7);
          font-family: Gilroy-Medium;
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          transition: all 0.3s ease;
        }

        .child_menus_main {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 99;
          padding-top: 0.81rem;
          .child_menus {
            padding: 1rem 0.84rem;
            border-radius: 0.5625rem;
            background: #ffffff;
            box-shadow: 0px 4px 18.4px 0px rgba(0, 0, 0, 0.15);
            width: 15rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            .item_link {
              color: #7c848d;
              font-size: 0.75rem;
              font-style: normal;
              font-weight: 500;
              line-height: 83.073%;

              padding: 0.6rem 0.5rem;
              border-radius: 0.375rem;

              &:hover,
              &.active {
                color: #fff;
                background: #000;
              }
            }
          }
        }

        &:hover {
          &:hover,
          &.active {
            .link_item {
              color: #fff;
            }
          }

          .child_menus_main {
            display: block;
          }
        }
      }
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .contact_us_btn {
      display: flex;
      height: 3rem;
      padding: 0.54338rem 1.18563rem 0.64219rem 1.18563rem;
      justify-content: center;
      align-items: center;
      gap: 0.39519rem;

      border-radius: 4.3125rem;
      border: 2px solid #fff;

      color: #fff;
      font-family: Poppins;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: 0.02rem;
      transition: all 0.3s ease;
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

const LanguagesSwitchWrapper = styled.div`
  border-radius: 0.5rem;
  background: #000000;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .navigate_locale_btn {
    color: #ffffff;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 200%;
    height: 1.5rem;
    width: 1.5rem;
    background-color: #ff6f00;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
`;

export const LanguageSwitch = styled(Switch)`
  .ant-switch-inner {
    border: 1px solid #ffffff;
    span {
      color: #ffffff;
      font-family: Gilroy-Medium;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 600;
    }
  }

  &.ant-switch-checked {
    background-color: #ff6f00 !important;
  }
`;

const menuItems = [
  { key: "navbar.home", href: "/" },
  { key: "navbar.aboutUs", href: "/about-us" },
  { key: "navbar.blogs", href: "/blogs" },
  {
    key: "navbar.customFurniture",
    href: "/custom-furniture",
    children: [
      {
        key: "navbar.furnitureItems.menu1",
        href: "/custom-furniture#mobila-bucatarie",
      },
      {
        key: "navbar.furnitureItems.menu2",
        href: "/custom-furniture#mobila-living",
      },
      {
        key: "navbar.furnitureItems.menu3",
        href: "/custom-furniture#mobilier-hol",
      },
      {
        key: "navbar.furnitureItems.menu4",
        href: "/custom-furniture#mobila-dormitor",
      },
      {
        key: "navbar.furnitureItems.menu5",
        href: "/custom-furniture#mobilier-baie",
      },
      {
        key: "navbar.furnitureItems.menu6",
        href: "/custom-furniture#mobilier-pentru-camera-copiilor",
      },
      {
        key: "navbar.furnitureItems.menu7",
        href: "/custom-furniture#mobilier-comercial",
      },
    ],
  },
];

export type HeaderPropsType = {};

const Header: React.FC<HeaderPropsType> = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { t } = useI18n();
  const { redirect } = useRouteRedirect();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    console.log("pathname:", pathname.includes("blog-detail"));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      style={{
        backgroundColor: pathname.includes("blog-detail") ? "#000000" : "",
      }}
    >
      <ContainerMain className="inner_container">
        <Fade direction="left">
          <span
            onClick={() => redirect("/")}
            className="logo_wrapper"
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/Images/Header/SiteLogo.png"
              alt="site logo"
              height={120}
              width={300}
            />
          </span>
        </Fade>
        <Fade direction="down">
          <div className="menu_items">
            {menuItems.map((item, index) => (
              <div className="main_item">
                <span
                  key={index}
                  onClick={item.href ? () => redirect(item.href) : undefined}
                  className={`link_item ${
                    item.href && router.asPath == item.href ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {t(item.key)}
                </span>
                <span>
                  {item.children && (
                    <div className="child_menus_main">
                      <div className="child_menus">
                        {item.children.map((child, index) => {
                          const isActive = router.asPath.includes(child.href);
                          return (
                            <span
                              className={`item_link ${
                                isActive ? "active" : ""
                              }`}
                              key={index}
                              style={{ cursor: "pointer" }}
                              onClick={
                                child.href
                                  ? () => redirect(child.href)
                                  : undefined
                              }
                            >
                              {t(child.key)}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>
        </Fade>
        <Fade direction="right">
          <div className="controls">
            <LanguagesSwitchWrapper>
              {i18nConfig.locales.map((locale) => (
                <LanguageSwitcher key={locale} locale={locale} />
              ))}
            </LanguagesSwitchWrapper>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => redirect("/contact-us")}
              className="contact_us_btn"
            >
              {t("navbar.contactUs")}
            </span>
          </div>
        </Fade>
      </ContainerMain>
    </HeaderContainer>
  );
};

export default Header;
