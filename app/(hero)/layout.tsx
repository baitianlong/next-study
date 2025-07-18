import Header from "@/components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute w-full z-10">
        <Header />
      </div>
      {children}
    </>
  );
}
