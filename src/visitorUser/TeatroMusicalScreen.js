import React from 'react'
import { CarouselScreen } from './carousel/CarouselScreen'

export const TeatroMusicalScreen = () => {
  return (
<div>
    <CarouselScreen/>
    <div style={{ backgroundColor: '#4d5480' }}>
        <div className='container'>
          <div className='col-sm-12'>
            <center>
              <img src= { `./assets/img/Matriculas1.png` } width="30%" height= 'auto' style={{ paddingTop: '5vh' }}></img>
              <h2 style={{ paddingTop: '5vh', textAlign: 'center', fontSize: '2rem', color: '#eeede9', fontWeight:'900' }}>MODALIDAD PRESENCIAL</h2>
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

</div>
  )
}
