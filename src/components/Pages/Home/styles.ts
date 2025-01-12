import { Form } from "antd";
import Image from "next/image";
import styled from "styled-components";

const HeroSectionContainer = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  min-height: 100vh;

  * {
    transition-delay: 1s;
  }

  .hero_section_content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 7rem 0.75rem;

    .inner_content_wrapper {
      max-width: 52rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.25rem;

      .heading {
        color: #fff;
        text-align: center;
        font-family: "Abhaya Libre";
        font-size: 5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 117%;
        letter-spacing: -0.05rem;
      }

      .paragraph {
        color: #fff;
        text-align: center;
        font-family: Gilroy-Medium;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .hero_section_content {
      .inner_content_wrapper {
        .heading {
          font-size: 3rem;
        }

        .paragraph {
          font-size: 1.125rem;
        }
      }
    }
  }
`;

const BackgroundImage = styled(Image)`
  height: calc(100% + 4px);
  width: calc(100% + 4px);
  margin-top: -2px;
  margin-left: -2px;
  object-fit: cover;
  object-position: top center;
  z-index: 0;

  @media screen and (max-width: 991px) {
    min-height: calc(100vh + 2px);
  }
`;

const StylesSearchForm = styled(Form)`
  position: relative;
  z-index: 1;
  .ant-form-item {
    margin: 0;

    .ant-input {
      display: flex;
      width: 21.5rem;
      height: 3.5rem;
      padding: 0.5rem 3.5rem 0.5rem 1.25rem;

      justify-content: space-between;
      align-items: center;

      border-radius: 2.625rem;
      border: 0.862px solid rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.15) !important;
      backdrop-filter: blur(4px);

      color: #ffffff;
      font-family: "Gilroy-Medium";
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 195.5%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.65);
        font-family: "Abhaya Libre";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        line-height: 195.5%;
      }
    }
  }

  .ant-btn-primary {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 1.5rem;
    background: #ff6f00;
    padding: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #d25b00 !important;
    }
  }
`;

const HeroSectionWhiteGradient = styled.div`
  margin-top: -7rem;
  position: relative;
  z-index: 3;
  overflow: hidden;
  padding: 3rem 0;
  .inner_gradient {
    width: calc(100% + 16rem);
    height: 8.31719rem;
    margin-left: -8rem;
    flex-shrink: 0;
    background: #f2f8ff;
    filter: blur(19.899999618530273px);
  }
`;

export {
  HeroSectionContainer,
  BackgroundImage,
  StylesSearchForm,
  HeroSectionWhiteGradient,
};
