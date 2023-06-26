import Layout from "@/components/Layout/Layout";
import LayoutOnlyHeader from "@/components/Layout/LayoutOnlyHeader";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps, router }) {
  let isAuthPage =
    router.pathname.startsWith("/[auth]") ||
    router.pathname.endsWith("/reserve") ||
    router.pathname.endsWith("/wallet/business_profile");

  const getLayout = (page) => {
    return (
      <ThemeProvider attribute="class">
        {isAuthPage ? (
          <LayoutOnlyHeader>{page}</LayoutOnlyHeader>
        ) : (
          <Layout>{page}</Layout>
        )}
      </ThemeProvider>
    );
  };

  return getLayout(<Component {...pageProps} />);
}
