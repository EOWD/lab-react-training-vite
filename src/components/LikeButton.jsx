import { useState } from "react";

export function Like() {
  const [likes, setLikes] = useState(0);
  const colors = ["red", "green", "blue"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      style={{ backgroundColor: color, width:'80px', height:'50px'}}
    >
      {likes}Likes
    </button>
  );
}
