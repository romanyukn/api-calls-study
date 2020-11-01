import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data } = await axios.get(apiEndPoint);
    const newPosts = data.map((post) => {
      return <p key={post.id}>{post.title}</p>;
    });
    setPosts(newPosts);
  };

  return <div>{posts}</div>;
}
