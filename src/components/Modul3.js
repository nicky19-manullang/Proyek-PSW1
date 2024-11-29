import React from "react";
import "../styles/Modul.css";

function Modul3() {
  return (
    <div className="modul-page">
      <h1>Modul 3: Klasifikasi Kalimat</h1>
      <p className="intro">
        Dalam modul ini, kita akan mempelajari dua jenis klasifikasi kalimat dalam bahasa Inggris: <strong>kalimat aktif</strong> dan <strong>kalimat pasif</strong>. Kedua tipe ini digunakan untuk menyampaikan informasi dengan fokus yang berbeda. Mari kita pelajari lebih dalam!
      </p>

      <div className="modul-content">
        <h2>1. Kalimat Aktif</h2>
        <p>
          Kalimat aktif adalah kalimat di mana subjek melakukan tindakan. Dalam kalimat ini, subjek menjadi fokus utama karena ia adalah pelaku dari suatu tindakan.
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Menunjukkan tindakan yang dilakukan oleh subjek.</li>
          <li><strong>Ciri-ciri:</strong> Kata kerja aktif digunakan, dan subjek mendahului predikat.</li>
          <li><strong>Contoh:</strong>
            <p className="example">The cat chased the mouse. (Kucing itu mengejar tikus.)</p>
            <p className="example">She is writing a letter. (Dia sedang menulis sebuah surat.)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Kalimat Pasif</h2>
        <p>
          Kalimat pasif adalah kalimat di mana subjek menjadi penerima tindakan, bukan pelakunya. Biasanya, fokusnya adalah pada tindakan atau hasil tindakan, bukan siapa yang melakukannya.
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Menyoroti hasil tindakan atau objek yang dikenai tindakan.</li>
          <li><strong>Ciri-ciri:</strong> Kata kerja pasif digunakan (menggunakan *to be* + past participle), dan subjek biasanya muncul setelah tindakan.</li>
          <li><strong>Contoh:</strong>
            <p className="example">The mouse was chased by the cat. (Tikus itu dikejar oleh kucing.)</p>
            <p className="example">A letter is being written by her. (Sebuah surat sedang ditulis olehnya.)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>Perbandingan Kalimat Aktif dan Pasif</h2>
        <table className="modul-table">
          <thead>
            <tr>
              <th>Kalimat Aktif</th>
              <th>Kalimat Pasif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The teacher explains the lesson. <br />(Guru menjelaskan pelajaran.)</td>
              <td>The lesson is explained by the teacher. <br />(Pelajaran dijelaskan oleh guru.)</td>
            </tr>
            <tr>
              <td>He repaired the car. <br />(Dia memperbaiki mobil.)</td>
              <td>The car was repaired by him. <br />(Mobil itu diperbaiki olehnya.)</td>
            </tr>
          </tbody>
        </table>
        <p className="note">
          <strong>Catatan:</strong> Gunakan kalimat aktif saat ingin fokus pada pelaku tindakan, dan gunakan kalimat pasif saat ingin fokus pada tindakan atau hasilnya.
        </p>
      </div>
    </div>
  );
}

export default Modul3;
