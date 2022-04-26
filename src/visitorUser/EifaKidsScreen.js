import React from 'react'
import { CarouselScreen3 } from './carousel/CarouselScreen3'
import { Footer } from './Footer/FooterScreen'
import { NavBarScreen } from './navBar/NavBarScreen'
import pdf from './PERFIL_ESTUDIANTE_EIFA.pdf'
import PlanEstudio from './PLAN_ESTUDIOS_EIFA 2022.pdf'

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

        <div style={{ backgroundColor: '#6f8839', paddingTop: '7vh', paddingBottom: '7vh' }}>
          <div className='container' >
            <center>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
                  <div >
                  <b>★</b> Consta de <b>12 módulos.</b>
                  </div><br></br>
                  <div >
                    <b>★</b> Cada módulo dura <b>6 semanas.</b> 
                  </div><br></br>
                  <div >
                    <b>★</b> Culminará su formación artística siendo el <b>protagonista</b> de una obra infantil. 
                  </div><br></br>
                  <div >
                  <b>★</b> Al final de cada módulo tenemos <b>vacaciones de un mes.</b> 
                  </div>
                </div> 
              </div> 
            </center>          
          </div>
        </div>

        <div className='container' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <center><div className='titulos-grandes-directora' style={{ color: '#d96912', fontSize: '5.3vh'}}>INSCRIPCIONES</div></center>        
          <div className='col-sm-12'>
           <div className='row pantalla-pequenia'>
              <div className='col-sm'>
                <a href="https://wa.link/3h7nxd" target="_blank">
                  <center><img className="teatro-musical-img1 " src= { `./assets/img/clic-aqui.png` } width= "100%" height= "auto" ></img></center>
                </a>
              </div>
            </div>

            <div className='row pantalla-grande' style={{paddingLeft:'6vh'}}>
              <div className='col-12'>
                <a href="https://wa.link/3h7nxd" target="_blank">   
                  <center><img className="teatro-musical-img1 " src= { `./assets/img/clic-aqui.PNG` } width= "30%" height= "auto" ></img></center>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgb(30 54 128)'}}>
          <div className='container' style={{ paddingBottom: '5vw', paddingTop: '5vw'}}>
            <div className='row'>         
              <div className='col-12 col-sm-6' >
                <a href={PlanEstudio} target="_blank">
                <center><img src= { `./assets/img/icono-profesor.png` } className="imagen-con-tamanio"  style={{ paddingTop: '5vh' }}></img></center>
                </a>
              </div>
              <div className='col-12 col-sm-6' >
                <a href={pdf} target="_blank">
                <center><img src= { `./assets/img/icono-profesor2.png` } className="imagen-con-tamanio"  style={{ paddingTop: '10vh', paddingBottom: '5vh' }}></img></center>
                </a>
              </div>
            </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
}
