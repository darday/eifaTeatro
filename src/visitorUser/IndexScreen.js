import React from 'react'
import { CarouselScreen } from './carousel/CarouselScreen'
import { NavBarScreen } from './navBar/NavBarScreen'
import { Footer } from './Footer/FooterScreen'
import { NavBarTMScreen } from './navBarTeatroMusical/NavBarTMScreen'


export const IndexScreen = () => {
  return (
    <>
        <CarouselScreen/>
        <div><h1>IndexScreen</h1></div>
      <NavBarScreen/>
      <div style={{ backgroundColor: 'rgb(77 84 128)', paddingBottom: '4vh' }}>
        <div className='container'> 
          <div style={{ paddingBottom: '4vh' }}> 
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <img src= { `./assets/img/QS2.png` } width="100%"></img> 
                <h3 style={{ textAlign: 'justify', color: '#e8eaed'}}>¿Quiénes somos?</h3> 
                <p style={{ textAlign: 'justify', color: '#e8eaed', paddingTop: '2vh'}}>EIFA es una Escuela Integral de Formación de Artistas que trabaja para aportar al medio
                  cultural ecuatoriano con <b>profesionales</b> que desarrollen su talento creativo, escénico y musical,
                  liderando la gestión, participación y producción de sus propios proyectos, de manera ética y
                  responsable. La Escuela propone consolidarse como un referente nacional e internacional en la
                  formación de profesionales en el arte, fortaleciendo al máximo sus capacidades, con el propósito
                  de formar a los mejores artistas del país e impulsar su desarrollo cultural.
                  Para ello, EIFA cuenta con la guía de docentes especializados, formatos y espacios idóneos, así
                  como un programa de <b>formación de tres años en canto, baile y actuación,</b> desde una perspectiva
                  de innovación, favorable al desempeño escénico y musical para ejercer un liderazgo en el
                  campo artístico y cultural en el contexto nacional e internacional.
                </p>   
              </div>
              <div className='col-12 col-sm-6'>
                <img src= { `./assets/img/QS.png` } width="100%" height= 'auto'></img>
              </div>
            </div>               
          </div>
        </div>
      </div>

      <div>
        <div className='container'>
          <div style={{ paddingBottom: '15vh' }}>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <h1 style={{ textAlign: 'center', fontSize: '60px', paddingTop: '10vh' }}>MISIÓN</h1>
                <p style={{ textAlign: 'justify', paddingTop: '5vh' }}>EIFA es una Escuela Integral de 
                  Formación de Artistas que trabaja para aportar al medio cultural ecuatoriano con profesionales
                  que desarrollen su talento creativo, escénico y musical, liderando la gestión y producción de 
                  sus propios proyectos de manera ética yresponsable.</p>
              </div>
              <div className='col-12 col-sm-6'>
                <h1 style={{ textAlign: 'center', fontSize: '60px', paddingTop: '10vh' }}>VISIÓN</h1>
                <p style={{ textAlign: 'justify', paddingTop: '5vh' }}>La Escuela de Formación de Artistas 
                EIFA se consolidará como un referente nacional e internacional en la formación de 
                profesionales en el arte, fortaleciendo al máximo sus capacidades, con el propósito de ofertar
                los mejores artistas del país e impulsar el desarrollo cultural.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#e77825' }}> 
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6'>
             <center><img src= { `./assets/img/Mary.png` } width= "90%" height= "550px"  style={{ paddingBottom: '-10vh'}}></img></center>                
              <h1 style={{color: '#e8eaed' }}>DIRECTORA</h1>
              <h2 style={{ color: '#e8eaed' }}>MARÍA DEL CARMEN CALDERÓN</h2>
              <p style={{ textAlign: 'justify', color: '#e8eaed' }}>Educadora, pintora y maquillista. Estudió en el Normal Superior Manuela Cañizares,
                Universidades Central del Ecuador y Estatal de Guayaquil, donde obtuvo los títulos de
                Profesora en Educación Primaria y Doctora en Ciencias de la Educación.</p>                     
            </div>
            <div className='col-12 col-sm-6'>
              <p style={{ textAlign: 'justify', paddingTop: '10vh', color: '#e8eaed'}}>Tiene una trayectoria de treinta y cuatro años de experiencia en Administración y Dirección Educativa, Docencia
                Universitaria, Educación Básica y Educación Inicial. Se ha capacitado a través de varios cursos,
                seminarios y talleres para ejercer habilidades de planificación, manejo de grupos humanos,
                resolución de conflictos, liderazgo, desarrollo del pensamiento crítico y educación ambiental. Se
                ha desempeñado como profesora de Educación Básica, Directora de la Escuela de Educación
                Básica Ciudad de Cuenca, Facilitadora provincial de la reforma curricular, evaluación de
                aprendizajes y desarrollo del Pensamiento Crítico, asesora pedagógica en Librerías L.N.S,
                docente del sistema de nivelación académica de la Universidad Central del Ecuador y directora
                de la Academia para el Desarrollo de Inteligencias Múltiples Búmeran.</p>
              <p style={{ textAlign: 'justify', paddingTop: '10vh', color: '#e8eaed' }}>Tiene una trayectoria de treinta y cuatro años de experiencia en Administración y Dirección Educativa, Docencia
                Universitaria, Educación Básica y Educación Inicial. Se ha capacitado a través de varios cursos,
                seminarios y talleres para ejercer habilidades de planificación, manejo de grupos humanos,
                resolución de conflictos, liderazgo, desarrollo del pensamiento crítico y educación ambiental. Se
                ha desempeñado como profesora de Educación Básica, Directora de la Escuela de Educación
                Básica Ciudad de Cuenca, Facilitadora provincial de la reforma curricular, evaluación de
                aprendizajes y desarrollo del Pensamiento Crítico, asesora pedagógica en Librerías L.N.S,
                docente del sistema de nivelación académica de la Universidad Central del Ecuador y directora
                de la Academia para el Desarrollo de Inteligencias Múltiples Búmeran.</p>
            </div>            
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <h1 style={{ paddingTop: '10vh' }}>UBICACIÓN</h1>
            MAP AQUI 
          </div>
          <div className='col-12 col-sm-6'>
            <p style={{ textAlign: 'justify', paddingTop: '30vh', paddingBottom: '30vh', color: '#666666' }}>Estamos ubicados en 
              las calles Rafael León y Jonás Guerrero (esquina), sector González Suárez, a unacuadra del 
              Hotel Quito, cerca del Mirador de Guápulo.</p>
          </div>
        </div>
      </div>
      <Footer/>




      <NavBarTMScreen/>
      <div style={{ backgroundColor: '#4d5480' }}>
        <div className='container'>
          <div className='col-sm-12'>
            <center>
              <img src= { `./assets/img/Matriculas1.png` } width="30%" height= 'auto' style={{ paddingTop: '5vh' }}></img>
              <h3 style={{ paddingTop: '5vh', textAlign: 'center', fontSize: '165%', color: '#eeede9' }}>MODALIDAD PRESENCIAL</h3>
            </center>
            <center>
              <img src= { `./assets/img/Matriculas5.png` } width="70%" height= 'auto' style={{ paddingTop: '5vh', paddingBottom: '5vh' }}></img>
              </center>
          </div>
        </div>
      </div>

<div>
      <div className="contenedor">
        <img src= { `./assets/img/Matriculas7.png` }></img>
        <div className="centrado">
          NO NECESITAS EXPERIENCIA PREVIA, PERO SI MUCHA DIDSCIPLINA, DEDICACIÓN Y AMOR POR EL ARTE
        </div>
      </div>
      </div>
    </>
  )
}
