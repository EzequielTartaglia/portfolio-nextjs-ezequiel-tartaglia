import { Inter } from "next/font/google";
import "./globals.css";
import NavBarWrapper from "@/components/navbars/NavBarWrapper";
import FooterWrapper from "@/components/footers/FooterWrapper";
import Metadata from "@/components/page_formats/Metadata";
import PageBody from "@/components/page_formats/PageBody";
import Credits from "@/components/footers/Credits";
import { AsideNavBarProvider } from "@/contexts/AsideContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Metadata />
      <body className="min-h-screen">
          <AsideNavBarProvider>
            <NavBarWrapper />
            <main
              className={`${inter.className} flex justify-center mt-0 mb-[70px]`}
              style={{ minHeight: "calc(100vh - 100px)" }}
            >
              <PageBody>{children}</PageBody>
            </main>
            <FooterWrapper />
            <Credits />
          </AsideNavBarProvider>
      </body>
    </html>
  );
}
