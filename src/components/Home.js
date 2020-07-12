import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  )

  const data = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count])

  return (
    <div>
      <div>
        {!data ? "Loading..." : data}
      </div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}