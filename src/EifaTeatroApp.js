import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexScreen } from './visitorUser/IndexScreen'
import { NavBarScreen } from './visitorUser/navBar/NavBarScreen'

export const EifaTeatroApp = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarScreen/>
        <Routes>
          <Route path="/" element={<IndexScreen/>} />
        </Routes>      
      </BrowserRouter>

     
    </>
  )
}
