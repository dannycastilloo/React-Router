import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from "./components/NavBar"
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { About } from './routes/About'
import { Contact } from './routes/Contact'
import { UserProvider } from './context/UserProvider'

export const App = () => {
  return (
    <>
      <UserProvider>
        <NavBar></NavBar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={ <Login></Login> }></Route>
          <Route path='/about' element={<About></About >}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>
      </UserProvider>
    </>
  )
}
