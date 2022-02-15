import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexScreen } from './visitorUser/IndexScreen'

export const EifaTeatroApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexScreen/>} />
        </Routes>      
      </BrowserRouter>

     
    </>
  )
}
