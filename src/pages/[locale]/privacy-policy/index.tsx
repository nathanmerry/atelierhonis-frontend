import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { fetchPrivacyPolicy } from "@/lib/api";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerMain } from "../../../../public/Styles/Layout/styles";
import { Fade } from "react-awesome-reveal";
import { BlogDetailContainer } from "@/components/Pages/Blogs/styles";
import { i18nConfig } from "../../../../i18n";
import { languageDetector } from "@/lib/languageDetector";
import { useI18n } from "@/hooks/useI18n";
import SeoHead from "@/components/Layouts/SeoHead";
import { useSearchParams } from "next/navigation";

export const PrivacyPolicyWrapper = styled.div`
  padding: 5rem 0;
`;

export const PolicyWrapper = styled.div`
  height: 24rem;
  padding: 6rem 0.75rem;
  background-image: url("/Images/ContactUs/BackgroundBannerSlim.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-family: "Abhaya Libre";
  font-size: clamp(1.75rem, 4vw, 4.375rem);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.0875rem;
  text-align: center;
`;

const PrivacyPolicyPage: NextPage = () => {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [privacyPolicy, setPrivacyPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const detectedLng = languageDetector.detect();

  useEffect(() => {
    const languageMap: { [key: string]: string } = {
      ro: "rom",
      en: "en",
    };

    const detectedLand = languageMap[detectedLng ?? "en"] || "en";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchPrivacyPolicy(detectedLand);
        console.log("privacyPolicy:", response);

        // Find the matching policy for the detected language
        const policyContent = response.find(
          (policy: any) =>
            policy.lang.toLowerCase() === detectedLand.toLowerCase()
        )?.value;

        if (policyContent) {
          setPrivacyPolicy(policyContent);
        } else {
          const fallbackPolicyContent = response.find(
            (policy: any) => policy.lang === "en"
          )?.value;
          setPrivacyPolicy(fallbackPolicyContent);
        }
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [detectedLng, searchParams]);

  // Dynamic SEO Meta Tags based on the locale
  const title =
    detectedLng === "ro"
      ? "Politica de Confidențialitate - ATELIER HONIS"
      : "Privacy Policy - ATELIER HONIS";

  const description =
    detectedLng === "ro"
      ? "Citiți Politica de Confidențialitate pentru a înțelege cum ATELIER HONIS colectează, utilizează și protejează informațiile dumneavoastră personale."
      : "Read our Privacy Policy to understand how ATELIER HONIS collects, uses, and protects your personal information. Your privacy is our priority.";

  const keywords =
    detectedLng === "ro"
      ? "politica de confidențialitate, protecția datelor, informații personale, ATELIER HONIS"
      : "privacy policy, data protection, personal information, ATELIER HONIS";

  return (
    <DefaultLayout>
      <SeoHead
        title={title}
        description={description}
        keywords={keywords}
        ogImage="/Images/custom-furniture.jpg"
        twitterImage="/Images/custom-furniture.jpg"
      />

      <PolicyWrapper>
        <Fade direction="up">
          <h2 className="heading" data-aos="fade-bottom">
            {t("footer.legal.privacy")}
          </h2>
        </Fade>
      </PolicyWrapper>
      <BlogDetailContainer>
        <PrivacyPolicyWrapper>
          {privacyPolicy && (
            <div
              dangerouslySetInnerHTML={{
                __html: privacyPolicy,
              }}
            />
          )}
        </PrivacyPolicyWrapper>
      </BlogDetailContainer>
    </DefaultLayout>
  );
};

export default PrivacyPolicyPage;
