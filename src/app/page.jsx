"use client";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";
const TRACKING_ID = "G-GCJPPC7XPK"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);
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
