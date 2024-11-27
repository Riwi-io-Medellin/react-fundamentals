import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
      Desde el home
      <NavLink to='/login'>Ir al LOGIN</NavLink>
    </div>
  )
}

export default Home