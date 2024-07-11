import '../../Styles/Header.css'
import { account } from '../../Appwrite/config'
import { useEffect } from 'react'

function Header() {
  useEffect(()=>{
    console.log(account)
  },[])
  return (
    <div className='header-section'>
        <div className="header-text">
            <h1 className="code-collab-head">
                Interact And Collab
            </h1>
            <h3 className='code-collab-subhead'>
                Collab For Documents, Code and Much More.....
            </h3>
        </div>
    </div>
  )
}

export default Header