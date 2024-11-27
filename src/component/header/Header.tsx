import React from 'react'
import style from './header.module.css'

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header__container}>
        <span>LOGO</span>
        <h1>My React WebApp</h1>
        <div className={style.profile}/>
      </div>
    </div>
  )
}

