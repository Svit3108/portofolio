import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        <a 
          href="https://www.linkedin.com/in/svitlana-popova-726408318" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://github.com/Svit3108" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;
