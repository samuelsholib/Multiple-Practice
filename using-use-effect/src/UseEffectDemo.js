import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function useEffectDemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  useEffect(() => {

    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 10)}>
        Click to add 10
      </button>
    </div>
  );
}

export default useEffectDemo;
