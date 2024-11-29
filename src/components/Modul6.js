import React from "react";
import "../styles/Modul.css";

function Modul6() {
  return (
    <div className="modul-page">
      <h1>Modul 6: Penggunaan Tense</h1>
      <p className="intro">
        Dalam modul ini, Anda akan mempelajari penggunaan berbagai bentuk tense yang sering digunakan dalam Bahasa Inggris: 
        <strong>Present Simple</strong>, <strong>Present Continuous</strong>, <strong>Past Simple</strong>, <strong>Past Continuous</strong>, dan <strong>Future Simple</strong>.
      </p>

      <div className="modul-content">
        <h2>1. Present Simple</h2>
        <p>
          Tense ini digunakan untuk menyatakan kebiasaan, fakta umum, atau rutinitas sehari-hari.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + Verb 1 (s/es untuk he, she, it)</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She <strong>walks</strong> to school every day. <br />
            (Dia berjalan ke sekolah setiap hari.) <br />
            - The sun <strong>rises</strong> in the east. <br />
            (Matahari terbit di timur.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>2. Present Continuous</h2>
        <p>
          Tense ini digunakan untuk menyatakan tindakan yang sedang berlangsung saat ini atau untuk rencana di masa depan.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + is/am/are + Verb-ing</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She <strong>is studying</strong> English now. <br />
            (Dia sedang belajar Bahasa Inggris sekarang.) <br />
            - They <strong>are going</strong> to the park tomorrow. <br />
            (Mereka akan pergi ke taman besok.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>3. Past Simple</h2>
        <p>
          Tense ini digunakan untuk menyatakan tindakan atau kejadian yang telah selesai di masa lampau.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + Verb 2</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She <strong>went</strong> to the market yesterday. <br />
            (Dia pergi ke pasar kemarin.) <br />
            - They <strong>played</strong> football last week. <br />
            (Mereka bermain sepak bola minggu lalu.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>4. Past Continuous</h2>
        <p>
          Tense ini digunakan untuk menyatakan tindakan yang sedang berlangsung di masa lampau, biasanya diinterupsi oleh kejadian lain.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + was/were + Verb-ing</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She <strong>was reading</strong> a book when the phone rang. <br />
            (Dia sedang membaca buku ketika telepon berbunyi.) <br />
            - They <strong>were watching</strong> TV at 8 PM last night. <br />
            (Mereka sedang menonton TV pada pukul 8 malam tadi.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>5. Future Simple</h2>
        <p>
          Tense ini digunakan untuk menyatakan tindakan atau kejadian yang akan terjadi di masa depan.
        </p>
        <ul>
          <li><strong>Rumus:</strong> Subject + will + Verb 1</li>
          <li><strong>Contoh:</strong></li>
          <p className="example">
            - She <strong>will visit</strong> her grandmother tomorrow. <br />
            (Dia akan mengunjungi neneknya besok.) <br />
            - They <strong>will travel</strong> to Bali next month. <br />
            (Mereka akan bepergian ke Bali bulan depan.)
          </p>
        </ul>
      </div>

      <div className="modul-content">
        <h2>6. Perbandingan</h2>
        <table className="modul-table">
          <thead>
            <tr>
              <th>Tense</th>
              <th>Penggunaan</th>
              <th>Contoh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Present Simple</td>
              <td>Kebiasaan atau fakta</td>
              <td>She walks to school.</td>
            </tr>
            <tr>
              <td>Present Continuous</td>
              <td>Tindakan sedang berlangsung</td>
              <td>She is studying English.</td>
            </tr>
            <tr>
              <td>Past Simple</td>
              <td>Tindakan di masa lampau</td>
              <td>She went to the market.</td>
            </tr>
            <tr>
              <td>Past Continuous</td>
              <td>Tindakan sedang berlangsung di masa lampau</td>
              <td>She was reading a book.</td>
            </tr>
            <tr>
              <td>Future Simple</td>
              <td>Tindakan di masa depan</td>
              <td>She will visit her grandmother.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="note">
        <strong>Catatan:</strong> Memahami perbedaan setiap tense akan membantu Anda menyampaikan ide dengan tepat sesuai konteks waktu.
      </p>
    </div>
  );
}

export default Modul6;
