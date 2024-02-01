import { createContext, useState } from "react";

export const BlogContext = createContext();

const Constans = ({ children }) => {
    const [blog, setBlog] = useState([]);

     const addBlog = (item) => {
        const newItem = { title: item.title, date: item.date, description: item.description }
        const newArr = [...blog, newItem];
        setBlog(newArr);
        console.log(blog);
     };

  return (
    <BlogContext.Provider value={{ addBlog, blog }}>
        {children}
    </BlogContext.Provider>
  )
}

export default Constans
