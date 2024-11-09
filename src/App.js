// src/App.js
import React, { useState, useEffect } from 'react';
import GreetingCard from './GreetingCard';
import Confetti from 'react-confetti';
import Rocket from './Rocket';
import './App.css';

function App() {
    const [showConfetti, setShowConfetti] = useState(true);
    const [showRockets, setShowRockets] = useState(true);

    useEffect(() => {
        // Stop confetti after 5 seconds
        const timer1 = setTimeout(() => setShowConfetti(false), 5000);
        // Stop rockets after 10 seconds (increased to allow all rockets to launch and explode)
        const timer2 = setTimeout(() => setShowRockets(false), 10000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Define an array of x positions and delays for the rockets
    const rocketPositions = [
        { xPosition: 10, delay: 0.5 },
        { xPosition: 20, delay: 1 },
        { xPosition: 30, delay: 1.5 },
        { xPosition: 40, delay: 2 },
        { xPosition: 50, delay: 2.5 },
        { xPosition: 60, delay: 3 },
        { xPosition: 70, delay: 3.5 },
        { xPosition: 80, delay: 4 },
        { xPosition: 90, delay: 4.5 },
    ]; // Array with each rocket's x position and delay

    return (
        <div className="App">
            {showConfetti && <Confetti numberOfPieces={500} recycle={true} />}

            {/* {showRockets && (
                <div className="rocket-container">
                    {rocketPositions.map((rocket, index) => (
                        <Rocket
                            key={index}
                            delay={rocket.delay}
                            xPosition={rocket.xPosition}
                        />
                    ))}
                </div>
            )} */}

            <GreetingCard />
        </div>
    );
}

export default App;
