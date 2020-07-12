import React, { useState, useRef, useCallback } from "react";

import { useForm } from "./hooks/useForm";
import { useMeasure } from "./hooks/useMeasure";

import { Home } from "./components/Home";
import { Hello } from "./components/Hello";

const App = () => {
  const [values, handleChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showHome, setShowHome] = useState(true);
  const inputRef = useRef();

  const [rect, inputRef2] = useMeasure([]);

  const [count2, setCount2] = useState(0);

  const increment = useCallback((n) => {
    setCount2(c => c + n)
  }, [setCount2]);

  return (
    <>
      <h1>Hooks Practical</h1>
      <button onClick={() => setShowHome(!showHome)}>Toggle</button>
      {showHome && <Home />}
      <hr />
      <div>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={values.firstname}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            ref={inputRef2}
            id="lastName"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
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

        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
      <hr/>
      <h2>React.memo</h2>
      <div>
        <Hello increment={increment}/>
        <div>Count2: {count2}</div>
      </div>
    </>
  );
};

export default App;
