import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { fetchTermsAndConditions } from "@/lib/api";
import { languageDetector } from "@/lib/languageDetector";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PolicyWrapper, PrivacyPolicyWrapper } from "../privacy-policy";
import { Fade } from "react-awesome-reveal";
import { BlogDetailContainer } from "@/components/Pages/Blogs/styles";
import { useI18n } from "@/hooks/useI18n";
import SeoHead from "@/components/Layouts/SeoHead";
import { useSearchParams } from "next/navigation";

const PrivacyPolicyPage: NextPage = () => {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [termsAndConditions, setTermsAndConditions] = useState(null);
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
        const response = await fetchTermsAndConditions(detectedLand);
        console.log("Terms And Conditions:", response);

        // Find the matching policy for the detected language
        const policyContent = response.find(
          (policy: any) =>
            policy.lang.toLowerCase() === detectedLand.toLowerCase()
        )?.value;

        if (policyContent) {
          setTermsAndConditions(policyContent);
        } else {
          const fallbackPolicyContent = response.find(
            (policy: any) => policy.lang === "en"
          )?.value;
          setTermsAndConditions(fallbackPolicyContent);
        }
      } catch (err) {
        console.error("Error fetching Terms And Conditions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [detectedLng, searchParams]);

  const title =
    detectedLng === "ro"
      ? "Termeni și Condiții - ATELIER HONIS"
      : "Terms and Conditions - ATELIER HONIS";

  const description =
    detectedLng === "ro"
      ? "Citiți Termenii și Condițiile pentru a înțelege cum ATELIER HONIS reglează utilizarea serviciilor noastre."
      : "Read our Terms and Conditions to understand how ATELIER HONIS governs the use of our services.";

  const keywords =
    detectedLng === "ro"
      ? "termeni și condiții, utilizarea serviciilor, ATELIER HONIS"
      : "terms and conditions, service usage, ATELIER HONIS";

  return (
    <DefaultLayout>
      <SeoHead
        metaTitle={title}
        description={description}
        keywords={keywords}
        ogTitle={title}
        ogDescription={description}
        ogImage="/Images/custom-furniture.jpg"
        twitterCard="summary_large_image"
        twitterImage="/Images/custom-furniture.jpg"
        robots="index, follow"
      />

      <PolicyWrapper>
        <Fade direction="up">
          <h2 className="heading" data-aos="fade-bottom">
            {t("footer.legal.terms")}
          </h2>
        </Fade>
      </PolicyWrapper>
      <BlogDetailContainer>
        <PrivacyPolicyWrapper>
          {termsAndConditions && (
            <div
              dangerouslySetInnerHTML={{
                __html: termsAndConditions,
              }}
            />
          )}
        </PrivacyPolicyWrapper>
      </BlogDetailContainer>
    </DefaultLayout>
  );
};

export default PrivacyPolicyPage;
