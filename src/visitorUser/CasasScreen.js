import React from 'react'
import { CarouselScreen4 } from './carousel/CarouselScreen4'
import { Footer } from './Footer/FooterScreen'
import { NavBarScreen } from './navBar/NavBarScreen';

export const CasasScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu",4);
  return (
    <div>
      <NavBarScreen/>
      <CarouselScreen4/>

      <div style={{ backgroundColor: '#535353', paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className='container'>
          <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', fontWeight: 'bold' }}>
          La Escuela Integral de Formación de Artistas-EIFA utiliza un sistema de casas. Su cuerpo de
          estudiantes se divide en tres casas: Fenice, Pegasus y Drago. Cada una de ellas lleva el 
          nombre de una criatura mitológica, cuyo espírito se dice que merodea alrededor de la escuela
          y cuyas características identifican a quienes integran su casa. Los estudiantes competirán 
          durante cada período para ganar puntos para su Casa, que serán recompensados al final, con 
          diferentes bonificaciones y reconocimientos
          </div>            
        </div>
      </div>

      <div>
          <img src= { `./assets/img/casa1.png` } width="100%" height= 'auto'></img>
      </div>

      <div style={{ backgroundColor: '#7d1316', paddingTop: '5vh', paddingBottom: '10vh' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', paddingTop: '5vh' }}>
                  Esta casa está representada por el Ave Fénix y acepta entre sus integrantes a estudiantes 
                  que, al igual que esta criatura, poseen la capacidad y fuerza de darse forma a sí mismos,
                  iluminando su propio camino con valentía y renaciendo de las cenizas y el fuego; cada 
                  vez más fuertes, más grandes y 
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', paddingTop: '5vh' }}>
                  más sabios. Los integrantes de las Casa Fenice suelen ser personas 
                  que sirven de inspiración a los demás, pero que, ante todo, son capaces de seguir adelante
                  ante la adversidad, con sus alas cada vez más prominentes. 
                </div>
              </div>
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem', paddingTop: '5vh' }}>
              LEMA: Ut queant laxis resonare fibris. (Latin) 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              VALORES: Valentía, lealtad, honor, superación 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              COLORES: Dorado y carmesí 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              ELEMENTO: Fuego 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              PIEDRA: Ópalo 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              RAMA: Canto 
            </div>
          </div>
        </div>

      <div>
          <img src= { `./assets/img/casa2.png` } width="100%" height= 'auto'></img>
      </div>

      <div style={{ backgroundColor: '#004657', paddingTop: '5vh', paddingBottom: '10vh' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', paddingTop: '5vh' }}>
                  Esta casa está representada por el Pegaso y acepta entre sus integrantes a estudiantes
                  dotados de un buen corazón, pero a la vez rebeldes, inteligentes y bondadosos; guerreros 
                  indomables con un alto sentido de independencia, sabiduría, justicia y libertad. Los 
                  integrantes de la Casa. 
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem'}}></div>
                  Pegasus suelen ser personas que generan
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', paddingTop: '5vh' }}>
                  gran paz y tranquilidad; su mayor virtud es la 
                  fidelidad y sus ventajas son la inteligencia y sentido de verdad. Suelen ser muy 
                  determinados y solamente desatan su lado salvaje para conseguir lo que se han propuesto, 
                  usando sus dones de astucia, y agilidad. 
                </div>
              </div>
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem', paddingTop: '5vh' }}>
              LEMA: Vivere memento vive parvo. (Latin) 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              VALORES: Inteligencia, bondad, resistencia y compromiso. 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              COLORES: Blanco y azul 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              ELEMENTO: Agua 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              PIEDRA: Lapis Lázuli 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              RAMA: Actuación 
            </div>
          </div>
        </div>

      <div>
          <img src= { `./assets/img/casa3.png` } width="100%" height= 'auto'></img>
      </div>

      <div style={{ backgroundColor: '#577000', paddingTop: '5vh', paddingBottom: '10vh' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', paddingTop: '5vh' }}>
                  Esta casa está representada por el Dragón y acepta entre sus integrantes a estudiantes
                  que se identifican como seres independientes, fuertes y solitarios, que poseen un gran
                  poder para enfrentar cualquier reto gracias a sus habilidades físicas, espirituales y 
                  mentales. Su fortaleza radica en su poder espiritual y su fuerza.
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div style={{ color: '#ffffff', textAlign: 'justify', fontSize: '1.0rem', paddingTop: '5vh' }}>
                  Los integrantes de la Casa Drago suelen ser personas que además poseen un gran sentido
                  de intuición y conocimiento. Están dispuestos a defender a los demás con coraje y 
                  sabiduría y, por lo tanto, son benévolos. 
                </div>
              </div>
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem', paddingTop: '5vh' }}>
              LEMA: En talis tamquam saltare vivir. (Latin) 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              VALORES: Audacia, coraje, templanza, liderazgo 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              COLORES: Verde y ámbar 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              ELEMENTO: Tierra 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              PIEDRA: Esmeralda 
            </div>
            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.0rem' }}>
              RAMA: Danza 
            </div>
          </div>
        </div>


      <Footer/>
    </div>
  )
}
