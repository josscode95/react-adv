import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { FormikAbstract, RegisterPage, FormikBasic, FormikYupPage, FormikComponents, RegisterFormikPage, DynamicForm } from "../03-forms/pages";

import logo from '../logo.svg'

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active' : ''} >Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active' : ''} >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/yup-page" className={({isActive}) => isActive ? 'nav-active' : ''} >Formik Yup Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({isActive}) => isActive ? 'nav-active' : ''} >Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={({isActive}) => isActive ? 'nav-active' : ''} >Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={({isActive}) => isActive ? 'nav-active' : ''} >Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({isActive}) => isActive ? 'nav-active' : ''} >Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasic />} />
          <Route path="/yup-page" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstract" element={<FormikAbstract />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation