import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <center>
              <h1>Tentang Saya</h1>
              <p>
                Sesuai keilmuan saya sebagai seorang Doktor Manajemen, saya
                memiliki beban moral yang besar dengan melihat kenyataan ada
                didepan mata untuk semua perkembangan kehidupan bernegara mulai
                dari sisi agama, budaya, ekonomi, hukum dan tatanan hidup antar
                sesama yang sudah mencapai titik KRITIS. Berangkat dari itulah
                saya berusaha mencoba untuk ikut turut serta berkompetisi dalam
                pemilihan LEGISLATIF yang akan diselenggarakan dalam beberapa
                waktu nanti.
              </p>
              <ul className="sosial">
                <li>
                  <Link href="https://www.facebook.com/people/Selamat/100051027789122/?mibextid=ZbWKwL">
                    <FaFacebook />
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
            </center>
          </div>
        </div>
        <hr style={{ borderTop: "3px solid #fff" }} />
        <span>Copyright &copy; 2023 alali All rights reserved</span>
      </div>
    </footer>
  );
}
