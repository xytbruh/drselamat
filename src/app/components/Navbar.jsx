import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaMap,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
export default function Header() {
  const gaEventTracker = useAnalyticsEventTracker("Home");

  return (
    <>
      <header className="d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <ul>
                <li>
                  <FaPhone />
                </li>
                <li>Tel: +6285273731313</li>
                <li>|</li>
                <li>
                  <FaMap />
                </li>
                <li>Jl. Amir Hamzah</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>
                  <Link href="https://www.facebook.com/people/Selamat/100051027789122/?mibextid=ZbWKwL">
                    <FaFacebook  />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/selamatsurip/?igshid=MzRlODBiNWFlZA%3D%3D">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@drselamat.com?_t=8cTHVA13pgO&_r=1">
                    <FaTiktok />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Navbar expand="lg" className="navbar px-5 navbar-light sticky-top">
        <Image
          width="40"
          height="40"
          src="/logo.png"
          className="img-fluid"
          alt="logo"
        />
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="navbar-nav m-auto">
            <Nav.Link href="#home" onClick={()=>gaEventTracker('Home')}>Home</Nav.Link>
            <Nav.Link href="#profil" onClick={()=>gaEventTracker('Profil')}>Profil</Nav.Link>
            <Nav.Link href="#kontak" onClick={()=>gaEventTracker('Kontak')}>Kontak</Nav.Link>
          </Nav>
          <Link href="" className="tombol">
            Hubungi Kami
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
