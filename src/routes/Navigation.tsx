import { Suspense } from "react";
import { Routes, Route, NavLink, Navigate, BrowserRouter } from "react-router-dom";
import { router } from "./routes";

import logo from '../logo.svg'


const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                router.map(({to, name}) => (
                  <li key={to}>
                    <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              router.map(({path, Component}) => (
                <Route path={path} element={<Component />} key={path} />
              ))
            }
            <Route path="/*" element={<Navigate to={router[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation