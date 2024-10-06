import React, { useEffect, useMemo, useRef, useState } from 'react';

import './App.css';

function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Прошла секунда');
      const newRandomNumbers = randomNumbers.map((number, i) => {
        return <div key={i}>{number}</div>;
      });
      setRandomNumbers(newRandomNumbers);
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
    console.log('effect');
  }, []);

  const randomArrMemo = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const randomArr = [];
      for (let j = 0; j < 10; j++) {
        randomArr.push(Math.floor(Math.random() * 100));
      }
      arr.push(randomArr);
    }
    console.log('randomArrMemo');
    return arr;
  }, []);

  const arrRandomNumbers = arr.map((subArr, index) => {
    const randomIndex = Math.floor(Math.random() * subArr.length);
    return <div key={index}>{subArr[randomIndex]}</div>;
  });

  return (
    <>
      <div>{JSON.stringify(arr)}</div>
      <div>{randomNumbers}</div>
      <div>
        <h1>{intervalId.current}</h1>
      </div>
      <div>{arrRandomNumbers}</div>
    </>
  );
}

export default App;
