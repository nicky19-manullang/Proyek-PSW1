import React from "react";
import "../styles/Modul.css";

function Modul1() {
  return (
    <div className="modul-page">
      <h1>Modul 1: Struktur Kalimat</h1>
      <p className="intro">
        Dalam modul ini, Anda akan mempelajari dasar-dasar pembentukan kalimat, termasuk subjek, predikat, objek, frase, klausa, serta perbedaan antara kalimat sederhana dan kompleks. Mari kita mulai!
      </p>

      <div className="modul-content">
        <h2>1. Subjek, Predikat, dan Objek</h2>
        <p>
          Kalimat terdiri dari elemen-elemen utama seperti <strong>subjek</strong> (yang melakukan tindakan), <strong>predikat</strong> (kata kerja yang menjelaskan tindakan), dan <strong>objek</strong> (yang menerima tindakan).
        </p>
        <ul>
          <li><strong>Subjek:</strong> Biasanya berupa kata benda atau frasa benda. Contoh: *The cat* (Kucing).</li>
          <li><strong>Predikat:</strong> Biasanya berupa kata kerja. Contoh: *jumps* (melompat).</li>
          <li><strong>Objek:</strong> Penerima aksi. Contoh: *the fence* (pagar).</li>
        </ul>
        <p className="example">
          <strong>Contoh:</strong> The cat jumps over the fence.
        </p>
      </div>

      <div className="modul-content">
        <h2>2. Frase dan Klausa</h2>
        <p>
          <strong>Frase</strong> adalah kumpulan kata yang tidak memiliki subjek dan predikat, sementara <strong>klausa</strong> memiliki subjek dan predikat.
        </p>
        <ul>
          <li><strong>Frase:</strong> Tidak lengkap. Contoh: *under the table* (di bawah meja).</li>
          <li><strong>Klausa:</strong> Lengkap, memiliki subjek dan predikat. Contoh: *She is reading a book.*</li>
        </ul>
        <p className="example">
          <strong>Contoh:</strong> While she was reading (klausa), I was cooking (klausa).
        </p>
      </div>

      <div className="modul-content">
        <h2>3. Kalimat Sederhana dan Kompleks</h2>
        <p>
          Kalimat sederhana hanya memiliki satu klausa, sedangkan kalimat kompleks memiliki lebih dari satu klausa dengan hubungan subordinasi.
        </p>
        <ul>
          <li><strong>Kalimat Sederhana:</strong> Satu klausa utama. Contoh: *I like apples.*</li>
          <li><strong>Kalimat Kompleks:</strong> Klausa utama dan klausa subordinat. Contoh: *I like apples because they are sweet.*</li>
        </ul>
        <p className="example">
          <strong>Contoh:</strong> The boy is playing while his sister is studying.
        </p>
      </div>
    </div>
  );
}

export default Modul1;
