import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../constants/api";
const PaginationContext = createContext();

/**This is the context I needed to keep states across pages. */

export function PaginationProvider({ children }) {
  const initalPosts = children.props.posts;

  const [listOfPosts, setListOfPosts] = useState(initalPosts);
  const [counter, setCounter] = useState(2);

  const loadmore = async () => {
    setCounter(counter + 1);

    const res = await fetch(`${BASE_URL}/posts?_page=${counter}&_limit=10`);
    const posts = await res.json();
    setListOfPosts((value) => [...value, ...posts]);
  };

  return (
    <PaginationContext.Provider value={{ listOfPosts, loadmore }}>
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationContext;
