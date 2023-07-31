"use client";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-YSJMKB2MTT");
    ReactGA.pageview(window.location.pathname);
  }, []);

  const handleClick = () => {
    ReactGA.event({
      category: "Navbar",
      action: "Click",
      label: "My Nav Click",
    });
  };
  return (
    <>
      <Analytics />
      <Header handleClick={handleClick} />
      <Main />
      <Footer />
    </>
  );
}
