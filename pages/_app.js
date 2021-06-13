import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      enableSystem={false}
      enableColorScheme={false}
      attribute="class"
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
