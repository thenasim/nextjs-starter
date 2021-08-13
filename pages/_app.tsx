import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: any) {
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
