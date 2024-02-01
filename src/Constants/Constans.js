import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

const Constans = ({ children }) => {
    const initialBlogState = JSON.parse(localStorage.getItem("blog")) || [];
    const [blog, setBlog] = useState(initialBlogState);

    const addBlog = (item) => {
        const newItem = { title: item.title, date: item.date, link: item.link, description: item.description };
        const newArr = [...blog, newItem];
        setBlog(newArr);
    };

    const deleteBlog = (index) => {
        const newArr = [...blog];
        newArr.splice(index, 1);
        setBlog(newArr);
    };

    useEffect(() => {
        localStorage.setItem("blog", JSON.stringify(blog));
    }, [blog]);

    return (
        <BlogContext.Provider value={{ addBlog, deleteBlog, blog }}>
            {children}
        </BlogContext.Provider>
    );
};

export default Constans;
