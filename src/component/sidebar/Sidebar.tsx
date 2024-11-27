import React from 'react'
import style from './sidebar.module.css'
import { Logout } from '../logout/Logout'
import { NavLink } from 'react-router'
export const Sidebar = () => {

const options = [
  {
    title: 'Home',
    routes: 'home'
  },
  {
    title: 'Login',
    routes: 'login'
  },
  {
    title: 'Register',
    routes: 'register'
  },
  {
    title: 'Formulario',
    routes: 'form'
  },
]

  return (
    <div className={style.container}>
      <div style={{width: '100%'}}>
        {
          options.map((option, index) => (
            <NavLink to={option.routes}>
              <span
                key={index}
                className={style.option__sidebar}
              >
                {option.title}
              </span>
            </NavLink>
          ))
        }
      </div>

      <Logout/>
    </div>
  )
}
