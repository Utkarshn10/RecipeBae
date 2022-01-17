import React from "react";
import "./styles.css";

import PostCard from "../PostCard";
function PostsContainer({posts}) {
  return (
    <div className="posts-container">
      {posts?.map((post) => (
        <PostCard key={post.idMeal} {...post} />
      ))}
    </div>
  );
}

export default PostsContainer;
