"use client";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("UA-281864708-1"); // Ganti dengan kode pelacakan Anda
    ReactGA.pageview(window.location.pathname);
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
