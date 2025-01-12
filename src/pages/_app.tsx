import Loader from "@/components/Loader";
import { RootProvider } from "@/Providers/RootProvider";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [windowLoad, setWindowLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWindowLoad(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <RootProvider>
      {loading && <Loader />}
      {windowLoad && <Loader />}
      <Component {...pageProps} />
    </RootProvider>
  );
};

export default App;
