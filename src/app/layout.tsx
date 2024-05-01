import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import StyledMain from "@/components/StyledMain";

const font = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "누군가의 꿈",
  description: "후원해주세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <StyledMain>{children}</StyledMain>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
