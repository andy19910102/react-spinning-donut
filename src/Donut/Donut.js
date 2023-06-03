import React, { useState, useEffect } from 'react';
import './Donut.css'; // 導入你的 CSS 樣式檔
import donutFrames from './donut.json';

const Donut = ({ scaleX, scaleY, color, fontSize }) => {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((currentFrame + 1) % donutFrames.length);
        }, 100); // 0.01 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentFrame]);

    const donutStyle = {
        transform: `scale(${scaleX}, ${scaleY})`,
        color: color,
        fontSize: fontSize
    };

    return (
        <div className="donut-container">
            <pre className="donut" style={donutStyle}>
                {donutFrames[currentFrame]}
            </pre>
        </div>

    );
};

Donut.defaultProps = {
    scaleX: 1,
    scaleY: 1,
    color: "#000",
    fontSize: 8
};

export default Donut;
