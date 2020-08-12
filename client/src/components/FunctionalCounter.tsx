import React, { FC, useState, useCallback } from 'react';
const FunctionalCounter: FC<{}> = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const updateCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      switch (e.currentTarget.innerText) {
        case '-':
          setCount(count - 1);
          break;
        case '+':
        default:
          setCount(count + 1);
          break;
      }
    },
    [count]
  );
  return (
    <div>
      <h2>Functional Component</h2>
      <h1>{count}</h1>
      <button onClick={updateCount}>+</button>
      <button onClick={updateCount}>-</button>
    </div>
  );
};
export default FunctionalCounter;
