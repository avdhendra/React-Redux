import {Outlet} from 'react-router-dom';
import React from 'react'
import Header from './Header';

function Layout() {
  return (
    <>
    <Header/>
    <div className='App'>
        
        <Outlet/>
    </div>
    </>
  )
}

export default Layout