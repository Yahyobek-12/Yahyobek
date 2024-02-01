import '../Styles/Blog.css';
import { useContext } from 'react';
import BlogItem from './Blog-Item';
import { v4 as uuidv4 } from 'uuid';
import { BlogContext } from '../Constants/Constans';

const Blog = () => {
    const { blog } = useContext(BlogContext);

  return (
    <div className='blog'>
      <h1>Blog</h1>
      {blog.map(blogItem => (
        <BlogItem key={uuidv4()} blogItem={blogItem} />
      ))}
    </div>
  )
}

export default Blog
