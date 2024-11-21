import React from 'react';
import '../styles/Downloads.css';

function Downloads() {
    const semesterOneMaterials = [
        { name: "Vocabulary List", file: "/files/vocabulary-list.pdf", type: "PDF", icon: "/images/vocabul.jpg" },
        { name: "Grammar Guide", file: "/files/grammar-guide-sem1.pdf", type: "PDF", icon: "/images/grammar-icon.png" },
        { name: "Practice Questions", file: "/files/practice-questions-sem1.pdf", type: "PDF", icon: "/images/questions-icon.png" },
        { name: "Practice Questions", file: "/files/practice-questions-sem1.pdf", type: "PDF", icon: "/images/questions-icon.png" },
        { name: "Practice Questions", file: "/files/practice-questions-sem1.pdf", type: "PDF", icon: "/images/questions-icon.png" },
    ];

    const semesterTwoMaterials = [
        { name: "Materi Tenses Bahasa Inggris SMA Kelas 11 Semester 2", file: "/files/Modul 6.Materi Tenses Bahasa Inggris SMA Kelas 11 Semester 2", type: "PDF", icon: "/images/tense.jpg" },
        { name: "Materi Penggunaan Bahasa Inggris Modals SMA Kelas 11 Semester 2", file: "/files/Modul 7. Materi Penggunaan Bahasa Inggris Modals SMA Kelas 11 Semester 2.pdf", type: "PDF", icon: "/images/modals verbs.jpg" },
        { name: "Materi Keterangan (Adverbs) Bahasa Inggris SMA Kelas 11 Semester 2", file: "/files/Modul 8. Materi Keterangan (Adverbs) Bahasa Inggris SMA Kelas 11 Semester 2.pdf", type: "PDF", icon: "/images/Adverb.jpg" },
        { name: "Materi Frasa (Phrases) Bahasa Inggris SMA Kelas 11 Semester 2", file: "/files/Modul 9. Materi Frasa (Phrases) Bahasa Inggris SMA Kelas 11 Semester 2.pdf", type: "PDF", icon: "/images/Phrases.jpg" },
        { name: "Materi Punctuation Bahasa Inggris SMA Kelas 11 Semester 2", file: "/files/Modul 10. Materi Punctuation Bahasa Inggris SMA Kelas 11 Semester 2.pdf", type: "PDF", icon: "/images/Punctuation.jpg" },
    ];

    const renderMaterials = (materials) =>
        materials.map((material, index) => (
            <div key={index} className="download-item">
                <a href={material.file} download className="download-link">
                    <img src={material.icon} alt="Icon" className="download-icon" />
                    <div className="download-info">
                        <span>{material.name}</span>
                        <span className="file-type">({material.type})</span>
                    </div>
                </a>
            </div>
        ));

    return (
        <section id="downloads" className="section downloads">
            <h2>Unduh Materi</h2>

            <div className="semester">
                <h3>Semester 1</h3>
                <div className="download-cards">
                    {renderMaterials(semesterOneMaterials)}
                </div>
            </div>

            <div className="semester">
                <h3>Semester 2</h3>
                <div className="download-cards">
                    {renderMaterials(semesterTwoMaterials)}
                </div>
            </div>
        </section>
    );
}

export default Downloads;