import React, { useState } from "react";
import "../App.css";

// nodo:{author:string, text:string, likes:int, children:array}

export default function Card({ author, text, likes, index, children }) {
  const [comment, setComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const handleComment = e => {
    setComment(e.target.value);
  };
  const handleAuthor = e => {
    setCommentAuthor(e.target.value);
  };
  const handleUpLoad = () => {
    const nextChildren = {author:commentAuthor, text:comment, likes:0, children:[]};
    onChildrensChange([...children,nextChildren],index)
    setComment("");
    setCommentAuthor("");
  };
  return (
    <div style={{border:"1px solid black",marginLeft:15}}>
      <h3>{author}</h3>
      <p>{text}</p>
      <h4>Likes: {likes}</h4>
      <input value={comment} onChange={handleComment} placeholder="comment" />
      <input
        value={commentAuthor}
        onChange={handleAuthor}
        placeholder="author"
      />
      <button onClick={handleUpLoad}>upload</button>
      {children.map((child,index) => 
        <Card
          author={child.author}
          text={child.text}
          likes={child.likes}
          children={child.children}
          index={index}
          handleUpLoad={handleUpLoad}
        />
      )}
    </div>
  );
}
