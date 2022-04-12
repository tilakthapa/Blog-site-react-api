import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
        className='singlePostImg'
        src="./assets/man.jpg" alt="" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Tilak</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam veniam eveniet architecto 
          dolores doloremque, omnis aliquid commodi voluptates saepe quis? Voluptatem hic ullam 
          molestias laborum in tempore quod explicabo voluptate.Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Numquam veniam eveniet architecto dolores doloremque, omnis aliquid commodi 
          voluptates saepe quis? Voluptatem hic ullam molestias laborum in tempore quod explicabo 
          voluptate.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam veniam eveniet 
          architecto dolores doloremque, omnis aliquid commodi voluptates saepe quis? Voluptatem hic ullam 
          molestias laborum in tempore quod explicabo voluptate.Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Numquam veniam eveniet architecto dolores doloremque, omnis aliquid commodi 
          voluptates saepe quis? Voluptatem hic ullam molestias laborum in tempore quod explicabo voluptate.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam veniam eveniet architecto 
          dolores doloremque, omnis aliquid commodi voluptates saepe quis? Voluptatem hic ullam 
          molestias laborum in tempore quod explicabo voluptate.</p>
      </div>
    </div>
  )
}
