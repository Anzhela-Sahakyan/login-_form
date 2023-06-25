import React from "react";
import { useState } from "react";

export default function FirstName() {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(firstName);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> First Name</label>
        <input
          type="text"
          placeholder="Mark"
          className="firstName "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </form>
    </>
  );
}
