import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(60);
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const restartRef = useRef(null);
  //var part;
  function boldFirstHalfLetters(part) {
    if (typeof part === 'undefined') {
      return ' ';
    }
    const firstHalfIndex = Math.ceil(part.length / 2);
    const firstHalf = part.slice(0, firstHalfIndex);
    const secondHalf = part.slice(firstHalfIndex);
    return <><strong>{firstHalf}</strong>{secondHalf}</>;
  }

  useEffect(() => {
    const splitText = text.split(' ');
    setWords(splitText);
    setCurrentWordIndex(0);
  }, [text]);

  useEffect(() => {
    let interval = null;

    if (isFlashing) {
      const delay = (60 / speed) * 1000; // Calculate the delay in milliseconds
      interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= words.length) {
            setIsFlashing(false);
            return prevIndex;
          }
          return nextIndex;
        });
      }, delay);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isFlashing, words, speed]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(Number(event.target.value));
  };

  const handleStartFlashing = () => {
    setIsFlashing(true);
  };

  const handleStopFlashing = () => {
    setIsFlashing(false);
  };

  const handleRestartFlashing = () => {
    setCurrentWordIndex(0);
    setIsFlashing(true);
    restartRef.current.blur();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">SpeedReader.io</h1>
      <h2>For when you want to get that reading assignment over with</h2>
      <div className="flasher-container">
        <div className={`flasher ${isFlashing ? 'flash' : ''}`}>
          {boldFirstHalfLetters(words[currentWordIndex])}
        </div>
      </div>
      <div className="controls-container">
        <div className="input-group">
          <label htmlFor="speed" className="label">
            Flash speed (wpm):
          </label>
          <input
            type="number"
            id="speed"
            className="input"
            min="1"
            value={speed}
            onChange={handleSpeedChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="text" className="label">
            Enter text:
          </label>
          <input
            type="text"
            id="text"
            className="input"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="button-group">
          {isFlashing ? (
            <button className="button" onClick={handleStopFlashing}>
              Stop Flashing
            </button>
          ) : (
            <button
              className="button"
              onClick={handleStartFlashing}
              disabled={text === ''}
            >
              Start Flashing
            </button>
          )}
          <div className='button-gap'></div>
          <button
            className="button"
            onClick={handleRestartFlashing}
            ref={restartRef}
            disabled={!isFlashing && currentWordIndex === 0}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;