import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Rifky Niyas",
  description: "Personal Website of Rifky Niyas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.className} bg-dark  text-white h-full min-h-screen `}
      >
        <Navbar />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
