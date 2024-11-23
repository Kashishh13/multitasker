import React, { useState, useEffect } from 'react';
import './Swatch.css';

const Swatch = () => {
  const [time, setTime] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (prevMilliseconds === 99) {
            setTime((prevTime) => prevTime + 1);
            return 0;
          }
          return prevMilliseconds + 1;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setMilliseconds(0);
  };

   const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}:${milliseconds}`;
  };

  return (
    <div className='sw'>
    <div className="stopwatch-container">
    
      <h1>Time’s ticking, but you’re in control!</h1>
      <div className="time-display">
        {formatTime()}
      </div>
      <div className="buttons-container">
        {!isRunning ? (
          <button onClick={startStopwatch} className="start-button">Start</button>
        ) : (
          <button onClick={stopStopwatch} className="stop-button">Stop</button>
        )}
        <button onClick={resetStopwatch} className="reset-button">Reset</button>
      </div>
    </div>
    </div>
  );

 
 
  
};

export default Swatch;
