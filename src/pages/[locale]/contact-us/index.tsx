// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";

const DefaultLayout = dynamic(
  () => import("@/components/Layouts/DefaultLayout"),
  { ssr: false }
);

const ContactUsBanner = dynamic(() => import("@/components/Pages/ContactUs/Banner"), {
  ssr: false,
});

const ContactUsPage: React.FC = () => {
  return (
    <DefaultLayout>
     <ContactUsBanner/>
    </DefaultLayout>
  );
};
export default ContactUsPage;
