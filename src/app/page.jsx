"use client";
import React, { useEffect } from 'react'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";
const TRACKING_ID = "G-0KZ9ZNH0HC"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export default function Home() {
  useEffect(() => {
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
