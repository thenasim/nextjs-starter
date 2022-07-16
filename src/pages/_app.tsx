import React from "react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "$/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={false}
      attribute="class"
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
