import "../styles/globals.css";
import "../styles/animation.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
