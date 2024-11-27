import React from 'react'
import { Outlet } from 'react-router'


interface Props {
  children?: React.ReactNode
}
export const Layout = ({children}: Props) => {
  return (
    <>
    <div style={{width: '100%', height: '100px', backgroundColor: 'pink'}}>
      <h1>header</h1>
    </div>
    
      <Outlet/>
      {/* {children} */}
      
    <div style={{width: '100%', height: '100px', backgroundColor: 'blue'}}>
      <h1>Footer</h1>
    </div>
    </>
  )
}
