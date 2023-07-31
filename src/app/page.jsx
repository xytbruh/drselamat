"use client";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-GCJPPC7XPK");
    // Track pageview when the component is loaded
    ReactGA.pageview(window.location.pathname + window.location.search);
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
