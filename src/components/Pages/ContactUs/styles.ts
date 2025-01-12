import { Form } from "antd";
import styled from "styled-components";

const ContactUsBannerWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding-top: 11rem;
  overflow: hidden;

  .image_banner {
    height: calc(100% + 35rem);
    width: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .heading {
      color: #fff;
      text-align: center;
      font-family: "Abhaya Libre";
      font-size: 3.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 121.429%;
      letter-spacing: 0.0125rem;
    }

    .description {
      color: #fff;
      text-align: center;
      font-family: Gilroy-Medium;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 172%;
      max-width: 37.21044rem;
    }
  }
`;

const ContactUsForm = styled(Form)`
  margin-top: 5rem;
  max-width: 60rem;
  width: 100%;
  padding: 4rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.03);

  .ant-form-item {
    .ant-form-item-label {
      label {
        color: #5a7184;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        &::before,
        &::after {
          content: unset !important;
        }
      }
    }

    input.ant-input {
      height: 3.5rem;
      border-radius: 0.5rem;
      border: 1px solid #c3cad9;
      background: #fff;
      padding: 1rem 1.25rem;

      color: #183b56;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      &::placeholder {
        color: #959ead;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }

    textarea.ant-input {
      border-radius: 0.5rem;
      border: 1px solid #c3cad9;
      background: #fff;
      padding: 1rem 1.25rem;

      color: #183b56;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      &::placeholder {
        color: #959ead;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }

  .submit_btn {
    margin-top: 2rem;
    border-radius: 2rem;
    background: #000000;
    box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.03);
    padding: 0.8rem 2.5rem;
    height: 3rem;

    color: #ffffff;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media screen and (max-width: 991px) {
    padding: 2.58rem 0.73rem;
  }
`;

const ContactDetail = styled.div`
  margin-top: 3.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    color: #000;
    text-align: center;
    font-family: "Abhaya Libre";
    font-size: 2.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 147.826%;
    letter-spacing: 0.0125rem;
  }

  .desc {
    color: #1e1e1e;
    text-align: center;
    font-family: "Gilroy-Medium";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 185%;
    max-width: 30.1875rem;
  }

  .contact_items {
    margin: 2.7rem;
    max-width: 71rem;
    width: 100%;

    display: flex;
    /* gap: 1.8rem; */
    flex-wrap: wrap;
    .contact_item {
      flex: 1;
      max-width: 26rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      &:not(:last-child) {
        border-right: 1px solid rgba(0, 0, 0, 0.11);
      }

      .title {
        color: #000;
        text-align: center;
        font-family: "Abhaya Libre";
        font-size: 2.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 0.0125rem;
      }

      .description {
        color: #5a7184;
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 175%;
      }

      .link {
        color: #1565d8;
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 170%;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .contact_items {
      flex-direction: column;
      align-items: center;
      .contact_item {
        border-right: none !important;
        padding: 2rem 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.11);
      }
    }
  }
`;

export { ContactUsBannerWrapper, ContactUsForm, ContactDetail };
