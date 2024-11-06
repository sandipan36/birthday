// src/Rocket.js
import React from 'react';
import { motion } from 'framer-motion';
import './Rocket.css';

const Rocket = ({ delay, xPosition }) => {
    const colors = ['#ff6b6b', '#ff9f43', '#1dd1a1', '#5f27cd', '#54a0ff'];
    const explosionColor = colors[Math.floor(Math.random() * colors.length)];

    const explosionHeight = Math.random() > 0.5 ? -500 : -250;

    return (
        <motion.div
            className="rocket"
            style={{ left: `${xPosition}%` }}
            initial={{ y: 300, opacity: 1 }}
            animate={{ y: explosionHeight, opacity: 1 }}
            transition={{ delay: delay, duration: 1.5, ease: "easeOut" }}
        >
            <div className="rocket-cone"></div>
            <div className="rocket-body"></div>
            <div className="rocket-flame"></div>
            <div className="rocket-sparkles">
                {/* Adding multiple sparkles */}
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="sparkle"></div>
                ))}
            </div>
            <motion.div
                className="rocket-explosion"
                style={{ backgroundColor: explosionColor }}
                initial={{ scale: 0 }}
                animate={{ scale: 4, opacity: 1 }}
                transition={{ delay: delay + 1.5, duration: 1, ease: "easeOut" }}
            ></motion.div>
        </motion.div>
    );
};

export default Rocket;
