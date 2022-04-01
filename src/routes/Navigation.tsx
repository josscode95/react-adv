import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";


import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : ''} >Shopping</NavLink>
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
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/users" element={<h2>Users</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation