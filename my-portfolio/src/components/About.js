import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Icons importieren

function About() {
  return (
    <div style={aboutStyle}>
      <h1>Svitlana Popova</h1>
      <p>
        Ich bin eine zielstrebige und engagierte Fachkraft mit umfangreichen Kenntnissen in der Programmierung und Cloud-Computing. 
        Meine Stärken liegen in der Organisation, Kommunikation und der Fähigkeit, flexibel auf neue Herausforderungen zu reagieren. 
        Ich lerne schnell und bin offen für Kritik, was mir hilft, mich kontinuierlich weiterzuentwickeln.
      </p>
      <h2>Kontaktinformationen</h2>
      <p><FaEnvelope style={iconStyle} /> E-Mail: [svitlana.popova@gmx.de]</p>
      <p><FaPhone style={iconStyle} /> Telefon: [+491773450654]</p>
      <p><FaMapMarkerAlt style={iconStyle} /> Adresse: [Heinrichestr 32,Köln 50999]</p>
    </div>
  );
}

const aboutStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

const iconStyle = {
  marginRight: '10px',
};

export default About;
