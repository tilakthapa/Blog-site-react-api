import './write.css'

export default function Write() {
  return (
    <div className="write">
      <img className='writeImg' src="./assets/man.jpg" alt="" />
      <form className="writeForm">

        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id='fileInput' style={{display: "none"}} />
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>

        <div className="writeFormGroup">
          <textarea type="text" className='writeInput writeText' placeholder='Tell you story......'></textarea>
          <button className='writeSubmit'>Publish</button>
        </div>

      </form>
    </div>
  )
}