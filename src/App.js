import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

// nodo:{author:string, text:string, likes:int, children:array}

const root = {
  author: "cristian",
  text: "lala",
  likes: 1,
  children: [
    {
      author: "comentguy1",
      text: "lolo",
      likes: 1,
      children: [
        { author: "othercomentguy1", text: "lele", likes: 4, children: [] }
      ]
    },
    { author: "comentguy2", text: "lule", likes: 0, children: [] }
  ]
};

function App() {
  const [state, setState] = useState(root);
  const handleUpLoad = (nextChildren) => {
    setState(nextChildren);
  };
  return (
    <div>
      <Card
        author={state.author}
        text={state.text}
        likes={state.likes}
        children={state.children}
        index="0"
        handleUpLoad={handleUpLoad}
      />
    </div>
  );
}

export default App;
