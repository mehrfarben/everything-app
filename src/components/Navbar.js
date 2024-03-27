import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'>THE App</span>
        </Link>
        <span className='navbuttons'>
          <Link to='/'>
            <button className='home-btn, navbtn'>Home</button>
          </Link>
          <Link to='/contact'>
            <button className='contact-btn, navbtn'>Contact</button>
          </Link>
        </span>
      </div>
    </>
  )
}

export default Navbar
