import React from "react";
import { useState } from "react";

export default function Email() {
  const [email, setEmail] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Email address</label>
        <input
          type="email"
          placeholder="mark@gmail.com"
          className="email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </>
  );
}
