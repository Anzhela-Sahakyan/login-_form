import React from "react";
import { useState } from "react";

export default function Password() {
  const [pass, setPass] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(pass);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Password</label>
        <input
          type="password"
          placeholder="Password"
          className="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </form>
    </>
  );
}
