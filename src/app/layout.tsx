import Nav from "@/components/Nav/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mock Market",
  description: "An E-commerce system assisted by FakeStore API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <main className="main_container max-w-screen-xxxl m-auto pl-5 pr-5">
          <Nav />
          {children}
          <section>
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
