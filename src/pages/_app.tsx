import type { AppProps } from "next/app";
import "../globals.css"; // Assuming globals.css is in the root
import Header from "@/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Component {...pageProps} /> {/* Renders the current page */}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}