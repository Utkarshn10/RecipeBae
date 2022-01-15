import React from "react";
import "./styles.css";

import PostCard from "../PostCard";
function PostsContainer({posts}) {
  return (
    <div className="posts-container">
      {posts?.map((post) => (
        <div key={post.idMeal}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default PostsContainer;
