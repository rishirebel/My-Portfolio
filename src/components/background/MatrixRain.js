import React, { useState, useEffect } from "react";
import './MatrixRain.css'; // Import the CSS file

const MatrixRain = () => {
  const [divs, setDivs] = useState([]);

  // Character set containing numbers, Hindi, and Chinese characters
  const characters = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  // Numbers
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ',  // Hindi vowels
    'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ',  // Hindi consonants
    '你', '我', '他', '的', '是', '了', '不', '在', '有', '这',  // Common Chinese characters
    '中', '国', '人', '们', '和', '大', '小', '子', '地', '天'   // More Chinese characters
  ];

  // Helper function to generate a random index for the character set
  const getRandomCharacter = () => {
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
  };

  // Helper function to create a column object
  const createColumn = () => {
    let num = Math.floor(Math.random() * 4) + 2;
    let left = Math.floor(Math.random() * (100 - num)) + "vw"; // Randomly position across the viewport width

    return {
      id: Math.random(), // Unique ID for each column
      fontSize: num + "vmin",
      width: num + "vmin",
      innerHTML: getRandomCharacter(), // Use custom characters
      top: 0, // Starting from the top
      left: left,
      childCount: 0,
      spans: [],
    };
  };

  // Recursive function to simulate the "matrix rain"
  const func = () => {
    setDivs((prevDivs) => {
      let updatedDivs = prevDivs.map((div) => {
        // Add a span to each div if it has less than 60 children
        if (div.childCount < 60) {
          let newSpan = {
            id: Math.random(),
            color: `rgb(250,${100 - div.childCount},75)`,
            content: getRandomCharacter(), // Use custom characters
            top: div.childCount * 2 + "vh", // Adjust top to move the span down
          };

          return {
            ...div,
            spans: [newSpan, ...div.spans], // Add new span to the beginning
            childCount: div.childCount + 1,
          };
        } else {
          return null; // Remove divs with too many children
        }
      });

      // Filter out removed divs and add two new columns
      updatedDivs = updatedDivs.filter((div) => div !== null);
      updatedDivs.push(createColumn());
      updatedDivs.push(createColumn());

      return updatedDivs;
    });
  };

  useEffect(() => {
    const interval = setInterval(func, 100);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="matrix-container">
      <div className="matrix-rain">
        {divs.map((div) => (
          <div
            key={div.id}
            style={{
              position: "absolute",
              fontSize: div.fontSize,
              width: div.width,
              top: div.top,
              left: div.left,
            }}
          >
            {div.spans.map((span) => (
              <span
                key={span.id}
                style={{
                  position: "absolute",
                  top: span.top, // Move the span down with the updated top value
                  color: span.color,
                }}
              >
                {span.content}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Central box saying "Page Not Found" */}
      <div className="page-not-found">
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default MatrixRain;
