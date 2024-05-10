import React, { useEffect, useState } from "react";
import AppleCard from "../Pages/AppleCard";
import { Grid, Container, Typography } from "@mui/material";

interface AppleNewsProps {
  title: string;
  urlToImage: string;
  url: string;
}

function AppleNews() {
  const [name, setName] = useState<string>("Ana");
  const [showGreeting, setShowGreeting] = useState<boolean>(false);
  const [names, setNames] = useState<{ id: number; name: string }[]>([]);

  function handleClick() {
    console.log("click");
    setShowGreeting(!showGreeting);
  }

  function skrinContr(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  }

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <div>Hello, {showGreeting ? name : ""}</div>
      <button onClick={handleClick}>Click me!</button>
      <hr></hr>
      <form onSubmit={skrinContr}>
        <input
          type="text"
          placeholder="hello"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppleNews;
