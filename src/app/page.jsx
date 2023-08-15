"use client";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-V73V285NH9";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-V73V285NH9");
    };
  }, []);
  return (
    <>
      <Analytics />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
