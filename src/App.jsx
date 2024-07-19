import Document from './Components/Document/Document'
import Header from './Components/Homepage/Header'
import Navigation from './Components/Navigation'
import Login from './Components/Login'
import Room from './Components/Rooms/Room'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Components/Signup'
import PrivateRoutes from './Components/utils/PrivateRoute'
import { AuthProvider } from './Components/utils/AuthContext'
function App() {
  return (
    <>
      <Router>

      <AuthProvider>
      <Navigation />

        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoutes/>}>
            <Route path='/room' element={<Room />} />
            <Route path='/document/:roomId' element={<Document />} />
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
