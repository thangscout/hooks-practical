import React, { useState, useRef } from "react";

import useForm from "./hooks/useForm";

import { Home } from "./components/Home";

const App = () => {
  const [values, handleChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showHome, setShowHome] = useState(false);
  const inputRef = useRef();


  return (
    <>
      <h1>Hooks Practical</h1>
      <button onClick={() => setShowHome(!showHome)}>Toggle</button>
      {showHome && <Home/>}
      <hr/>
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

        <button onClick={() => inputRef.current.focus()}>
          Focus
        </button>
      </div>
    </>
  );
};

export default App;
