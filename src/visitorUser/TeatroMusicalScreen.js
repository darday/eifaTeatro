import React from 'react'
import { CarouselScreen2 } from './carousel/CarouselScreen2'
import { Footer } from './Footer/FooterScreen'

export const TeatroMusicalScreen = () => {
  return (
<div>
    <CarouselScreen2/>
    <div style={{ backgroundColor: '#4d5480' }}>
        <div className='container' style={{ paddingTop: '5vh', paddingBottom: '15vh' }}>
          <div className='col-sm-12'>
            <center>
              <img src= { `./assets/img/Matriculas1.png` } width="30%" height= 'auto' style={{ paddingTop: '5vh' }}></img>
              <h2 style={{ paddingTop: '5vh', textAlign: 'center', fontSize: '2rem', color: '#eeede9', fontWeight:'900' }}>MODALIDAD PRESENCIAL</h2>
            </center>
            <div className='row'>
            <div className='col-sm'>
              <img src= { `./assets/img/Matriculas2.png` } width= "65%" height= "auto" style={{ marginLeft: '6vh', paddingTop: '5vh' }}></img>
            </div>
            <div className='col-sm'>
              <img src= { `./assets/img/Matriculas3.png` } width= "100%" height= "auto" style={{ marginLeft: '0vh', paddingTop: '5vh' }}></img>
            </div>
            <div className='col-sm'>
              <img src= { `./assets/img/Matriculas4.png` } width= "100%" height= "auto" style={{ marginLeft: '4vh', paddingTop: '5vh' }}></img>
            </div>
          </div>
          </div>
        </div>
    </div>

      
        <div className="contenedor">
          <img src= { `./assets/img/Matriculas7.png` } width="100%" height= 'auto'></img>
          <div className="centrado" >
            NO NECESITAS EXPERIENCIA PREVIA, PERO SI MUCHA <i style={{fontWeight: 'bold'}}>DIDSCIPLINA, DEDICACIÓN Y AMOR</i> POR EL ARTE
          </div>
        </div>

        <div className='container'>
          <div style={{ paddingBottom: '5vh' }}>
            <div className='row'>
              <div className='col-12 col-sm-6'>
              <center><img src= { `./assets/img/Matriculasicono9.png` } width="35%" height= 'auto' style={{ paddingTop: '10vh' }}></img></center>
                <div className='titulos-grandes' style={{ textAlign: 'center', paddingTop: '10vh', fontSize: '1.5rem',color:'#4d5480'}}>CONVENIOS INTERNACIONALES</div>
                <div style={{ textAlign: 'center', padding: '5vh',color:'#4d5480', fontSize: '1.5rem' }}>En Argentina con la Fundación Julio
                    Bocca dónde puedes continuar tus estudios como Intérprete en Teatro Musical .</div>
              </div>
              <div className='col-12 col-sm-6'>
              <center><img src= { `./assets/img/Matriculasicono10.png` } width="35%" height= 'auto' style={{ paddingTop: '10vh' }}></img></center>
                <div className='titulos-grandes' style={{ textAlign: 'center', fontSize: '1.5rem', paddingTop: '10vh',color:'#4d5480' }}>CONTAMOS CON TEATRO PROPIO</div>
                <div style={{ textAlign: 'center', padding: '5vh',color:'#4d5480', fontSize: '1.5rem'}}>También contamos con nuestro
                    propio teatro para los estudiantes, el @TeatroVictoriaEC</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src= { `./assets/img/banner-conviertete-en-el-protagonista-con-frase.png` } width="100%" height= 'auto'></img>
        </div>
        
        <div className='container' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className='row'>
            <div className='col-12 col-sm-6' >
              <center><img src= { `./assets/img/Matriculas11.png` } width= '80%' height= 'auto'></img></center>
            </div>
            <div className='col-12 col-sm-6'>
              <img src= { `./assets/img/Matriculas12.png` } width= '100%' height= 'auto'></img>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#6f8839', paddingTop: '10vh', paddingBottom: '10vh' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <center><img src= { `./assets/img/icono-graduado.png` } width= '35%' height= 'auto'></img></center>
              </div>
              <div className='col-12 col-sm-6'>
                <h3 style={{ paddingBottom: '2vh', color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}>TÍTULO QUE OBTIENES</h3>
                <div style={{ paddingBottom: '2vh', color: '#ffffff', textAlign: 'justify', fontSize: '1.5rem' }}>Acreditación <b style={{color:'white'}}>ARTISTA PROFESIONAL
                  </b> mención Teatro Musical CANTO, DANZA Y ACTUACIÓN.</div>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.5rem' }}>Avalado por la Compañía de Teatro Musical EIFA, debidamente legalizada.</div>
              </div>
            </div>
          </div>
        </div>

        <div className='container' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
          <center><div style={{ color: '#1e3687', fontSize: '1.5rem', fontWeight: 'bold' }}>¿DESEAS INSCRIBIRTE?</div></center>
          <center><img src= { `./assets/img/Matriculas13.png` } width= '35%' height= 'auto' style={{ paddingTop: '2vh' }}></img></center>
        </div>
      <Footer/>
</div>
  )
}
