import React from 'react'
import { Outlet } from 'react-router'

const Login = () => {
  return (
    <div>
      Desde el login
      <Outlet/>
    </div>
  )
}

export default Login