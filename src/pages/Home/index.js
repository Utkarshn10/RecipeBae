import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import {useEffect, useState} from "react";
import axios from "axios";
import PostContainer from "../../components/PostContainer";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?&api_key=74ZLKu8mcuGKcl8PclrwqnxIzSs8j8eOBkiyNCwM&start_date=2017-07-08&end_date=2017-08-10"
      )
      .then((data) => setPosts(data.data))
      // .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      // .then(({data}) => setPosts(data.meals))
      .catch((error) => console.log(error.message));
  });
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <PostContainer posts={posts} />
    </div>
  );
}
export default Home;
