import React from 'react'
import { CarouselScreen2 } from './carousel/CarouselScreen2'
import { Footer } from './Footer/FooterScreen'
import { NavBarScreen } from './navBar/NavBarScreen'
import pdf from './PERFIL_ESTUDIANTE_EIFA.pdf'
import PlanEstudio from './PLAN_ESTUDIOS_EIFA 2022.pdf'

export const TeatroMusicalScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",2);
  return (
<div>
    <NavBarScreen/>
    <CarouselScreen2/>
    <div style={{ backgroundColor: '#4d5480' }}>
        <div className='container' style={{ paddingTop: '7vh', paddingBottom: '5vh' }}>
          <div className='col-sm-12'>
            <center>
              <img src= { `./assets/img/Matriculas1.png` } className="imagen-con-tamanio"  style={{ paddingTop: '5vh' }}></img>
              <h2 style={{ paddingTop: '6vh', paddingBottom:'6vh', textAlign: 'center', fontSize: '2rem', color: '#eeede9', fontWeight:'900' }}>MODALIDAD PRESENCIAL</h2>
            </center>
            <div className='row pantalla-pequenia'>
              <div className='col-sm'>
                <img className="teatro-musical-img1 " src= { `./assets/img/Matriculas2.png` } width= "100%" height= "auto" ></img>
              </div>
              <div className='col-sm'>
                <img className="teatro-musical-img2 " src= { `./assets/img/Matriculas3.png` } width= "100%" height= "auto" ></img>
              </div>
              <div className='col-sm'>
                <img className="teatro-musical-img3 " src= { `./assets/img/Matriculas4.png` } width= "100%" height= "auto" ></img>
              </div>
            </div>

            <div className='row pantalla-grande' style={{paddingLeft:'6vh'}}>
              <div className='col-12'>
                <img className="teatro-musical-img1 " src= { `./assets/img/Matriculas5.PNG` } width= "100%" height= "auto" ></img>
              </div>
            </div>
          </div>
        </div>
    </div>

      
        <div className="contenedor" >
          <img src= { `./assets/img/Matriculas7.png` } width="100%" height= 'auto'></img>
          <div className="centrado" >
            NO NECESITAS EXPERIENCIA PREVIA, PERO SI MUCHA <i style={{fontWeight: 'bold'}}>DIDSCIPLINA, DEDICACIÓN Y AMOR</i> POR EL ARTE
          </div>
        </div>

        
        <div className='container' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className='row'>         
            <div className='col-12 col-sm-6' >
              <a href={PlanEstudio} target="_blank">
                <center><img src= { `./assets/img/Matriculas11.png` } width= '80%' height= 'auto'></img></center>
              </a>
            </div>
            <div className='col-12 col-sm-6'>
              <a href={pdf} target="_blank">
                <img src= { `./assets/img/Matriculas12.png` } width= '100%' height= 'auto'></img>
              </a>
            </div>
          </div>
        </div>

        <div>
          <img src= { `./assets/img/banner-conviertete-en-el-protagonista-con-frase.png` } width="100%" height= 'auto'></img>
        </div>
    {/* pdfs */}

      <div style={{   paddingBottom: '4vh' }}>
          <div className='container'> 
            <div style={{ paddingBottom: '2vh', paddingTop: '2vw' }}> 
              <h3 className='titulos-grandes-directora' style={{ textAlign: 'center', color: '#33408e', fontSize: '2.5rem'}}><b style={{color:'#33408e'}}>NUESTRAS CLASES</b></h3> 
                <div style={{ textAlign: 'center', color: '#33408e', paddingTop: '2vh', fontSize: '1.9rem'}}>
                  Como parte de su formación integral en actuación, canto y baile, 
                  nuestros estudiantes reciben diferentes módulos, conocimientos y experiencia en el escenario 
                  en nuestro Teatro Victoria.<br></br> <br></br>
                  Además formamos parte de proyectos artísticos a gran escala en los que los estudiantes y 
                  miembros de EIFA tienen la experiencia de poner en práctica sus conocimientos. 
                </div>                 
            </div>
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <img src= { `./assets/img/EifaTeatro3.JPG` }></img>           
          </div>
          <div className="card" style={{border:'0'}}>
            <img src= { `./assets/img/EifaTeatro2.JPG` } ></img>            
          </div>
        </div>
    
        <div style={{ backgroundColor: '#6f8839', paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{paddingBottom:'4vh'}}>
                  <center><img src= { `./assets/img/icono-graduado.png` } width= '35%' height= 'auto'></img></center>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{padding:"3vh"}}>
                <h3 style={{ paddingBottom: '2vh', color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' }}>AL CULMINAR LA CARRERA OBTENDRÁS</h3>
                <div style={{ paddingBottom: '2vh', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem' }}>Una Acreditación como<b style={{color:'white'}}> ARTISTA
                  PROFESIONAL </b> Mención Teatro Musical CANTO, DANZA Y ACTUACIÓN. Avalado
                  por EIFA Cía. Ltda.</div>
              </div>
            </div>
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
