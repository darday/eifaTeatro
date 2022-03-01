import React from 'react'
import { CarouselScreen } from './carousel/CarouselScreen'
import { NavBarScreen } from './navBar/NavBarScreen'
import { Footer } from './Footer/FooterScreen'


export const IndexScreen = () => {
  return (
    <>
      <CarouselScreen/>
      <div style={{ backgroundColor: 'rgb(77 84 128)', paddingBottom: '4vh' }}>
        <div className='container'> 
          <div style={{ paddingBottom: '4vh' }}> 
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <img src= { `./assets/img/QS2.png` } width="100%"></img> 
                <h3 style={{ textAlign: 'justify', color: '#e8eaed'}}>¿Quiénes somos?</h3> 
                <p style={{ textAlign: 'justify', color: '#e8eaed', paddingTop: '2vh'}}>EIFA es una Escuela Integral de Formación de Artistas que trabaja para aportar al medio
                  cultural ecuatoriano con <b style={{color:'white'}}>profesionales</b> que desarrollen su talento creativo, escénico y musical,
                  liderando la gestión, participación y producción de sus propios proyectos, de manera ética y
                  responsable. La Escuela propone consolidarse como un referente nacional e internacional en la
                  formación de profesionales en el arte, fortaleciendo al máximo sus capacidades, con el propósito
                  de formar a los mejores artistas del país e impulsar su desarrollo cultural.<br></br> <br></br>
                  Para ello, EIFA cuenta con la guía de docentes especializados, formatos y espacios idóneos, así
                  como un programa de <b style={{color:'white'}}>formación de tres años en canto, baile y actuación,</b> desde una perspectiva
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
                <h1 className='titulos-grandes' style={{ textAlign: 'center', fontSize: '60px', paddingTop: '10vh', color:'#4d5480' }}>MISIÓN</h1>
                <p style={{ textAlign: 'justify', padding: '5vh',color:'#4d5480' }}>EIFA es una Escuela Integral de 
                  Formación de Artistas que trabaja para aportar al medio cultural ecuatoriano con profesionales
                  que desarrollen su talento creativo, escénico y musical, liderando la gestión y producción de 
                  sus propios proyectos de manera ética y responsable.</p>
              </div>
              <div className='col-12 col-sm-6'>
                <h1 className='titulos-grandes' style={{ textAlign: 'center', fontSize: '60px', paddingTop: '10vh',color:'#4d5480' }}>VISIÓN</h1>
                <p style={{ textAlign: 'justify', padding: '5vh',color:'#4d5480' }}>La Escuela de Formación de Artistas 
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
          <div className='row' style={{paddingBottom:'5vh', padding:'5vh'}}>
            <div className='col-12 col-sm-6'>
             <center><img src= { `./assets/img/Mary.png` } width= "85%" height= "auto" ></img></center>                
              <br></br>
              <h1 className='titulos-grandes' style={{color: '#e8eaed' }}>DIRECTORA</h1>
              <h2 className='titulos-grandes' style={{ color: '#e8eaed' }}>MARÍA DEL CARMEN CALDERÓN</h2>
              <p style={{ textAlign: 'justify', color: '#e8eaed' }}>Educadora, pintora y maquillista. Estudió en el Normal Superior Manuela Cañizares,
                Universidades Central del Ecuador y Estatal de Guayaquil, donde obtuvo los títulos de
                Profesora en Educación Primaria y Doctora en Ciencias de la Educación. Tiene una trayectoria de treinta y cuatro años de experiencia en Administración y Dirección Educativa, Docencia
                Universitaria, Educación Básica y Educación Inicial. </p>                     
            </div>
            <div className='col-12 col-sm-6' >
              <p style={{ textAlign: 'justify', paddingTop: '4vh', color: '#e8eaed'}}>Se ha capacitado a través de varios cursos,
                seminarios y talleres para ejercer habilidades de planificación, manejo de grupos humanos,
                resolución de conflictos, liderazgo, desarrollo del pensamiento crítico y educación ambiental. Se
                ha desempeñado como profesora de Educación Básica, Directora de la Escuela de Educación
                Básica Ciudad de Cuenca, Facilitadora provincial de la reforma curricular, evaluación de
                aprendizajes y desarrollo del Pensamiento Crítico, asesora pedagógica en Librerías L.N.S,
                docente del sistema de nivelación académica de la Universidad Central del Ecuador y directora
                de la Academia para el Desarrollo de Inteligencias Múltiples Búmeran.</p><br></br>
              <p style={{ textAlign: 'justify', color: '#e8eaed' }}>Tiene una trayectoria de treinta y cuatro años de experiencia en Administración y Dirección Educativa, Docencia
                Asistió a talleres de pintura en la Casa de la Cultura en el área de la Mujer Nela Martínez, Museo Camilo Egas, 
                Academia ARTCLASS con la maestra Ksenia Veretnova, técnicas como acrílico y anatomía plástica 
                con la maestra Rusha Malcheva, maquillaje teatral y caracterización en PUBLICARTE STUDIO CCE 
                Benjamín Carrión y maquillaje profesional en la Escuela Lorena Carrillo. Presentó su primera muestra 
                de pinturas y relatos en el año 2014, en el Centro Cultural Crisfé, la exposición se tituló ÓLEO, FAUNA Y 
                ENERGÍA y la presentó en conjunto con el pintor Juan Pablo Acosta. Se ha hecho acreedora a varias 
                menciones al mérito educativo gracias a su excelente desempeño profesional.
              </p>
            </div> 
          </div>
        </div>
      </div>

      <div className='container' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <h1 className='titulos-grandes' style={{ color:'#4d5480' }}>UBICACIÓN</h1>
            MAP AQUI 
          </div>
          <div className='col-12 col-sm-6'>
            <h1 className='titulos-grandes' style={{ color:'#4d5480' }}>CONTACTOS</h1>
            <div style={{ textAlign: 'justify', paddingTop: '5vh', paddingBottom: '3vh', color: '#666666', fontSize: '1.1rem' }}>
              Estamos ubicados en las calles Rafael León y Jonás Guerrero (esquina), sector González Suárez, a 
              unacuadra del Hotel Quito, cerca del Mirador de Guápulo.
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Whatsapp:</b> 099 891 7202 
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Link directo:</b> <a href= 'https://wa.link/3h7nxd'>https://wa.link/3h7nxd</a> 
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Facebook:</b> Escuela Integral de Formación de Artistas-EIFA 
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1.1rem' }}>
              <b>Instagram:</b> @eifa-teatromusical 
            </div>
          </div>
        </div>
      </div>
      <Footer/>




     
    </>
  )
}
