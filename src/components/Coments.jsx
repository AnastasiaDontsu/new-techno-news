import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function Signin() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: "This makes all sense to me!",
          postId: 3,
          userId: 5,
        }),
      });
      const data = await response.json();
      console.log(data);
      setComments([data]);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Typography gutterBottom variant="h5" component="div">
              {comment.user.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comment.body}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
