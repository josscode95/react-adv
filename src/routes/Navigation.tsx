import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";


import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active' : ''} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : ''} >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''} >Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/users" element={<h2>Users</h2>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation