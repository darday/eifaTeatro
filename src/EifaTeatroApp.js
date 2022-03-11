import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CasasScreen } from './visitorUser/CasasScreen'
import { ContactoScreen } from './visitorUser/ContactoScreen'
import { EifaKidsScreen } from './visitorUser/EifaKidsScreen'
import { IndexScreen } from './visitorUser/IndexScreen'
import { NavBarScreen } from './visitorUser/navBar/NavBarScreen'
import { TeatroMusicalScreen } from './visitorUser/TeatroMusicalScreen'

export const EifaTeatroApp = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<IndexScreen/>} />
          <Route path="/teatro-musical" element={<TeatroMusicalScreen/>} />
          <Route path="/eifa-kids" element={<EifaKidsScreen/>} />
          <Route path="/casas" element={<CasasScreen/>} />
          <Route path="/contacto" element={<ContactoScreen/>} />
        </Routes>      
      </BrowserRouter>

     
    </>
  )
}
