import React, { useState, useEffect } from "react";

import useForm from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [values, handleChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const data = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <h1>Hooks Practical</h1>
      {!data ? "Loading..." : <h2>{data}</h2>}
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <br />
      <br />
      <div>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={values.firstname}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default App;
