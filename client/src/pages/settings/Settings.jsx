import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="./assets/image.jpg" alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display: "none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Safak' />
          <label>Email</label>
          <input type="email" placeholder='safak@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}