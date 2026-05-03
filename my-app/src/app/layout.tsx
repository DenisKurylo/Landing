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

      <body className="min-h-full flex flex-col items-center gap-[115px]">
      <div className="max-w-[1440px] flex flex-col gap-[115px]">
        <Navbar/>
        <div>
          {children}
        </div>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
