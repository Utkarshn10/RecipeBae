import React, {lazy, Suspense} from "react";
import {Spinner} from "@chakra-ui/react";
import "./styles.css";

const PostCard = lazy(() => import("../PostCard"));

function PostsContainer({posts}) {
  const renderLoader = () => <Spinner color="red.500" />;
  return (
    <div className="posts-container">
      <Suspense fallback={renderLoader()}>
        {posts && posts.map((post) => <PostCard key={post.idMeal} {...post} />)}
      </Suspense>
    </div>
  );
}

export default PostsContainer;
