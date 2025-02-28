"use client";

import { Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useI18n } from "@/hooks/useI18n";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

// Social Media Icons
import Facebook from "/public/Images/Footer/Facebook.svg";
import LinkedinIn from "/public/Images/Footer/LinkedinIn.svg";
import Instagram from "/public/Images/Footer/Instagram.svg";
import Twitter from "/public/Images/Footer/Twitter.svg";
import Youtube from "/public/Images/Footer/Youtube.svg";


const FooterContainer = styled.section`
  overflow: hidden;
  background: #000;
  overflow: hidden;
  margin-top: 7rem;

  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left: auto;
  margin-right: auto;

  .footer_inner_container {
    padding-top: 4.7rem;
    .footer_top_items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;
      padding-bottom: 3.5rem;

      .logo_container {
        max-width: 22.5rem;
        .logo_wrapper {
          img {
            height: 4rem;
            width: fit-content;
          }
        }

        .description {
          margin-top: 1.8rem;
          margin-bottom: 2.5rem;
          color: #d2d2d2;
          font-family: Inter;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: 171.429%;
        }

        @media screen and (max-width: 425px) {
          max-width: 100%;

          .logo_wrapper {
            img {
              height: 3rem;
              width: fit-content;
            }
          }
        }
      }

      .footer_links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        .heading {
          margin-bottom: 0.5rem;
          color: #ff6f00;
          font-family: Inter;
          font-size: 0.96363rem;
          font-style: normal;
          font-weight: 600;
          line-height: 120%;
        }

        .link {
          color: #d2d2d2;
          font-family: Inter;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          opacity: 0.7;
          &:hover {
            opacity: 1;
          }
        }
      }

      .social_links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .social_links_icons {
          display: flex;
          align-items: center;
          gap: 1rem;

          .social_link {
            width: 2.5625rem;
            height: 2.5625rem;
            flex-shrink: 0;
            border-radius: 50%;
            background-color: #ff6f00;

            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
              background-color: #e46300;
            }
          }
        }
      }

      @media screen and (max-width: 426px) {
        .logo_container {
          order: 1;
        }

        .social_links {
          order: 2;
          width: 100%;
        }

        .footer_links {
          order: 3;
        }
      }
    }
  }
  .copyright_container {
    border-top: 1px solid rgba(239, 242, 241, 0.28);
    padding: 2.5rem 0;
    display: flex;
    align-items: center;
    margin-bottom:50px;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    .copyright {
      color: #d2d2d2;
      font-family: Inter;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 184.615%;
    }

    .legal_actions {
      display: flex;
      align-items: center;
      column-gap: 3.6rem;
      row-gap: 1rem;
      flex-wrap: wrap;
      color: #d2d2d2;
      text-align: right;
      font-family: Inter;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 171.429%;
    }
  }

  .contact_btn {
    display: block;
    padding: 0.5rem 1.5rem;
    border-radius: 2.3125rem;
    background: #ff6f00;
    color: #fff;
    font-family: "Inter";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 122.176%;
    text-transform: capitalize;
  }

  /* Floating Chat Buttons */
  .chat_container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 999;

    .chat_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #25d366;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 32px;
        height: 32px;
      }
    }

    .tawk_button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export type FooterPropsType = {};

const Footer: React.FC<FooterPropsType> = () => {
  const { t, lang } = useI18n(); // Get the current language
  const { redirect } = useRouteRedirect();


  useEffect(() => {

    if((window as any).Tawk_API==undefined){
      // Load Tawk.to script dynamically
      var Tawk_API = ((window as any).Tawk_API = (window as any).Tawk_API || {});
      var Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/67af73c2812ce4190cb87e74/1ik2lobtc";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      script.onload = () => {
        if ((window as any).Tawk_API!=undefined) {
        
          // Set language in Tawk.to
          (window as any).Tawk_API.onLoad = function () {
            (window as any).Tawk_API.setAttributes(
              { language: lang }, // Set user's language
              function (error: any) {
                if (error) console.error("Tawk.to language error:", error);
              }
            );
          };
        }
      };

      document.body.appendChild(script);
    }
  }, [lang]); // Run effect when language changes

  

  
  return (
    <FooterContainer>
      <ContainerMain className="footer_inner_container">
        <div>
          <div className="footer_top_items">
            <div className="logo_container">
              <Fade triggerOnce={true} delay={40} direction="left">
                <Link href="/" className="logo_wrapper">
                  <Image
                    src="/Images/Header/SiteLogo.png"
                    alt="Darp Logo"
                    height={120}
                    width={300}
                    className="header_logo"
                  />
                </Link>
              </Fade>

              <Fade triggerOnce={true} delay={40} direction="left">
                <p className="description">{t("footer.description")}</p>
              </Fade>

              <Link href="https://anpc.ro/ce-este-sal/" target="_blank">
                <Image
                  src="/Images/Footer/SOLUTIONAREA-ALTERATIVA-A-LITIGIILOR-200x503.png"
                  alt=""
                  height={40}
                  width={180}
                />
              </Link>
              <Link href="http://ec.europa.eu/consumers/odr" target="_blank">
                <Image
                  src="/Images/Footer/SOLUTIONAREA-ONLINE-A-LITIGIILOR-200x50.webp"
                  alt=""
                  height={40}
                  width={180}
                />
              </Link>
            </div>

            <Fade triggerOnce={true} delay={40} direction="down">
              <div className="footer_links">
                <h2 className="heading">{t("footer.quickLinks.heading")}</h2>
                <Link
                  href={`/${lang}/`}
                  className="link"
                  onClick={() => redirect("/")}
                  style={{ cursor: "pointer" }}
                >
                  {t("navbar.home")}
                </Link>
                <Link
                href={`/${lang}/about-us`}
                  className="link"
                  onClick={() => redirect("/about-us")}
                  style={{ cursor: "pointer" }}
                >
                  {t("navbar.aboutUs")}
                </Link>
                <Link
                href={`/${lang}/blogs`}
                  className="link"
                  onClick={() => redirect("/blogs")}
                  style={{ cursor: "pointer" }}
                >
                  {t("navbar.blogs")}
                </Link>
                <Link
                href={`/${lang}/custom-furniture`}
                  className="link"
                  onClick={() => redirect("/custom-furniture")}
                  style={{ cursor: "pointer" }}
                >
                  {t("navbar.customFurniture")}
                </Link>
              </div>
            </Fade>

            {/* <Fade triggerOnce={true} delay={40} direction="down">
              <div className="footer_links">
                <h2 className="heading">{t("footer.testimonials.heading")}</h2>
                <Link href="/support" className="link">
                  {t("footer.testimonials.support")}
                </Link>
                <Link href="/shop" className="link">
                  {t("footer.testimonials.shop")}
                </Link>
              </div>
            </Fade> */}

            <Fade triggerOnce={true} delay={40} direction="right">
              <Link  href={`/${lang}/contact-us`}
                onClick={() => redirect("/contact-us")}
                className="contact_btn"
                style={{ cursor: "pointer" }}
              >
                {t("FurnitureToOrder.contactBtn")}
              </Link>
            </Fade>

            <Fade triggerOnce={true} delay={40} direction="right">
              <div className="social_links">
                <div className="social_links_icons">
                <Link href="https://www.youtube.com/@AtelierHonis" className="social_link">
                    <Youtube style={{ width: "22px", fill: "#fff" }} />
                  </Link>
                  <Link  href="https://www.facebook.com/people/Atelier-Honis/61572846273422/"  target="_blank" className="social_link">
                    <Facebook />
                  </Link>
                  
                  <Link href="https://www.instagram.com/atelierhonis/" target="_blank" className="social_link">
                    <Instagram />
                  </Link>
                  <Link href="https://www.tiktok.com/@atelierhonis" target="_blank" className="social_link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffffff"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </Link>
                  {/* <Link href="#" className="social_link">
                    <Twitter />
                  </Link> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="copyright_container">
          <Fade triggerOnce={true} delay={40} direction="up">
            <div className="copyright">{t("footer.copyright")}</div>
          </Fade>
          <Fade triggerOnce={true} delay={40} direction="up">
            <div className="legal_actions">
              <Link
              href={`/${lang}/terms-and-condition`}
                onClick={() => redirect("/terms-and-condition")}
                style={{ cursor: "pointer" }}
              >
                {t("footer.legal.terms")}
              </Link>
              <Link
              href={`/${lang}/privacy-policy`}
                onClick={() => redirect("/privacy-policy")}
                style={{ cursor: "pointer" }}
              >
                {t("footer.legal.privacy")}
              </Link>
            </div>
          </Fade>
        </div>
      </ContainerMain>

      {/* WhatsApp & Tawk Chat Floating Buttons */}
      <div className="chat_container">
        {/* WhatsApp Chat */}
        <Link
          href="https://wa.me/+40766313595"
          target="_blank"
          rel="noopener noreferrer"
          className="chat_icon"
        >
          <Image
            src="/Images/Footer/whatsapp.svg"
            alt="WhatsApp"
            width={50}
            height={50}
          />
        </Link>

        {/* Tawk.to Chat */}
        <div
          className="tawk_button"
          onClick={() => {
            if ((window as any).Tawk_API!=undefined) {
              (window as any).Tawk_API.toggle();

            }
          }}
        >
          <Image
            src="/Images/Footer/TawkChat.svg"
            alt="Tawk Chat"
            width={50}
            height={50}
          />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
