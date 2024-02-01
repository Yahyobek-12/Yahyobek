
const BlogItem = ({ blogItem }) => {
  return (
    <div className='blog-card'>
      <h3>{blogItem.title}</h3>
      <h3>{blogItem.date}</h3>
      <h3>{blogItem.link}</h3>
      <p>{blogItem.description}</p>
    </div>
  )
}

export default BlogItem
