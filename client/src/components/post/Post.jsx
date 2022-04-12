import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img 
      className='postImg'
      src="../assets/post.jpg" alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis natus hic 
        quisquam quam perferendis non, architecto rem labore quod iste provident voluptatem 
        impedit numquam corporis minima cum culpa? Voluptas, asperiores.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis natus hic 
        quisquam quam perferendis non, architecto rem labore quod iste provident voluptatem 
        impedit numquam corporis minima cum culpa? Voluptas, asperiores.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis natus hic 
        quisquam quam perferendis non, architecto rem labore quod iste provident voluptatem 
        impedit numquam corporis minima cum culpa? Voluptas, asperiores.
      </div>
    </div>
  )
}