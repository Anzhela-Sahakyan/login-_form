import React from "react";
import { useState } from "react";

export default function LastName() {
  const [lastName, setLastName] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(lastName);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Last Name</label>
        <input
          type="text"
          placeholder="Smith"
          className="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
    </>
  );
}
