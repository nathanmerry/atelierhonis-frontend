import styled from "styled-components";
import { BackgroundImage, HeroSectionContainer } from "../Home/styles";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";

const AboutHeroWrapper = styled(HeroSectionContainer)`
  @media screen and (max-width: 991px) {
    ${BackgroundImage} {
      min-height: calc(150vh + 2px);
    }
  }

  .nav_link {
    display: flex;
    width: 9.9375rem;
    height: 3rem;
    padding: 0.54338rem 1.18563rem 0.64219rem 1.18563rem;
    justify-content: center;
    align-items: center;
    gap: 0.39519rem;

    border-radius: 4.3125rem;
    background: #fff;

    color: #000;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.02rem;
  }
`;

const MadeToPerfectionContainer = styled.div`
  background-color: aliceblue;
  background-image: url("/Images/About/AboutBgBanner.png");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  ${ContainerMain} {
    padding: 13rem 0.75rem;
  }

  .inner_container {
    margin-left: auto;
    border-radius: 0.9375rem;
    border: 1px solid #fff;
    background: rgba(58, 58, 58, 0.18);
    backdrop-filter: blur(11.199999809265137px);
    max-width: 42.30525rem;
    height: fit-content;
    flex-shrink: 0;

    padding: 4rem 3rem;

    .heading {
      color: #ffffff;
      font-family: Gilroy-Medium;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
      max-width: 70rem;
    }

    .description {
      color: #fff;
      font-family: Gilroy-Medium;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 172%;
    }
  }

  @media screen and (max-width: 991px) {
    ${ContainerMain} {
      padding: 8rem 0.75rem;
    }

    .inner_container {
      padding: 6.2rem 1rem;

      .heading {
        font-size: 1.5rem;
      }

      .description {
        font-size: 1rem;
      }
    }
  }
`;

const AboutAtelierHonisContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem 0;
  align-items: center;
  .about_honis_banner {
    max-height: 32.43744rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .content {
    padding-left: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .sub_heading {
      color: #e58411;
      font-family: Gilroy-Medium;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.175rem;
      text-transform: uppercase;
    }

    .heading {
      color: #1e1e1e;
      font-family: "Abhaya Libre";
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 121.667%;

      span {
        color: #ff6f00;
        font-family: "Abhaya Libre";
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 121.667%;
      }
    }

    .description {
      color: #1e1e1e;
      font-family: Gilroy-Medium;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 185%;
    }
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    gap: 2.6rem;

    .content {
      padding-left: 0;
    }
  }

  @media screen and (max-width: 425px) {
    .content {
      .heading {
        font-size: 2.625rem;
        span {
          font-size: 2.625rem;
        }
      }
    }
  }
`;

const PrecisionCNCContainer = styled.div`
  padding-top: 12rem;
  padding-bottom: 10rem;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    padding-top: 5rem;
  }
  .content_grid {
    display: grid;
    grid-template-columns: 1fr 1.55fr;
    gap: 1.87rem;

    .heading {
      color: #191d1f;
      font-family: "Abhaya Libre";
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 111.667%;

      span {
        color: #ff6f00;
        font-family: "Abhaya Libre";
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4.1875rem;
      }
    }

    .content {
      position: relative;
      z-index: 1;
      padding-left: 4.45rem;
      padding-right: 3.65rem;
      padding-bottom: 8rem;
      max-width: 37.6875rem;
      color: #ffffff;
      font-family: Gilroy-Medium;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;

      &::before {
        content: "";
        border-radius: 0.75rem;
        background: linear-gradient(132deg, #343d42 15.44%, #191d1f 87.51%);
        width: 100%;
        height: 44rem;
        position: absolute;
        left: 0;
        top: -3.6rem;
        z-index: -1;
      }
    }

    @media screen and (max-width: 425px) {
      .heading {
        max-width: 21.39844rem;
        font-size: 2.5625rem;
        line-height: 100%;
        span {
          font-size: 2.5625rem;
          line-height: 100%;
        }
      }

      .content {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 991px) {
      grid-template-columns: 100%;

      .content {
        border-radius: 0.75rem;
        background: linear-gradient(132deg, #343d42 15.44%, #191d1f 87.51%);
        padding: 3.3rem 2.21rem;
        padding-bottom: 6rem;
        &::before {
          content: unset;
        }
      }
    }
  }

  .grid_images_wrapper {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 0.45fr 1fr 0.45fr;
    gap: 2.8rem;
    align-items: center;

    .PrecisionImage1 {
      transform: translateY(-4rem);
    }

    .PrecisionImage1,
    .PrecisionImage2,
    .PrecisionImage3 {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .main_image_wrapper {
      position: relative;

      .sticker {
        position: absolute;
        top: -3rem;
        right: -5rem;
        height: 12rem;
        width: 12rem;
      }
    }

    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      padding-top: 2rem;
      .PrecisionImage1 {
        width: 11.54319rem;
        flex-shrink: 0;
        transform: translate(0);
      }

      .main_image_wrapper {
        width: fit-content;
        position: absolute;
        top: -3rem;
        right: 0;

        .sticker {
          position: absolute;
          top: -2rem;
          left: -4rem;
          height: 7rem;
          width: 7rem;
          object-fit: contain;
        }
      }

      .PrecisionImage2 {
        width: 16.125rem;
        height: 18.25rem;
        object-fit: cover;
        border-radius: 0.4565rem;
        flex-shrink: 0;
      }

      .PrecisionImage3 {
        width: 16.8125rem;
        height: 14.625rem;
        flex-shrink: 0;
      }
    }

    @media screen and (max-width: 425px) {
      padding-top: 5.5rem;

      .PrecisionImage1 {
        width: 4.54319rem;
        height: 8.6875rem;
        object-fit: cover;
        border-radius: 0.42963rem;
      }
    }
  }
`;

const FurnitureToOrderDetailContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 9rem;
  .inner_container {
    display: flex;
    align-items: center;
    gap: 6rem;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .heading {
        color: #1e1e1e;
        font-family: "Abhaya Libre";
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 108.333%;
        margin-bottom: 1rem;
      }

      .sub_heading {
        color: #1e1e1e;
        font-family: Gilroy-Medium;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 134%;
      }

      .list_items {
        padding-left: 1.25rem;
        li {
          color: #1e1e1e;
          font-family: Gilroy-Medium;
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 400;
          line-height: 161%;
        }
      }

      .extra {
        color: #1e1e1e;
        font-family: Gilroy-Medium;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 161%;
      }

      .load_more_link {
        margin-top: 1rem;
        height: 3rem;
        width: fit-content;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0.54338rem 1.18563rem 0.64219rem 1.18563rem;
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
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }

  @media screen and (max-width: 991px) {
    gap: 3.3rem;
    .inner_container {
      flex-direction: column-reverse !important;

      .image_wrapper {
        &::before {
          left: -2.25rem;
          top: -1.25rem;
          border-radius: 0.70888rem;
        }

        &::after {
          right: -1.8rem;
          border-radius: 0.70888rem;
        }
      }

      .content {
        .heading {
          font-size: 2.625rem;
        }

        .sub_heading {
          font-size: 0.875rem;
        }

        .list_items {
          li {
            font-size: 0.875rem;
          }
        }

        .extra {
          font-size: 0.875rem;
        }
      }
    }
  }
`;

const FurnitureToOrderContainer = styled.div`
  padding: 4.70175rem 0;
  background: #ebf3ff;

  .inner_container {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 4rem;

    .main_banner {
      height: 32.77856rem;
      width: 100%;
      object-fit: cover;
      border-radius: 0.75rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .heading {
        color: #000;
        font-family: "Abhaya Libre";
        font-size: 3.4375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;

        span {
          color: #ff6f00;
          font-family: "Abhaya Libre";
          font-size: 3.4375rem;
          font-style: normal;
          font-weight: 700;
          line-height: 120%;
        }
      }

      .list_items {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .list_item {
          display: grid;
          grid-template-columns: 4.77763rem 1fr;
          gap: 1.74rem;

          .icon {
            width: 4.77763rem;
            height: 4.77763rem;
            object-fit: contain;
          }

          .inner_content {
            .inner_heading {
              color: #ff6f00;
              font-family: Gilroy-Medium;
              font-size: 1.375rem;
              font-style: normal;
              font-weight: 700;
              line-height: 159.091%;
            }

            .inner_paragraph {
              color: #1e1e1e;
              font-family: Gilroy-Medium;
              font-size: 1rem;
              font-style: normal;
              font-weight: 400;
              line-height: 161%;
            }
          }
        }
      }

      .contact_btn {
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
    }

    @media screen and (max-width: 991px) {
      grid-template-columns: 100%;

      .content {
        .heading {
          font-size: 2.5rem;
          span {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
`;

export {
  AboutHeroWrapper,
  MadeToPerfectionContainer,
  AboutAtelierHonisContainer,
  PrecisionCNCContainer,
  FurnitureToOrderDetailContainer,
  FurnitureToOrderContainer,
};
