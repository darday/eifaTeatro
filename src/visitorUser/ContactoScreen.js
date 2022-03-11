import React from 'react'
import { CarouselScreen } from './carousel/CarouselScreen'
import { Footer } from './Footer/FooterScreen'
import { MapsScreen } from './Maps/MapsScreen'
import { NavBarScreen } from './navBar/NavBarScreen'

export const ContactoScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",5);
  return (
    <div>
      <NavBarScreen/>
      <CarouselScreen/>

      <div>
        <img src= { `./assets/img/Contacto1.png` } width="100%" height= 'auto'></img>
      </div>

      <div className='container' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className='row'>
          <div className='col-12 col-sm-6' style={{paddingBottom:'5vh'}}>
            <h1 className='titulos-grandes' style={{ color:'#4d5480' }}>CONTACTOS</h1>
            <div style={{ textAlign: 'justify', paddingTop: '5vh', paddingBottom: '3vh', color: '#666666', fontSize: '1.1rem' }}>
              Estamos ubicados en las calles Rafael León y Jonás Guerrero (esquina), sector González Suárez, a 
              unacuadra del Hotel Quito, cerca del Mirador de Guápulo.
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Whatsapp:</b> 099 891 7202 
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Link directo:</b> <a href= 'https://wa.link/3h7nxd' target="_blank">Click Aquí!</a> 
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Facebook:</b> Escuela Integral de Formación de Artistas-EIFA 
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Instagram:</b> @eifa-teatromusical 
            </div>
          </div>
          <div className='col-12 col-sm-6' >
            <h1 className='titulos-grandes' style={{ color:'#4d5480' }}>UBICACIÓN</h1>
            <MapsScreen/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
