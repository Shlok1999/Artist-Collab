import Document from './Components/Document/Document'
import Header from './Components/Homepage/Header'
import Navigation from './Components/Navigation'
import Login from './Components/Signup'
import Room from './Components/Rooms/Room'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/document' element={<Document/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
