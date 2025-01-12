"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import Header from "./Header";

// const Header = dynamic(() => import("./Header"), {
//   ssr: false,
// });

// const HeaderMobile = dynamic(() => import("./HeaderMobile"), {
//   ssr: false,
// });

export type HeaderResponsiveConfigPropTypes = {};

const HeaderResponsiveConfig: React.FC<
  HeaderResponsiveConfigPropTypes
> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize(); // Check the initial size

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <HeaderMobile /> : <Header />}</>;
};

export default HeaderResponsiveConfig;
