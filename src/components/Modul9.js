import React from "react";
import "../styles/Modul.css";

function Modul9() {
  return (
    <div className="modul-page">
      <h1>Modul 9: Penggunaan Frasa</h1>
      <p className="intro">
        Dalam modul ini, Anda akan mempelajari berbagai jenis frasa yang sering digunakan dalam bahasa Inggris, yaitu frasa preposisi, frasa nominal, dan frasa verba.
      </p>

      <div className="modul-content">
        <h2>1. Frasa Preposisi</h2>
        <p>
          <strong>Frasa preposisi</strong> adalah frasa yang dimulai dengan kata depan (*preposition*) dan diikuti oleh objeknya. Frasa ini digunakan untuk menunjukkan hubungan antara kata benda atau kata ganti dengan bagian lain dari kalimat.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Preposition + Object (noun/pronoun)</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She is sitting <strong>on the chair</strong>. <br />
            (Dia sedang duduk di atas kursi.) <br />
            - The book is <strong>under the table</strong>. <br />
            (Buku itu ada di bawah meja.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Frasa Nominal</h2>
        <p>
          <strong>Frasa nominal</strong> adalah frasa yang berfungsi sebagai kata benda (*noun*). Frasa ini sering digunakan sebagai subjek, objek, atau pelengkap dalam kalimat.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Determiner + Modifier + Noun</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - <strong>The beautiful garden</strong> is my favorite place. <br />
            (Taman yang indah adalah tempat favorit saya.) <br />
            - She bought <strong>a pair of shoes</strong>. <br />
            (Dia membeli sepasang sepatu.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>3. Frasa Verba</h2>
        <p>
          <strong>Frasa verba</strong> adalah frasa yang berfungsi sebagai kata kerja (*verb*). Frasa ini biasanya terdiri dari kata kerja utama (*main verb*) dan kata kerja bantu (*auxiliary verb*).
        </p>
        <ul>
          <li><strong>Rumus:</strong> Auxiliary Verb + Main Verb</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She <strong>is writing</strong> a letter. <br />
            (Dia sedang menulis surat.) <br />
            - They <strong>have finished</strong> their homework. <br />
            (Mereka telah menyelesaikan pekerjaan rumah mereka.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>Catatan Tambahan</h2>
        <p>
          Penggunaan frasa membantu memperjelas makna dan struktur kalimat. Dalam kalimat, frasa ini bisa diletakkan di awal, tengah, atau akhir, tergantung pada fungsi dan jenisnya.
        </p>
        <ul>
          <li><strong>Frasa Preposisi:</strong> <br />
            <em>At the park</em>, the children played happily. <br />
            (Di taman, anak-anak bermain dengan gembira.)
          </li>
          <li><strong>Frasa Nominal:</strong> <br />
            The <em>man in the blue jacket</em> is my uncle. <br />
            (Pria dengan jaket biru itu adalah paman saya.)
          </li>
          <li><strong>Frasa Verba:</strong> <br />
            She <em>has been studying</em> for hours. <br />
            (Dia telah belajar selama berjam-jam.)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modul9;
