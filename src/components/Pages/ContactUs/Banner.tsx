import Image from "next/image";
import styled from "styled-components";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
  Spin,
  notification,
  Checkbox,
} from "antd";
import Link from "next/link";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { ContactUsBannerWrapper, ContactUsForm, ContactDetail } from "./styles";
import { useI18n } from "@/hooks/useI18n";
import SeoHead from "@/components/Layouts/SeoHead";
import { Fade } from "react-awesome-reveal";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouteRedirect } from "@/hooks/useRouteRedirect";

const ContactUsBanner: React.FC = () => {
  const { t,lang } = useI18n();
  const [contactForm] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { redirect } = useRouteRedirect();


  const handleSubmit = async (values: any) => {
    console.log("Form Values:", values);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/contact-us`; // Ensure this URL is correct

    try {
      setIsLoading(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language":lang
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          contact_info: values.contact_info,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Submission successful:", result);

      notification.success({
        message: t("contactUs.successMsg"),
        description: t("contactUs.successDesc"),
        placement: "topRight",
        duration: 5,
      });

      contactForm.resetFields(); // Reset the form after successful submission
    } catch (error) {
      console.error("Submission failed:", error);
      message.error("Contact Form Submission Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Contactaţi-ne - ATELIER HONIS"
        description="Contactați ATELIER HONIS pentru a discuta despre proiectele de mobilier la comandă. Ne puteți trimite un mesaj sau ne puteți vizita la atelierul nostru pentru consultații personalizate."
        keywords="contact, mobilier personalizat, proiecte de mobilă, ATELIER HONIS"
        ogImage="/Images/CustomFurniture/Furniture7.png"
        twitterImage="/Images/CustomFurniture/Furniture7.png"
      />

      <ContactUsBannerWrapper>
        <Image
          src="/Images/ContactUs/BackgroundBanner.png"
          alt={t("contactUs.bannerAlt")}
          height={620}
          width={1440}
          className="image_banner"
        />

        <div className="content">
          <Fade triggerOnce={true} delay={40}   direction="up">
            <h2 className="heading" data-aos="fade-bottom">
              {t("contactUs.heading")}
            </h2>
          </Fade>

          <Fade triggerOnce={true} delay={40}   direction="up">
            <p className="description" data-aos="fade-bottom">
              {t("contactUs.description")}
            </p>
          </Fade>

          <ContactUsForm
            form={contactForm}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={true}
            initialValues={{ remember: true }}
          >
            <Fade triggerOnce={true} delay={40}   direction="up">
              <Row gutter={[30, 30]}>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label={t("contactUs.nameLabel")}
                    name="name"
                    rules={[
                      { required: true, message: t("contactUs.nameError") },
                    ]}
                  >
                    <Input placeholder={t("contactUs.namePlaceholder")} />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label={t("contactUs.emailLabel")}
                    name="email"
                    rules={[
                      { required: true, message: t("contactUs.emailError") },
                      {
                        type: "email",
                        message: t("contactUs.invalidEmailError"),
                      },
                    ]}
                  >
                    <Input placeholder={t("contactUs.emailPlaceholder")} />
                  </Form.Item>
                </Col>
              </Row>
            </Fade>

            <Fade triggerOnce={true} delay={40}   direction="up">
              <Form.Item
                label={t("contactUs.phoneLabel")}
                name="contact_info"
                rules={[{ required: false }]}
              >
                <Input placeholder={t("contactUs.phonePlaceholder")} />
              </Form.Item>
            </Fade>

            <Fade triggerOnce={true} delay={40}   direction="up">
              <Form.Item
                label={t("contactUs.messageLabel")}
                name="message"
                rules={[
                  { required: true, message: t("contactUs.messageError") },
                ]}
              >
                <Input.TextArea
                  placeholder={t("contactUs.messagePlaceholder")}
                  rows={5}
                />
              </Form.Item>
            </Fade>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
            >
              <Checkbox>
                {t("contactUs.agree1")}{" "}
                <span onClick={() => redirect("/privacy-policy")} style={{color:'blue'}}>
                  {t("contactUs.agree2")}
                </span>{" "}
                <span onClick={() => redirect("/terms-and-condition")} style={{color:'blue'}}>
                  {t("contactUs.agree3")}
                </span>{" "}
                {t("contactUs.agree4")}
              </Checkbox>
            </Form.Item>

            <Fade triggerOnce={true} delay={40}   direction="up">
              <Button type="primary" htmlType="submit" className="submit_btn">
                {t("contactUs.submitButton")}{" "}
                {isLoading && (
                  <Spin
                    indicator={
                      <LoadingOutlined spin style={{ color: "white" }} />
                    }
                    size="default"
                  />
                )}
              </Button>
            </Fade>
          </ContactUsForm>
        </div>
      </ContactUsBannerWrapper>

      <ContainerMain>
        <ContactDetail>
          <Fade triggerOnce={true} delay={40}   direction="up">
            <h2 className="heading">{t("contactUs.contactDetails")}</h2>
          </Fade>

          <Fade triggerOnce={true} delay={40}   direction="up">
            <div className="desc">{t("contactUs.address")}</div>
          </Fade>

          <Fade triggerOnce={true} delay={40}   direction="up">
            <div className="contact_items">
              <div className="contact_item">
                <Image
                  src="/Images/ContactUs/EmailIcon.svg"
                  alt={t("contactUs.emailIconAlt")}
                  height={64}
                  width={64}
                />
                <h2 className="title">{t("contactUs.emailTitle")}</h2>
                <p className="description">{t("contactUs.emailDescription")}</p>
                <Link href="mailto:contact@atelierhonis.ro" className="link">
                  contact@atelierhonis.ro
                </Link>
              </div>
              <div className="contact_item">
                <Image
                  src="/Images/ContactUs/PhoneIcon.svg"
                  alt={t("contactUs.phoneIconAlt")}
                  height={64}
                  width={64}
                />
                <h2 className="title">{t("contactUs.phoneTitle")}</h2>
                <p className="description">{t("contactUs.phoneDescription")}</p>
                <Link href="tel:+40766313595" className="link">
                  +40 766 313 595
                </Link>
              </div>
              <div className="contact_item">
                <Image
                  src="/Images/ContactUs/UserIcon.svg"
                  alt={t("contactUs.supportIconAlt")}
                  height={64}
                  width={64}
                />
                <h2 className="title">{t("contactUs.supportTitle")}</h2>
                <p className="description">
                  {t("contactUs.supportDescription")}
                </p>
                <Link href="#" className="link">
                  {t("contactUs.supportLink")}
                </Link>
              </div>
            </div>
          </Fade>
        </ContactDetail>
      </ContainerMain>
    </>
  );
};

export default ContactUsBanner;
