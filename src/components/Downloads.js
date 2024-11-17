import React from 'react';
import '../styles/Downloads.css';

function Downloads() {
    const semesterOneMaterials = [
        { name: "Vocabulary List", file: "/files/vocabulary-list.pdf", type: "PDF", icon: "/images/vocabul.jpg" },
        { name: "Grammar Guide", file: "/files/grammar-guide-sem1.pdf", type: "PDF", icon: "/images/grammar-icon.png" },
        { name: "Practice Questions", file: "/files/practice-questions-sem1.pdf", type: "PDF", icon: "/images/questions-icon.png" },
    ];

    const semesterTwoMaterials = [
        { name: "Advanced Vocabulary", file: "/files/vocab-list-sem2.pdf", type: "PDF", icon: "/images/vocab-icon.png" },
        { name: "Advanced Grammar Guide", file: "/files/grammar-guide-sem2.pdf", type: "PDF", icon: "/images/grammar-icon.png" },
        { name: "Advanced Practice Questions", file: "/files/practice-questions-sem2.pdf", type: "PDF", icon: "/images/questions-icon.png" },
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
