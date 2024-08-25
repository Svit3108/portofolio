import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';

// Array von Sprachen und Farben für die Begrüßungsnachricht
const messages = [
    { text: "Willkommen zu meinem Portfolio", color: "#4A90E2" }, // Sanftes Blau
    { text: "Welcome to my Portfolio", color: "#E94E77" },       // Sanftes Rosa
    { text: "Bienvenue dans mon Portfolio", color: "#50E3C2" },  // Sanftes Türkis
    { text: "Bienvenido a mi Portafolio", color: "#F5A623" },   // Sanftes Orange
    { text: "Запрошую до мого Порфолію", color: "#FFD700" },
    
]; 

const Home = () => {
    const [index, setIndex] = React.useState(0);

    // Animation für die Begrüßungsnachricht
    const welcomeProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
        onRest: () => {
            setIndex((index + 1) % messages.length);
        },
        color: messages[index].color, // Füge die Farbe hier hinzu
    });

    return (
        <div className="home" style={homeStyle}>
            {/* Animierte Begrüßungsnachricht */}
            <animated.div style={{ ...welcomeProps, color: welcomeProps.color }}>
                <h1 className="text-4xl md:text-5xl font-bold">
                    {messages[index].text}
                </h1>
            </animated.div>

            {/* Profilbild mit Framer Motion Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={profileStyle}
            >
                <img src="/profile.jpg" alt="Profilfoto" style={imgStyle} />
            </motion.div>

            {/* Titel mit Framer Motion Animation */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={headingStyle}
            >
                Willkommen zu meinem Portfolio
            </motion.h1>

            {/* Unterstreichungslinie mit Framer Motion Animation */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
                style={underlineStyle}
            ></motion.div>
        </div>
    );
};

const homeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8', // Hellgrau mit einem Hauch von Blau
    color: '#333', // Dunkles Grau für den Text
    fontFamily: 'Roboto, sans-serif', // Google Font
};

const profileStyle = {
    marginBottom: '20px',
};

const imgStyle = {
    borderRadius: '50%',
    width: '350px',
    height: '350px',
    objectFit: 'cover',
    border: '3px solid #FF6F61', // Weicher Rotton für den Rand
};

const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#FF6F61', 
};

const underlineStyle = {
    height: '4px',
    backgroundColor: '#FFD700', // Weiches Gelb für die Linie
    marginTop: '10px',
    borderRadius: '2px',
};

export default Home;
