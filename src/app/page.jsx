"use client";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
