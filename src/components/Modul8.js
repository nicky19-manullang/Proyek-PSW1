import React from "react";
import "../styles/Modul.css";

function Modul8() {
  return (
    <div className="modul-page">
      <h1>Modul 8: Penggunaan Keterangan</h1>
      <p className="intro">
        Dalam modul ini, Anda akan mempelajari penggunaan keterangan (*adverbs*) dalam kalimat untuk menjelaskan waktu, tempat, dan cara sebuah tindakan dilakukan.
      </p>

      <div className="modul-content">
        <h2>1. Keterangan Waktu</h2>
        <p>
          <strong>Keterangan waktu</strong> digunakan untuk menunjukkan kapan suatu tindakan dilakukan. Biasanya menggunakan kata seperti *yesterday*, *today*, *now*, *soon*, *at 5 PM*, dll.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + Verb + Adverb of Time</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She called me <strong>yesterday</strong>. <br />
            (Dia menelepon saya kemarin.) <br />
            - I will visit you <strong>tomorrow morning</strong>. <br />
            (Saya akan mengunjungi Anda besok pagi.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Keterangan Tempat</h2>
        <p>
          <strong>Keterangan tempat</strong> digunakan untuk menunjukkan di mana suatu tindakan dilakukan. Biasanya menggunakan kata seperti *here*, *there*, *in the park*, *on the table*, dll.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + Verb + Adverb of Place</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - The children are playing <strong>in the garden</strong>. <br />
            (Anak-anak sedang bermain di taman.) <br />
            - She left her bag <strong>on the table</strong>. <br />
            (Dia meninggalkan tasnya di atas meja.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>3. Keterangan Cara</h2>
        <p>
          <strong>Keterangan cara</strong> digunakan untuk menjelaskan bagaimana suatu tindakan dilakukan. Biasanya menggunakan kata seperti *quickly*, *carefully*, *happily*, dll.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + Verb + Adverb of Manner</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She speaks <strong>fluently</strong>. <br />
            (Dia berbicara dengan lancar.) <br />
            - He completed the project <strong>carefully</strong>. <br />
            (Dia menyelesaikan proyek dengan hati-hati.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>Catatan Tambahan</h2>
        <p>
          Keterangan dapat diletakkan di awal, tengah, atau akhir kalimat, tergantung pada jenisnya dan fokus kalimat. Contoh:
        </p>
        <ul>
          <li><strong>Keterangan Waktu di Awal:</strong> <br />
            <em>Tomorrow</em>, we will have a meeting. <br />
            (Besok, kita akan mengadakan rapat.)
          </li>
          <li><strong>Keterangan Tempat di Tengah:</strong> <br />
            They are <em>in the library</em> studying for their exams. <br />
            (Mereka sedang di perpustakaan belajar untuk ujian mereka.)
          </li>
          <li><strong>Keterangan Cara di Akhir:</strong> <br />
            She danced <em>beautifully</em>. <br />
            (Dia menari dengan indah.)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modul8;
