import React from "react";
import "../styles/LearningPage.css";

function Opinion() {
  return (
    <div className="learning-page">
      <h1>Asking and Giving Opinion</h1>
      <p>
        Belajar cara bertanya dan memberikan pendapat dengan ekspresi berikut:
      </p>
      <h2>Bertanya Pendapat:</h2>
      <ul>
        <li>*What do you think about...?*</li>
        <li>*How do you feel about...?*</li>
      </ul>
      <h2>Memberikan Pendapat:</h2>
      <ul>
        <li>*I think...*</li>
        <li>*In my opinion...*</li>
      </ul>
    </div>
  );
}

export default Opinion;
