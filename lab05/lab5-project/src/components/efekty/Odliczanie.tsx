import React, { useState, useEffect } from 'react';

const Odliczanie: React.FC = () => {
  const [licznik, setLicznik] = useState(15.0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | null = null;

    if (isRunning && licznik > 0) {
      interval = setInterval(() => {
        setLicznik((prevLicznik) => Math.max(prevLicznik - 0.1, 0));
      }, 100);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isRunning, licznik]);

  const handleButtonClick = () => {
    if (licznik === 0) return;
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <div>{licznik.toFixed(1)} sek</div>
      <button onClick={handleButtonClick} disabled={licznik === 0}>
        {licznik === 0 ? 'Odliczanie zakończone' : isRunning ? 'STOP' : 'START'}
      </button>
    </div>
  );
};

export default Odliczanie;