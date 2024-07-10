import '../Styles/Navigation.css'
function Navigation() {
  return (
    <nav className='navigation'>
        <ul className="nav-container">
            <li><h3>LOGO</h3></li>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li onClick={()=>window.location.href="/room"} className='get-started'>Get Started</li>
        </ul>
    </nav>
  )
}

export default Navigation