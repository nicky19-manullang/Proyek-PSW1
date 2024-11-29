import React from "react";
import "../styles/Modul.css";

function Modul2() {
  return (
    <div className="modul-page">
      <h1>Modul 2: Tipe Kalimat</h1>
      <p className="intro">
        Pada modul ini, kita akan membahas empat tipe kalimat utama dalam bahasa Inggris: <strong>deklaratif</strong>, <strong>interogatif</strong>, <strong>imperatif</strong>, dan <strong>eksklamatif</strong>. Masing-masing memiliki tujuan dan struktur unik. Mari kita pelajari lebih dalam!
      </p>

      <div className="modul-content">
        <h2>1. Deklaratif</h2>
        <p>
          Kalimat deklaratif digunakan untuk menyampaikan informasi atau pernyataan. Kalimat ini berakhir dengan tanda titik (.) dan biasanya merupakan tipe kalimat yang paling sering digunakan.
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Menyampaikan fakta, opini, atau informasi.</li>
          <li><strong>Contoh:</strong> 
            <p className="example">I am learning English. (Saya sedang belajar bahasa Inggris.)</p>
            <p className="example">The sun rises in the east. (Matahari terbit di timur.)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Interogatif</h2>
        <p>
          Kalimat interogatif digunakan untuk mengajukan pertanyaan. Biasanya dimulai dengan kata tanya (seperti *what*, *where*, *when*, *why*, *how*) atau inversi subjek dan kata kerja.
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Mengajukan pertanyaan atau meminta informasi.</li>
          <li><strong>Contoh:</strong> 
            <p className="example">What is your name? (Siapa namamu?)</p>
            <p className="example">Are you coming to the party? (Apakah kamu akan datang ke pesta?)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>3. Imperatif</h2>
        <p>
          Kalimat imperatif digunakan untuk memberikan perintah, saran, atau instruksi. Biasanya, subjeknya (kamu/you) tidak disebutkan secara eksplisit, tetapi dipahami dari konteks.
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Memberikan perintah atau instruksi.</li>
          <li><strong>Contoh:</strong> 
            <p className="example">Close the door! (Tutup pintunya!)</p>
            <p className="example">Please sit down. (Silakan duduk.)</p>
          </li>
        </ul>
      </div>

      <div className="modul-content">
        <h2>4. Eksklamatif</h2>
        <p>
          Kalimat eksklamatif digunakan untuk mengungkapkan emosi yang kuat, seperti kegembiraan, kemarahan, atau kejutan. Kalimat ini berakhir dengan tanda seru (!).
        </p>
        <ul>
          <li><strong>Tujuan:</strong> Menyampaikan emosi yang kuat.</li>
          <li><strong>Contoh:</strong> 
            <p className="example">What a beautiful day! (Betapa indahnya hari ini!)</p>
            <p className="example">I can't believe it! (Aku tidak percaya!)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modul2;
