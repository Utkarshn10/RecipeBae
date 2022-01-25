import React, {useState} from "react";
import Jumbotron from "../../components/Jumbotron";
import {useEffect, useContext} from "react";
import axios from "axios";
import PostContainer from "../../components/PostContainer";
import {MyContext} from "../../context";
import Error from "../404/404";
function Home() {
  const {posts, setPosts} = useContext(MyContext);
  const [found, setFound] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then(({data}) => setPosts(data.meals))
      .catch((error) => {
        console.log(error);
        setFound(false);
      });
  }, []);

  if (!found) {
    return (
      <div>
        <Error />
      </div>
    );
  } else {
    return (
      <div>
        <Jumbotron />
        <PostContainer posts={posts} />
      </div>
    );
  }
}
export default Home;
