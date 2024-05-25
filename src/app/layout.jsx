import Navbar from "@/components/Navbar"
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Dinimelist",
  description: "Web Aime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-color-dark `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
