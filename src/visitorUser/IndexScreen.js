import React from 'react'
import { CarouselScreen } from './carousel/CarouselScreen'
import { NavBarScreen } from './navBar/NavBarScreen'
import { Footer } from './Footer/FooterScreen'
import { MapsScreen } from './Maps/MapsScreen'
import PlanEstudio from './PLAN_ESTUDIOS_EIFA 2022.pdf'
import EifaInfo from './EIFA-Info.pdf'


export const IndexScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu", 1);
  return (
    <>
      <NavBarScreen />
      <CarouselScreen />
      <div style={{ backgroundColor: 'rgb(77 84 128)', paddingBottom: '4vh' }}>
        <br></br>
        <div className='container'>
          <div style={{ paddingBottom: '4vh' }}>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <center> <img className="espacio-img-index" src={`./assets/img/Sello-EIFA1.png`} style={{ paddingTop: '5vw' }} width="45%" height='auto' ></img></center>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div >
                  <a href={EifaInfo} target="_blank"
                    style={{ color: 'white', fontSize: '1rem', textDecoration: 'none', paddingLeft: '1vw' }}>
                    <button type="button" className="btn btn-outline-light" >DESCARGAR TODA LA INFORMACIÓN</button>
                  </a>
                  <br></br>
                  <br></br>
                </div>
                <center>
                  <img className="espacio-img-index" src={`./assets/img/QS3.png`} style={{ paddingTop: '0vw' }} width="100%" height='auto' ></img>
                </center>
                <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '1rem', paddingLeft: '1vw', paddingRight: '1vw', paddingTop: '2vw' }}>Somos una <b style={{ color: 'white', fontStyle: 'italic' }}>
                  Escuela de Teatro Musical</b> con un programa único en el país, permite que te formes en las áreas de
                  <b style={{ color: 'white', fontStyle: 'italic' }}> actuación, canto, danza </b> y otras áreas como dirección escénica,
                  producción musical, diseño de escenografía, entre otras.<br></br> <br></br>
                </div>
                <a className='titulos-grandes-directora' href={PlanEstudio} target="_blank"
                  style={{ color: 'white', fontSize: '1rem', textDecoration: 'none', paddingLeft: '1vw' }}> DESCARGAR PLAN DE ESTUDIOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="contenedor">
        <img src= { `./assets/img/fondoEifa.jpeg` } width="100%" height= 'auto'></img>
        <div className="centradoCasasrifa" >
          <div className='row'style={{ paddingTop: '2vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center> <img className="espacio-img-index" src= { `./assets/img/Sello-EIFA.png` } style={{ paddingTop: '5vw' }} width="100vh" height= 'auto' ></img></center>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{ textAlign: 'justify', color: '#e8eaed', paddingRight: '7vh', paddingLeft: '7vh'}}> 
              <center> <img className="espacio-img-index" src= { `./assets/img/QS2.png` } style={{ paddingTop: '5vw' }} width="100%" height= 'auto' ></img></center>
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '1.5vh', paddingLeft: '1vw', paddingRight: '1vw', paddingTop: '2vw'}}>Somos una <b style={{color:'white', fontStyle: 'italic'}}>
                Escuela de Teatro Musical</b> con un programa único en el país, permite que te formes en las áreas de 
                <b style={{color:'white', fontStyle: 'italic'}}> actuación, canto, danza </b> y otras áreas como dirección escénica, 
                producción musical, diseño de escenografía, entre otras.<br></br> <br></br>                  
                </div>
            </div>              
          </div> 
        </div>
      </div> */}


      <div className="contenedor" >
        <img src={`./assets/img/EifaEstudia3.png`} width="100%" height='auto'></img>
        <a href={"/teatro-musical"} >
          <div className="boton_person" >
            <center className='titulos-grandes-directora'>MÁS INFORMACIÓN</center>
          </div>
        </a>
      </div>

      <div className="contenedor" >
        <img src={`./assets/img/EifaEstudia4.png`} width="100%" height='auto'></img>
        <a href={"/eifa-kids"} >
          <div className="boton_personales" >
            <center className='titulos-grandes-directora'>MÁS INFORMACIÓN</center>
          </div>
        </a>
      </div>

      <div className='container'>
        <div style={{ paddingBottom: '5vh' }}>
          <div className='row'>
            <div className='col-12 col-sm-6' >
              <center><img src={`./assets/img/Matriculasicono9.png`} width="35%" height='auto' style={{ paddingTop: '7vh' }}></img></center>
              <div className=' home-convenios' style={{ textAlign: 'center', paddingTop: '4vh', fontSize: '1.5rem', color: '#4d5480' }}><strong >TENEMOS CONVENIOS INTERNACIONALES</strong></div><br></br>
              <div className='home-convenios' style={{ textAlign: 'center', color: '#4d5480', fontSize: '1rem' }}>En Argentina con la Fundación Julio
                Bocca dónde puedes continuar tus estudios como Intérprete en Teatro Musical .</div>
            </div>
            <div className='col-12 col-sm-6'>
              <center><img src={`./assets/img/Matriculasicono10.png`} width="35%" height='auto' style={{ paddingTop: '7vh' }}></img></center>
              <div className=' home-convenios' style={{ textAlign: 'center', fontSize: '1.5rem', paddingTop: '4vh', color: '#4d5480' }}><strong>CONTAMOS CON TEATRO PROPIO</strong></div><br></br>
              <div className='home-convenios' style={{ textAlign: 'center', color: '#4d5480', fontSize: '1rem' }}>También contamos con nuestro
                propio teatro para los estudiantes, el <a href="https://teatrovictoriaec.com/" target="_blank" style={{ textDecoration: 'none' }}>@TeatroVictoriaEC</a></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={`./assets/img/Contacto2.png`} width="100%" height='auto'></img>
      </div>

      <div style={{ backgroundColor: 'rgb(77 84 128)', paddingBottom: '4vh' }}>
        <div className='container'>
          <div style={{ paddingBottom: '4vh', paddingTop: '4vw' }}>
            <h3 className='titulos-grandes-directora' style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.5rem' }}>¿QUIÉNES SOMOS?</h3>
            <div style={{ textAlign: 'justify', color: '#e8eaed', paddingTop: '2vh', fontSize: '1rem' }}>EIFA es una Escuela Integral de Formación de Artistas que trabaja para aportar al medio
              cultural ecuatoriano con <b style={{ color: 'white' }}>profesionales</b> que desarrollen su talento creativo, escénico y musical,
              liderando la gestión, participación y producción de sus propios proyectos, de manera ética y
              responsable. La Escuela propone consolidarse como un referente nacional e internacional en la
              formación de profesionales en el arte, fortaleciendo al máximo sus capacidades, con el propósito
              de formar a los mejores artistas del país e impulsar su desarrollo cultural.<br></br> <br></br>
              Para ello, EIFA cuenta con la guía de docentes especializados, formatos y espacios idóneos, así
              como un programa de <b style={{ color: 'white' }}>formación de tres años en canto, baile y actuación,</b> desde una perspectiva
              de innovación, favorable al desempeño escénico y musical para ejercer un liderazgo en el
              campo artístico y cultural en el contexto nacional e internacional.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container'>
          <div style={{ paddingBottom: '5vh' }}>
            <div className='row' style={{ paddingTop: '7vh' }}>
              <div className='col-12 col-sm-6'>
                <h1 className='titulos-grandes-directora' style={{ textAlign: 'center', paddingTop: '0vh', color: '#4d5480', fontSize: '3rem' }}>MISIÓN</h1>
                <div style={{ textAlign: 'justify', padding: '2vh', color: '#4d5480', fontSize: '1rem' }}>EIFA es una Escuela Integral de
                  Formación de Artistas que trabaja para aportar al medio cultural ecuatoriano con profesionales
                  que desarrollen su talento creativo, escénico y musical, liderando la gestión y producción de
                  sus propios proyectos de manera ética y responsable.</div>
              </div>
              <div className='col-12 col-sm-6'>
                <h1 className='titulos-grandes-directora' style={{ textAlign: 'center', paddingTop: '0vh', color: '#4d5480', fontSize: '3rem' }}>VISIÓN</h1>
                <div style={{ textAlign: 'justify', padding: '2vh', color: '#4d5480', fontSize: '1rem' }}>La Escuela de Formación de Artistas
                  EIFA se consolidará como un referente nacional e internacional en la formación de
                  profesionales en el arte, fortaleciendo al máximo sus capacidades, con el propósito de ofertar
                  los mejores artistas del país e impulsar el desarrollo cultural.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#e77825' }}>
        <div className='container'>
          <div className='row' style={{ paddingBottom: '5vh', paddingTop: '5vh' }}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src={`./assets/img/Mary.png`} width="72%" height="auto" ></img></center>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <h1 className='titulos-grandes-directora' style={{ color: '#e8eaed', fontSize: '2.2rem' }}>DIRECTORA</h1>
              <div className='titulos-grandes-directora' style={{ color: '#e8eaed', fontSize: '1.8rem' }}>MARÍA DEL CARMEN CALDERÓN</div>
              <div style={{ textAlign: 'justify', paddingTop: '4vh', color: '#e8eaed', fontSize: '1rem' }}>Doctora en Ciencias de la
                Educación, pintora, maquillista y escenógrafa. Tiene una trayectoria de treinta y
                seis años de experiencia en Administración y Dirección Educativa, Docencia universitaria,
                Educación Básica y Educación Inicial
              </div><br></br>
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '1rem' }}>Se ha capacitado a través de varios
                cursos, seminarios y talleres para ejercer habilidades de planificación de proyectos, manejo
                de grupos humanos, resolución de conflictos, liderazgo, desarrollo del pensamiento crítico,
                educación ambiental y respeto a la vida, desarrollo del lenguaje, destrezas y aptitudes
                para la comunicación. Ha trabajado en el maquillaje teatral y escenografía de obras como: A
                Veces la Lluvia tiene Color Carmesí II, Como Agua para Chocolate, Los Menecmos y Beethoven
                Ira Mansa. Presentó su primera exposición de pintura llamada Óleo, Fauna y Energía en la
                Fundación Crisfé. Conductora del programa radial Perro por supuesto y promotora de los
                derechos de los animales.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container' style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className='row'>
          <div className='col-12 col-sm-6' style={{ paddingBottom: '5vh' }}>
            <h1 className='titulos-grandes-directora' style={{ color: '#4d5480' }}>CONTACTOS</h1>
            <div style={{ textAlign: 'justify', paddingTop: '5vh', paddingBottom: '3vh', color: '#666666', fontSize: '1rem' }}>
              Sector Pinar Alto, calles Oe8 y N48 170528, a la izquierda del parque. A cinco minutos del Centro Comercial El Bosque.
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
              <b>Whatsapp:</b> 099 891 7202
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
              <b>Link directo:</b> <a href='https://wa.link/3h7nxd' target="_blank">Click Aquí!</a>
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
              <b>Facebook:</b> Escuela Integral de Formación de Artistas-EIFA
            </div>
            <div style={{ color: '#666666', textAlign: 'Justify', fontSize: '1rem' }}>
              <b>Instagram:</b> @eifa-teatromusical
            </div>
          </div>
          <div className='col-12 col-sm-6'>

            <h1 className='titulos-grandes-directora' style={{ color: '#4d5480' }}>UBICACIÓN</h1>
            <MapsScreen />
          </div>
        </div>
      </div>
      <Footer />





    </>
  )
}
