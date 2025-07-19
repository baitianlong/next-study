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
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <AntdRegistry>
          <div className="container mx-auto">
            <div className="flex justify-center text-blue-500 gap-6">
              <Link href="/">Home</Link>
              <Link href="/visitors">Visitors</Link>
            </div>
            <div className="flex gap-6">
              {team}    
              {analytics}
            </div>
            {children}
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
