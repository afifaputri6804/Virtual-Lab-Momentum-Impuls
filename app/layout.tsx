import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {

  title: "MOMENTRACK",

  description:
    "Virtual Laboratory Momentum dan Impuls",

};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="id">


      <body className="min-h-screen flex flex-col overflow-x-hidden">


        <Navbar />



        <main className="flex-1 w-full">

          {children}

        </main>



        <Footer />


      </body>


    </html>

  );


}