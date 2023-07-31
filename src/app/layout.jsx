import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Inter } from "next/font/google";


import ReactGA from 'react-ga';
const TRACKING_ID = "G-GCJPPC7XPK"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Selamat Untuk Lampung | Calon DPR Lampung",
  description:
    "Mewakili suara rakyat Tulang Bawang Barat dan Mesuji, saya siap menjadi perwakilan yang setia dan berkomitmen di DPR Provinsi Lampung. Dengan visi untuk kemajuan daerah dan kepentingan masyarakat, mari bersama kita bangun perubahan yang nyata. Suara Anda adalah kekuatan kita, mari bergerak maju bersama menuju masa depan yang lebih baik. Bersama-sama, kita dapat mewujudkan harapan dan kebutuhan kita semua.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo2.webp?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/logo2.webp?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
