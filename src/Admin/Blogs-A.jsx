import '../Styles/Admin/Blogs-A.css';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { BlogContext } from '../Constants/Constans';
import { ToastContainer, toast } from 'react-toastify';

const BlogsA = () => {
  // Use destructuring for useState
  const [blogData, setBlogData] = useState({
    title: "",
    date: "",
    link: "",
    description: "",
  });

  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const changehandler = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (
      blogData.title.trim() === '' ||
      blogData.date.trim() === '' ||
      blogData.link.trim() === '' ||
      blogData.description.trim() === ''
    ) {
      toast.error('Fill In The Inputs...');
      return;
    }
  
    const blog = {
      title: blogData.title,
      date: blogData.date,
      link: blogData.link,
      description: blogData.description,
    };
  
    addBlog(blog);
    toast.success('Created Successfully...');
    setTimeout(() => {
      toast('Go To Blog Page...');
    }, 1000);
  
    // setTimeout(() => {
    //   navigate('/a');
    // }, 6000);
  
    setBlogData({ title: '', date: '', link: '', description: '' });
    e.target.reset();
  };

  return (
    <div className='blog-a'>
      <h1>Create New Blog</h1>
      <form onSubmit={addHandler}>
        <TextField id="outlined-basic" label="Title" variant="outlined" className='inp' name='title' onChange={changehandler} />
        <TextField id="outlined-basic" label="Date Time" variant="outlined" className='inp' name='date' onChange={changehandler} />
        <TextField id="outlined-basic" label="Add Link" variant="outlined" className='inp' name='link' onChange={changehandler} />
        <TextField id="outlined-basic" label="Description" variant="outlined" className='inp' name='description' onChange={changehandler} />
        <Button variant='contained' className='save' type='submit'>Save Blogs</Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BlogsA;
