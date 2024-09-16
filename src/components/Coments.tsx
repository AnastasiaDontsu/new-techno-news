import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface Comment {
  id: number;
  body: string;
  user: {
    username: string;
  };
}

const Signin: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
      .then((response) => response.json())

      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return <div></div>;
};

export default Signin;
