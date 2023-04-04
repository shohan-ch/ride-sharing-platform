import Layout from "@/components/Layout/Layout";
import LayoutOnlyHeader from "@/components/Layout/LayoutOnlyHeader";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import { ThemeProvider } from "next-themes";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
export default function App({ Component, pageProps, router }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#893e3e",
      },
    },
  });
  let isAuthPage =
    router.pathname.startsWith("/[auth]") ||
    router.pathname.endsWith("/reserve");

  const getLayout = (page) => {
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider attribute="class">
          {isAuthPage ? (
            <LayoutOnlyHeader>{page}</LayoutOnlyHeader>
          ) : (
            <Layout>{page}</Layout>
          )}
        </ThemeProvider>
      </MuiThemeProvider>
    );
  };

  return getLayout(<Component {...pageProps} />);
}
