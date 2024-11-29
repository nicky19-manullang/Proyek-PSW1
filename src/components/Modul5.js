import React from "react";
import "../styles/Modul.css";

function Modul5() {
  return (
    <div className="modul-page">
      <h1>Modul 5: Penghubung Kalimat</h1>
      <p className="intro">
        Pada modul ini, kita akan mempelajari <strong>konjungsi koordinatif</strong> dan <strong>konjungsi subordinatif</strong>. Kedua jenis konjungsi ini berperan penting dalam menyambungkan ide dalam kalimat sehingga komunikasi menjadi lebih efektif.
      </p>

      <div className="modul-content">
        <h2>1. Konjungsi Koordinatif</h2>
        <p>
          Konjungsi koordinatif digunakan untuk menghubungkan dua bagian kalimat yang setara. Ini berarti kedua bagian kalimat memiliki bobot yang sama dan dapat berdiri sendiri.
        </p>
        <ul>
          <li><strong>Kata-kata umum:</strong> for, and, nor, but, or, yet, so (FANBOYS).</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            I wanted to go for a walk, <strong>but</strong> it started to rain. <br />
            (Saya ingin pergi berjalan-jalan, <strong>tetapi</strong> hujan mulai turun.)
          </p>
          <p className="example">
            She can read a book, <strong>or</strong> she can watch a movie. <br />
            (Dia bisa membaca buku, <strong>atau</strong> menonton film.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Konjungsi Subordinatif</h2>
        <p>
          Konjungsi subordinatif digunakan untuk menghubungkan kalimat utama (independen) dengan kalimat dependen. Kalimat dependen memberikan informasi tambahan untuk melengkapi ide dari kalimat utama.
        </p>
        <ul>
          <li><strong>Kata-kata umum:</strong> because, although, while, since, if, when, etc.</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            I stayed at home <strong>because</strong> it was raining. <br />
            (Saya tetap di rumah <strong>karena</strong> sedang hujan.)
          </p>
          <p className="example">
            <strong>Although</strong> she was tired, she finished her homework. <br />
            (<strong>Walaupun</strong> dia lelah, dia menyelesaikan pekerjaannya.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>3. Perbedaan Utama</h2>
        <table className="modul-table">
          <thead>
            <tr>
              <th>Konjungsi Koordinatif</th>
              <th>Konjungsi Subordinatif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menghubungkan dua bagian kalimat yang setara.</td>
              <td>Menghubungkan kalimat utama dengan kalimat dependen.</td>
            </tr>
            <tr>
              <td>Kedua bagian kalimat bisa berdiri sendiri.</td>
              <td>Kalimat dependen tidak dapat berdiri sendiri.</td>
            </tr>
            <tr>
              <td>Contoh: for, and, nor, but, or, yet, so (FANBOYS).</td>
              <td>Contoh: because, although, since, if, when, while, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="modul-content">
        <h2>4. Tips Penggunaan Konjungsi</h2>
        <ul>
          <li>Gunakan <strong>konjungsi koordinatif</strong> untuk menyambungkan ide-ide setara seperti pilihan atau perbedaan pendapat.</li>
          <li>Gunakan <strong>konjungsi subordinatif</strong> untuk menjelaskan alasan, waktu, atau kondisi tertentu.</li>
          <li>Perhatikan tanda baca, terutama pada konjungsi seperti *but* dan *because*.</li>
        </ul>
      </div>

      <p className="note">
        <strong>Catatan:</strong> Penggunaan konjungsi yang tepat membantu Anda menyampaikan ide dengan jelas dan efektif dalam tulisan maupun percakapan.
      </p>
    </div>
  );
}

export default Modul5;
