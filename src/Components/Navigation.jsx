import '../Styles/Navigation.css'
import { useAuth } from './utils/AuthContext'
import { useNavigate } from 'react-router-dom'
function Navigation() {
  const {user,logoutUser} = useAuth();
  const navigate = useNavigate();

  const logoutClick = ()=>{
    navigate('/login')
  }
  return (
    <nav className='navigation'>
        <ul className="nav-container">
            <li><h3>LOGO</h3></li>
            {
              user?<li onClick={logoutUser}>Logout</li>:
              <li><a href="/login">Login</a></li>
            }
            
            <li>Products</li>
            <li>About</li>
            <li onClick={()=>window.location.href="/room"} className='get-started'>Get Started</li>
        </ul>
    </nav>
  )
}

export default Navigation