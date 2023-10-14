import { MantineProvider, createTheme } from "@mantine/core";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}
