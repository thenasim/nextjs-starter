import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { FC } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  Layout?: FC;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || Noop;

  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={false}
      attribute="class"
      disableTransitionOnChange
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
