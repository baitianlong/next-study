import "./globals.css";
import { Comforter } from 'next/font/google'
 
const geist = Comforter({
  subsets: ['latin'],
  weight:'400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
