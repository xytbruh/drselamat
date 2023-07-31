"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-bootstrap";

export default function Main() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    axios
      .post(
        "https://api.apispreadsheets.com/data/uDbLtsVltJBSzNcU/",
        new FormData(form)
      )
      .then(() => {
        alert("Form Data Submitted :)");
      })
      .catch(() => {
        alert("There was an error :(");
      });
  };
  return (
    <main>
      <section className="welcome-area" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="welcome-text">
                <h1>Selamat Untuk Lampung</h1>
                <h4>
                  Berketuhanan, Kesejahteraan,Pembelajar, Kesetaraan, dan sosial
                </h4>
                <p>
                  Mewakili suara rakyat Tulang Bawang Barat dan Mesuji, saya
                  siap menjadi perwakilan yang setia dan berkomitmen di DPR
                  Provinsi Lampung. Dengan visi untuk kemajuan daerah dan
                  kepentingan masyarakat, mari bersama kita bangun perubahan
                  yang nyata. Suara Anda adalah kekuatan kita, mari bergerak
                  maju bersama menuju masa depan yang lebih baik. Bersama-sama,
                  kita dapat mewujudkan harapan dan kebutuhan kita semua.
                </p>
                <Link
                  href=""
                  style={{
                    background: "#000",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    color: "#fff;",
                  }}
                >
                  Dukung Sekarang
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Image
                src="/AHY-Ketum-Jas-PD-400x598-1.webp"
                className="mx-auto img-fluid"
                alt="dr selamat"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="profil">
        <div className="profil-area">
          <div className="container">
            <h1>Ke Organisasian</h1>
            <p>
              Selama bertahun-tahun saya aktif berkontribusi dalam berbagai
              organisasi,Dengan dedikasi yang saya berikan entah itu berupa ilmu
              maupun materi, Sesuai keilmuan saya sebagai seorang Doktor
              Manajemen, saya sadar betul memiliki beban moral yang besar dengan
              melihat kenyataan ada didepan mata untuk semua perkembangan
              kehidupan bernegara mulai dari sisi agama, budaya, ekonomi, hukum
              dan tatanan hidup antar sesama.
            </p>
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Serikat Pekerja (SP)</h2>
                  <p>Sebagai Pembina dari tahun 2011-2021</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Keluarga Masyarakat Aceh Lampung (KEMALA)</h2>
                  <p>Sebagai Pembina dari tahun 2017-Sekarang</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Asosiasi Jurnalis Online Indonesia (AJOI)</h2>
                  <p>Sebagai Ketua Harian dari tahun 2019-2022</p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>WADOKAI Lampung</h2>
                  <p>
                    Sebagai Ketua Dewan Pimpinan Wilayah dari tahun
                    2020-Sekarang
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Puma Karya Listrik Nasional (PRUSLINA)</h2>
                  <p>
                    Sebagai Ketua Dewan Pimpinan Wilayah dari tahun
                    2020-Sekarang
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Relawan Anis Bersama Gerakan Rakyat (BERGERAK)</h2>
                  <p>
                    Sebagai Ketua Dewan Pimpinan Wilayah dari tahun 2020-2022
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Relawan PAYUNG ANIS</h2>
                  <p>
                    Sebagai Ketua Dewan Pimpinan Wilayah dari tahun
                    2022-Sekarang
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="wrap-profil">
                  <h2>Keluarga Masyarakat Aceh Lampung (KEMALA)</h2>
                  <p>Sebagai Pembina dari tahun 2017-Sekarang</p>
                </div>
              </div>
            </div>
            <p>
              Berangkat dari itulah saya sejak awal ikut serta dalam berbagai
              organisasi yang bermanfaat bagi masyarakat dan bangsa. Dengan ilmu
              dan pengalaman yang saya dapat, saya dedikasikan sebagai bekal
              saya untuk ikut turut serta berkompetisi dalam pemilihan
              LEGISLATIF yang akan diselenggarakan dalam beberapa waktu nanti.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="profil-wrapper">
            <div className="row">
              <div className="col-12 col-lg-6">
                <Image
                  src="/AHY-Ketum-Jas-PD-400x598-1.webp"
                  width="400"
                  height="400"
                  className="mx-auto img-fluid"
                  alt="Profil"
                />
              </div>
              <div className="col-12 col-lg-6 p-4">
                <h1>Dr.Ir.H.Selamat,M.M</h1>
                <h2>CALON ANGGOTA DPR LAMPUNG</h2>
                <hr style={{ borderTop: "5px solid #000", width: "50%" }} />
                <p>
                  Sesuai keilmuan saya sebagai seorang Doktor Manajemen, saya
                  memiliki beban moral yang besar dengan melihat kenyataan ada
                  didepan mata untuk semua perkembangan kehidupan bernegara
                  mulai dari sisi agama, budaya, ekonomi, hukum dan tatanan
                  hidup antar sesama yang sudah mencapai titik KRITIS.
                  <br />
                  Berangkat dari itulah saya berusaha mencoba untuk ikut turut
                  serta berkompetisi dalam pemilihan LEGISLATIF yang akan
                  diselenggarakan dalam beberapa waktu nanti.
                </p>
                <Link href="" className="tombol">
                  Mohon Doa Dan Dukungannya
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h1>Partai Keadilan Sejahtera</h1>
                  <hr style={{ borderTop: "5px solid #000", width: "50%" }} />
                  <p>
                    Partai Keadilan Sejahtera atau yang lebih dikenal dengan PKS
                    merupakan salah satu partai politik di Indonesia. Partai
                    politik ini pertama kali dibentuk pada tanggal 20 April 2002
                    yang bermula dari sebuah gerakan dakwah yang ada di kampus.
                    Gerakan ini dimulai dengan berdirinya Dewan Dakwah Islamiyah
                    Indonesia (DDII) sejak tahun 1967 yang dipelopori oleh
                    Muhammad Natsir!
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <Image
                    src="/2023-05-18 1.webp"
                    width="500"
                    height="500"
                    alt="banner"
                    className="mx-auto img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimoni" id="testimoni">
          <div className="container">
            <h4>Testimonial</h4>
            <h1>Apa Kata Pendukung Saya?</h1>
            <div className="row">
              <div className="col-12">
                <Carousel slide={false} touch>
                  <Carousel.Item>
                    <div className="testimoni-wrap">
                      <p style={{ fontSize: "14px", color: "#000" }}>
                        Kami butuh profile yang memiliki kemampuan berpikir,
                        berbuat, adil, berhati nurani lembut dan baik, berani
                        terdepan membela setiap desakan dan aksi kezaliman,
                        beriman, bertakwa, membangun kebersamaan tanpa ada
                        perbedaan agama, warna, politik, komunitas, suku dan
                        ras.
                      </p>
                      <div className="row">
                        <div className="col-2 d-inline">
                          <h3>Masyarakat</h3>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimoni-wrap">
                      <p style={{ fontSize: "14px", color: "#000" }}>
                        Terima kasih, Bapak Selamat, atas dedikasi dan komitmen
                        Anda untuk mewakili aspirasi masyarakat. Saya yakin Anda
                        memiliki visi yang kuat untuk memajukan Provinsi ini.
                        Semoga Anda terpilih sebagai anggota DPR Provinsi yang
                        berpengaruh dan berintegritas.
                      </p>
                      <div className="row">
                        <div className="col-2 d-inline">
                          <h3>Masyarakat</h3>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimoni-wrap">
                      <p style={{ fontSize: "14px", color: "#000" }}>
                        Bapak Selamat, saya sangat mengapresiasi keberanian dan
                        semangat Anda dalam berjuang demi kepentingan rakyat.
                        Dukungan saya sepenuhnya untuk Anda dalam pencapaian
                        tujuan dan agenda yang Anda usung. Semoga menjadi suara
                        rakyat yang lantang di DPR Provinsi!
                      </p>
                      <div className="row">
                        <div className="col-2 d-inline">
                          <h3>Masyarakat</h3>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kontak1" id="kontak">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="form-alamat">
                <h1>No Telpon</h1>
                <p>+6285273731313</p>
                <hr />
                <h1>Email</h1>
                <p>drirhselamatmm@gmail.com</p>
                <hr />
                <h1>Alamat</h1>
                <p>
                  Jl. Amir Hamzah No. 57 LK.1/RT.003 Gotong Royong Tanjung
                  Karang Pusat Bandar Lampung
                </p>
                <hr />
                <h1>Website Url</h1>
                <p>https://drselamat.com</p>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="form-kontak">
                <center>
                  <Image
                    src="/logo2.webp"
                    className="img-fluid"
                    width="100"
                    height="100"
                    alt="logo"
                  />
                  <h3>Jadilah Pendukung Saya!!</h3>
                </center>
                <form id="myForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Anda?"
                        name="nama"
                        id=""
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        name="no_telp"
                        placeholder="No Telephone"
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="number"
                        name="umur"
                        placeholder="Umur Anda?"
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="alamat"
                        placeholder="Alamat"
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        className="form-control"
                        style={{
                          backgroundColor: "#000",
                          border: "none",
                          color: "#ff5001",
                        }}
                        value="Dukung"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
