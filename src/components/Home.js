import React, { useState, useEffect } from "react";

import { useFetch } from "../hooks/useFetch";
import { useMeasure } from "../hooks/useMeasure";

export const Home = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const data = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "Loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
