import "./globals.css";
import { ABeeZee } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Link from "next/link";
const geist = ABeeZee({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </body>
    </html>
  );
}
