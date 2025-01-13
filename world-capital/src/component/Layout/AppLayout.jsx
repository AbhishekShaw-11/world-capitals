import React from 'react'
import Header from '../UI/Header'
import Footers from '../UI/Footers'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    (<div>
      <Header/>
      <Outlet/>
      <Footers/>
      
    </div>)
  );
}

export default AppLayout
