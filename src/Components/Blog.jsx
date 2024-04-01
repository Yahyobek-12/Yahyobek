import '../Styles/Blog.css';
import Blogs from './Blogs';

const Blog = () => {
  return (
    <div className='blog'>
        <h1 className='animate__animated animate__fadeInUp'>Blog</h1>
        <div className="blogs-dad">
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
            <Blogs />
        </div>
    </div>
  )
}

export default Blog;
