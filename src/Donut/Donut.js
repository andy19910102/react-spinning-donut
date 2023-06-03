import React, { useState, useEffect } from 'react';
import donutFrames from './donutFrames';

const Donut = ({ scaleX, scaleY, color, fontSize, frameInterval }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((currentFrame + 1) % donutFrames.length);
        }, frameInterval);

        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentFrame]);

    const donutStyle = {
        transform: `scale(${scaleX}, ${scaleY})`,
        color: color,
        fontSize: fontSize
    };

    return (
        <div className="donut-container" stlye={{ width: "fit-content" }}>
            <pre className="donut" style={{
                fontFamily: "Courier New, Courier, monospace",
                whiteSpace: "pre",
                ...donutStyle
            }}>
                {donutFrames[currentFrame]}
            </pre>
        </div>
    );
};

Donut.defaultProps = {
    scaleX: 1,
    scaleY: 1,
    color: "#000",
    fontSize: 8,
    frameInterval: 100
};

export default Donut;
