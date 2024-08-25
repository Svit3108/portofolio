import React from 'react';

function Projects() {
  return (
    <div className="section">
      <h2>Projekte</h2>
      <div className="project">
        <h3>StudyBoost</h3>
        <p><strong>Zeitraum:</strong> Januar 2023 - Mai 2023</p>
        <p><strong>Beschreibung:</strong> Eine Nachhilfeplattform für Kinder.</p>
        <p><strong>Technologien:</strong> Python, Django, React, PostgreSQL, AWS</p>
        <p><strong>Link zum Projekt:</strong> <a href="https://studyboost.example.com" target="_blank" rel="noopener noreferrer">StudyBoost ansehen</a></p>
        <p><strong>GitHub Repository:</strong> <a href="https://github.com/username/studyboost" target="_blank" rel="noopener noreferrer">Code auf GitHub</a></p>
      </div>
      <div className="project">
        <h3>Marktplatz für Künstler</h3>
        <p><strong>Zeitraum:</strong> Juni 2023 - Juli 2023</p>
        <p><strong>Beschreibung:</strong> Eine Plattform für Künstler.</p>
        <p><strong>Technologien:</strong> Node.js, Express, MongoDB, TensorFlow, Docker</p>
        <p><strong>Link zum Projekt:</strong> <a href="https://artmarket.example.com" target="_blank" rel="noopener noreferrer">Marktplatz ansehen</a></p>
        <p><strong>GitHub Repository:</strong> <a href="https://github.com/username/artmarket" target="_blank" rel="noopener noreferrer">Code auf GitHub</a></p>
      </div>
    </div>
  );
}

export default Projects;
