"use client";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import styled from "styled-components";
import { languageDetector } from "@/lib/languageDetector";

const CookieBannerModal = styled(Modal)`
  bottom: 0;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: end;
  .ant-modal-title {
    color: #1e1e1e;
    font-family: Gilroy-Medium;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 161%;
  }

  .cookie_content {
    color: #1e1e1e;
    font-family: Gilroy-Medium;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 141%;
    .link {
      color: #000;
      font-family: Gilroy-Medium;
      font-size: 1.125rem;
      font-weight: 500;
      text-decoration: underline;
    }
  }

  .reject_btn {
    display: inline-flex;
    height: 3rem;
    padding: 1rem 3.4375rem;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-radius: 0.25rem;
    border: 1px solid #000;

    color: #000;
    font-family: Gilroy-Medium;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .accept_btn {
    display: inline-flex;
    height: 3rem;
    padding: 1rem 3.4375rem;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-radius: 0.25rem;
    background: #ff6f00;

    color: #fff;
    font-family: Gilroy-Medium;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const CookiesBanner = () => {
  const detectedLng = languageDetector.detect();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const userConsent = localStorage.getItem("cookiesConsent");
      if (userConsent !== "accepted" && userConsent !== "rejected") {
        setIsModalVisible(true);
      }
    }, 1000); // Delay by 500ms to confirm the local state and avoid glitches

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    setIsModalVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesConsent", "rejected");
    setIsModalVisible(false);
  };

  return (
    <CookieBannerModal
      width={1000}
      title="Cookie Policy"
      open={isModalVisible}
      onCancel={handleReject}
      footer={[
        <Button key="reject" onClick={handleReject} className="reject_btn">
          Reject
        </Button>,
        <Button
          key="accept"
          type="primary"
          onClick={handleAccept}
          className="accept_btn"
        >
          Accept
        </Button>,
      ]}
      closable={false}
    >
      <p className="cookie_content">
        By using this site, you agree to our{" "}
        <span className="link">Privacy Policy</span> and{" "}
        <span className="link">Terms and Conditions</span>. Please make sure to
        read both documents carefully to understand how we collect and process
        your data, as well as the terms of service for using our platform.
      </p>
    </CookieBannerModal>
  );
};

export default CookiesBanner;
