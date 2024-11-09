import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './GreetingCard.css';

const GreetingCard = () => {
    const sisterName = "Didi";

    const backgroundImages = [
        "https://cdn.pixabay.com/photo/2024/06/22/14/44/ai-generated-8846452_1280.png",
        "https://cdn.pixabay.com/photo/2020/12/16/04/15/man-5835659_640.jpg",
        "https://cdn.pixabay.com/photo/2017/09/05/00/42/boy-2716108_640.jpg",
    ];
    const frameImages = [
        "https://cdn.pixabay.com/photo/2024/01/16/18/33/ai-generated-8512823_640.jpg",  
        "https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520240_640.jpg",
        "https://cdn.pixabay.com/photo/2023/08/18/08/05/girl-8198028_640.png",
    ];

    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    
    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBgIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
            // Show confetti when the background changes
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 20000); // Hide confetti after 1 second
        }, 2000);

        return () => clearInterval(bgInterval);
    }, [backgroundImages.length]);

    useEffect(() => {
        const frameInterval = setInterval(() => {
            setCurrentFrameIndex((prevIndex) =>
                prevIndex === frameImages.length - 1 ? 0 : prevIndex + 1
            );
            // Optionally, trigger confetti when the frame changes (or keep it tied to the bg change)
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 9000); // Hide confetti after 1 second
        }, 3000);

        return () => clearInterval(frameInterval);
    }, [frameImages.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // Reduced delay to 3 seconds

        return () => clearTimeout(timer);
    }, []);

    const renderBalloons = () => {
        return Array.from({ length: 20 }).map((_, i) => (
            <div
                key={i}
                className="balloon"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                }}
            />
        ));
    };

    const slideFromBottom = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1 }
    };

    return (
        <div 
            className="card-container"
            style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
        >
            {/* Confetti covering the whole screen */}
            {showConfetti && <Confetti numberOfPieces={500} recycle={true} />}

            <div className="balloon-container">
                {renderBalloons()}
            </div>

            {showContent && (
                <>
                    <motion.h1
                        className="greeting-text"
                        initial={slideFromBottom.initial}
                        animate={slideFromBottom.animate}
                        transition={slideFromBottom.transition}
                        style={{ color: '#fff', textAlign: 'center', marginTop: '20px' }}
                    >
                        Happy Birthday, {sisterName}! 🎉
                    </motion.h1>

                    <motion.div
                        className="photo-frame"
                        initial={slideFromBottom.initial}
                        animate={slideFromBottom.animate}
                        transition={slideFromBottom.transition}
                        style={{ marginTop: '20px', border: '2px solid #fff', padding: '10px' }}
                    >
                        <img src={frameImages[currentFrameIndex]} alt={`${sisterName}'s photo`} className="sister-image" />
                    </motion.div>

                    <motion.div
    className="wishes"
    initial={slideFromBottom.initial}
    animate={slideFromBottom.animate}
    transition={slideFromBottom.transition}
    style={{ color: 'black', textAlign: 'center', marginTop: '20px' }}
>
    <div className="scroll-text">
        <p>Wishing you all the joy and happiness that your heart can hold!</p>
        <p>May this year bring you endless smiles and unforgettable memories.</p>
        <p>Here's to many more birthdays filled with laughter and fun!</p>
        <p>May your day be as bright as your smile and as beautiful as your heart!</p>
    </div>
</motion.div>

                </>
            )}
        </div>
    );
};

export default GreetingCard;
