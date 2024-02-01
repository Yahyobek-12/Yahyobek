import '../Styles/Admin/Blogs-A.css';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { BlogContext } from '../Constants/Constans';

const BlogsA = () => {
  // Use destructuring for useState
  const [blogData, setBlogData] = useState({
    title: "Salom Aziz Do'stlar",
    date: "2/1/2024",
    description: "lorem ipsum dolor set emet...",
  });

  const { addBlog } = useContext(BlogContext);

  const changehandler = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (blogData.title.trim() === '' || blogData.date.trim() === '' || blogData.description.trim() === '') {
      console.log('write text');
      return;
    }

    const blog = { title: blogData.title, date: blogData.date, description: blogData.description };
    addBlog(blog);

    setBlogData({ title: '', date: '', description: '' });
  };

  return (
    <div className='blog-a'>
      <h1>Create new Blog</h1>
      <form onSubmit={addHandler}>
        <TextField id="outlined-basic" label="Title" variant="outlined" className='inp' name='title' onChange={changehandler} />
        <TextField id="outlined-basic" label="Date Time" variant="outlined" className='inp' name='date' onChange={changehandler} />
        <TextField id="outlined-basic" label="Description" variant="outlined" className='inp' name='description' onChange={changehandler} />
        <Button variant='contained' className='save' type='submit'>Save Blogs</Button>
      </form>
    </div>
  );
};

export default BlogsA;
