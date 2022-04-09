import React from 'react'
import { CarouselScreen3 } from './carousel/CarouselScreen3'
import { Footer } from './Footer/FooterScreen'
import { NavBarScreen } from './navBar/NavBarScreen';

export const EifaKidsScreen = () => {
  
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",3);
  return (
    <div>
      <NavBarScreen/>
      <CarouselScreen3/>

      <div style={{ backgroundColor: '#4d5480' }}>
        <div className='container' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <center><i style={{ fontStyle: 'normal', fontSize: '1rem', color: '#ffb357', fontWeight: 'bold' }}>
          EIFA KIDS <i style={{ fontStyle: 'normal' }}>es un programa donde su niño/a puede estudiar para ser</i>
          <i style={{ fontStyle: 'normal' }}> ARTISTA JUNIOR</i><i style={{ fontStyle: 'normal' }}> mención Teatro Musical.</i>
          </i></center>
          <div style={{ paddingTop: '3vh' }}>
            <center><i style={{ fontStyle: 'normal', fontSize: '1rem', color: '#ffb357', fontWeight: 'bold' }}>
            TOMARÁ CLASES DE CANTO, DANZA Y ACTUACIÓN, ENTRE OTRAS ÁREAS.</i></center>
          </div>
        
          <div className='container' style={{ paddingTop: '5vh'}}>
            <center><i style={{ paddingTop: '5vh', fontStyle: 'normal', fontSize: '2rem', color: '#eeede9', fontWeight: 'bold' }}>
              MODALIDAD PRESENCIAL
            </i></center>
          </div>                   
          {/* <div className='row'>
            <div className='col-sm'>
              <img src= { `./assets/img/Ek1.png` } width= "100%" height= "auto"></img>
            </div>
            <div className='col-sm'>
              <img src= { `./assets/img/Ek2.png` } width= "100%" height= "auto" ></img>
            </div>
            <div className='col-sm'>
                <img src= { `./assets/img/Ek3.png` } width= "100%" height= "auto" ></img>
            </div>
          </div> */}


          <div className='row pantalla-pequenia'>
            <div className='col-sm'>
              <img className="teatro-musical-img1 " src= { `./assets/img/Ek1.png` } width= "100%" height= "auto" ></img>
            </div>
            <div className='col-sm'>
              <img className="teatro-musical-img2 " src= { `./assets/img/Ek2.png` } width= "100%" height= "auto" ></img>
            </div>
            <div className='col-sm'>
              <img className="teatro-musical-img3 " src= { `./assets/img/Ek3.png` } width= "100%" height= "auto" ></img>
            </div>
          </div>

          <div className='row pantalla-grande'>
            <div className='col-12'>
              <img className="teatro-musical-img1 " src= { `./assets/img/EkGrande.png` } width= "100%" height= "auto" ></img>
          </div>
        </div>





        </div>
      </div>

      <div className="contenedor">
        <img src= { `./assets/img/Matriculas7.png` } width="100%" height= 'auto'></img>
        <div className="centrado" >
        <b style={{ fontSize: '2.5vw' }}>EL ARTE <i style={{fontWeight: 'bold'}}>FORTALECE</i> LA INTELIGENCIA EMOCIONAL</b>
        </div>
      </div>
      
    

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <img src= { `./assets/img/Ek5.png` } className="card-img-top" alt="..."></img>
           
          </div>
          <div className="card" style={{border:'0'}}>
            <img src= { `./assets/img/Ek6.png` } className="card-img-top" alt="..."></img>
            
          </div>
          <div className="card" style={{border:'0'}}>
            <img src= { `./assets/img/Ek7.png` } className="card-img-top" alt="..."></img>
           
          </div>
        </div>

        <div style={{ backgroundColor: '#6f8839', paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className='container'>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.5rem' }}>
              Consta de 12 módulos, cada módulo dura 6 semanas y culminará su formación artística siendo
              el protagonista de una obra infantil. Al final de cada módulo tenemos vacaciones de un mes.
            </div>            
          </div>
        </div>

        <div className='container' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <center><div style={{ color: '#1e3687', fontSize: '1.5rem', fontWeight: 'bold' }}>PARA MÁS INFORMACIÓN SOBRE LAS PRÓXIMAS MATRÍCULAS</div></center>
          <a href="https://wa.link/3h7nxd" target="_blank">
            <center><img src= { `./assets/img/Matriculas13.png` } width= '35%' height= 'auto' style={{ paddingTop: '2vh' }}></img></center>
          </a>
        </div>

      <Footer/>
    </div>
  )
}
