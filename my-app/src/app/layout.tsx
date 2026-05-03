import "./globals.css";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >

      <body className="min-h-full flex flex-col  gap-[115px]">
      <main className="flex max-w-[1440px] w-full flex-col mx-auto gap-[115px]">
        <Navbar/>
        <div>
          {children}
        </div>
        <Footer/>
      </main>
      </body>
    </html>
  );
}
