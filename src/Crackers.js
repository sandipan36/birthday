// src/Crackers.js
import React from 'react';
import { motion } from 'framer-motion';
import './Crackers.css';

const Crackers = () => {
    const confettiColors = [
        "#f6a4eb", "#f9f871", "#ff5f5f", "#7affc9", "#96f7d2", "#ffd966", "#9aa2ff", "#ff9d76"
    ];

    const confettiAnimation = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: [0.5, 1, 1],
            opacity: [1, 0.8, 0],
            rotate: [0, 180, 360],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" },
        }
    };

    return (
        <div className="crackers-container">
            {Array.from({ length: 8 }).map((_, crackerIndex) => (
                <div
                    key={crackerIndex}
                    className="cracker-burst"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`
                    }}
                >
                    {Array.from({ length: 10 }).map((_, confettiIndex) => (
                        <motion.div
                            key={confettiIndex}
                            className="confetti-piece"
                            style={{
                                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                                width: `${Math.random() * 5 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                transform: `rotate(${Math.random() * 360}deg)`
                            }}
                            variants={confettiAnimation}
                            initial="hidden"
                            animate="visible"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Crackers;
