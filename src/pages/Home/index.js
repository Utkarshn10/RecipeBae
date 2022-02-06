import React, {lazy, Suspense} from "react";
import Jumbotron from "../../components/Jumbotron";
import {useEffect, useContext} from "react";
import axios from "axios";
import {MyContext} from "../../context";
import {Spinner} from "@chakra-ui/react";

const PostContainer = lazy(() => import("../../components/PostContainer"));

function Home() {
  const {posts, setPosts} = useContext(MyContext);

  const renderLoader = () => <Spinner color="red.500" />;

  useEffect(async () => {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then(({data}) => setPosts(data.meals))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <Jumbotron />
        <PostContainer posts={posts} />
      </Suspense>
    </div>
  );
}
export default Home;
