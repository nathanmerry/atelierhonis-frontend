import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../Loader";

const HeaderResponsiveConfig = dynamic(
  () => import("./Header/HeaderResponsiveConfig"),
  {
    ssr: false,
  }
);

const Footer = dynamic(() => import("./Footer/Footer"), {
  ssr: false,
});

const CookiesBanner = dynamic(() => import("../CookieBanner"), {
  ssr: false,
});

export type DefaultLayoutPropTypes = { children: ReactNode };

const DefaultLayout: React.FC<DefaultLayoutPropTypes> = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <HeaderResponsiveConfig />
      {children}
      <Footer />
      <CookiesBanner />
    </Suspense>
  );
};

export default DefaultLayout;
