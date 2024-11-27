import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../component/header/Header'
import { Footer } from '../../component/footer/Footer'
import { Sidebar } from '../../component/sidebar/Sidebar'
import style from './layout.module.css'


interface Props {
  children?: React.ReactNode
}
export const Layout = ({children}: Props) => {
  return (
    <div>
      <Header/>
      <div className={style.container}>
        <Sidebar/>
          <Outlet/>
          {children}
      </div>
      <Footer/>
    </div>
  )
}
