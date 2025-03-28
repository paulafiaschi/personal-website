import { Geist, Geist_Mono } from "next/font/google";
import { Gloria_Hallelujah } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pau Fiaschi",
  description:
    "Welcome to my website, where I share tips and tools for entrepreneurs to help them boost their digital presence",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="cupcake"
      className="scroll-smooth
"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gloriaHallelujah.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

        <script
          type="text/javascript"
          async
          src="https://embeds.beehiiv.com/attribution.js"
        ></script>
      </body>
    </html>
  );
}
