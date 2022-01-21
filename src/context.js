import {createContext, useState} from "react";

export const MyContext = createContext();

function Appcontext({children}) {
  const [posts, setPosts] = useState([]);
  return (
    <MyContext.Provider value={{posts, setPosts}}>
      {children}
    </MyContext.Provider>
  );
}

export default Appcontext;
