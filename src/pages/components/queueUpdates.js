import { useState } from 'react';

export default function Counter1() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); // n = 0
        setNumber(n => n + 1); // here setNumber is called with 1
        setNumber(n => n + 1); // here setNumber is called with 2
      }}>+3</button>
    </>
  )
}
