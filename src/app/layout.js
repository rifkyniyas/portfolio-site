import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Rifky Niyas",
  description: "Personal Website of Rifky Niyas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body
        className={`${poppins.className} bg-dark  text-white h-full min-h-screen `}
      >
        <Navbar />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
