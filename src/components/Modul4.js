import React from "react";
import "../styles/Modul.css";

function Modul4() {
  return (
    <div className="modul-page">
      <h1>Modul 4: Jenis Kalimat</h1>
      <p className="intro">
        Pada modul ini, kita akan mempelajari dua jenis kalimat penting dalam bahasa Inggris: <strong>kalimat utama (main clause)</strong> dan <strong>kalimat dependen (dependent clause)</strong>. Pemahaman ini penting untuk membangun kalimat sederhana maupun kompleks.
      </p>

      <div className="modul-content">
        <h2>1. Kalimat Utama (Main Clause)</h2>
        <p>
          Kalimat utama adalah kalimat yang dapat berdiri sendiri sebagai satu kalimat penuh karena memiliki subjek dan predikat lengkap. 
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Menyampaikan ide atau informasi utama.</li>
          <li><strong>Ciri-ciri:</strong> Memiliki subjek dan predikat yang lengkap, serta bisa berdiri sendiri.</li>
          <li><strong>Contoh:</strong>
            <p className="example">I enjoy reading books. (Saya menikmati membaca buku.)</p>
            <p className="example">The sun is shining brightly. (Matahari bersinar terang.)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Kalimat Dependen (Dependent Clause)</h2>
        <p>
          Kalimat dependen adalah kalimat yang tidak dapat berdiri sendiri karena belum memiliki makna lengkap. Kalimat ini membutuhkan kalimat utama untuk menjadi bagian dari suatu kalimat kompleks.
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Memberikan informasi tambahan atau melengkapi kalimat utama.</li>
          <li><strong>Ciri-ciri:</strong> Dimulai dengan kata sambung (*subordinating conjunctions*) seperti <em>because</em>, <em>when</em>, <em>if</em>, <em>although</em>, dll.</li>
          <li><strong>Contoh:</strong>
            <p className="example">Because it was raining. (Karena sedang hujan.)</p>
            <p className="example">When she arrived. (Ketika dia tiba.)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>3. Kombinasi Kalimat Utama dan Dependen</h2>
        <p>
          Untuk membuat kalimat yang lebih kompleks, kita dapat menggabungkan kalimat utama dengan kalimat dependen. Kalimat seperti ini disebut <strong>kalimat kompleks</strong>.
        </p>
        <ul>
          <li><strong>Contoh Kalimat Kompleks:</strong></li>
          <p className="example">
            I stayed at home <strong>because it was raining</strong>. <br />
            (Saya tetap di rumah <strong>karena sedang hujan</strong>.)
          </p>
          <p className="example">
            <strong>When she arrived</strong>, everyone clapped. <br />
            (<strong>Ketika dia tiba</strong>, semua orang bertepuk tangan.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>Kata Sambung Umum untuk Kalimat Dependen</h2>
        <table className="modul-table">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Kata Sambung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kondisi</td>
              <td>if, unless, provided that</td>
            </tr>
            <tr>
              <td>Waktu</td>
              <td>when, while, after, before, as soon as</td>
            </tr>
            <tr>
              <td>Alasan</td>
              <td>because, since, as</td>
            </tr>
            <tr>
              <td>Kontras</td>
              <td>although, though, even though</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="note">
        <strong>Catatan:</strong> Kalimat dependen tidak dapat berdiri sendiri dan membutuhkan kalimat utama untuk memberikan makna lengkap.
      </p>
    </div>
  );
}

export default Modul4;
