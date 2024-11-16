import React from 'react';
import '../styles/Downloads.css';

function Downloads() {
    const semesterOneMaterials = [
        { name: "Vocabulary List", file: "/files/vocab-list-sem1.pdf", type: "PDF" },
        { name: "Grammar Guide", file: "/files/grammar-guide-sem1.pdf", type: "PDF" },
        { name: "Practice Questions", file: "/files/practice-questions-sem1.pdf", type: "PDF" },
    ];

    const semesterTwoMaterials = [
        { name: "Advanced Vocabulary", file: "/files/vocab-list-sem2.pdf", type: "PDF" },
        { name: "Advanced Grammar Guide", file: "/files/grammar-guide-sem2.pdf", type: "PDF" },
        { name: "Advanced Practice Questions", file: "/files/practice-questions-sem2.pdf", type: "PDF" },
    ];

    const renderMaterials = (materials) =>
        materials.map((material, index) => (
            <li key={index} className="download-item">
                <a href={material.file} download>
                    <i className="download-icon">⬇</i>
                    {material.name} <span className="file-type">({material.type})</span>
                </a>
            </li>
        ));

    return (
        <section id="downloads" className="section downloads">
            <h2>Unduh Materi</h2>

            <div className="semester">
                <h3>Semester 1</h3>
                <ul className="downloads-list">{renderMaterials(semesterOneMaterials)}</ul>
            </div>

            <div className="semester">
                <h3>Semester 2</h3>
                <ul className="downloads-list">{renderMaterials(semesterTwoMaterials)}</ul>
            </div>
        </section>
    );
}

export default Downloads;