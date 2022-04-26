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

      <div>
        <img src= { `./assets/img/galeria1/galeriapegasu1.jpeg` } width="100%" height= 'auto'></img>
      </div>

      <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu2.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu9.jpg` } className="card-img-top" alt="..." style={{ height: '100.5%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu4.jpg` } className="card-img-top" alt="..." style={{ height: '101.5%' }}></img></center>           
          </div>
        </div>

      <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu3.jpg` } className="card-img-top" alt="..." style={{ height: '102%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu8.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu14.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

      <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu10.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu11.jpg` } className="card-img-top" alt="..." style={{ height: '101.2%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu6.jpg` } className="card-img-top" alt="..." style={{ height: '110%' }}></img></center>           
          </div>
        </div>

      <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu15.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu16.jpg` } className="card-img-top" alt="..." style={{ height: '103%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu17.jpg` } className="card-img-top" alt="..." style={{ height: '103%' }}></img></center>           
          </div>
        </div>

      <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu18.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu19.jpg` } className="card-img-top" alt="..." style={{ height: '100.5%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria1/galeriapegasu21.jpg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>




        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus2.JPG` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus3.JPG` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus8.JPG` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus7.JPG` } className="card-img-top" alt="..." style={{ height: '103.5%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus9.JPG` } className="card-img-top" alt="..." style={{ height: '102%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus15.JPG` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus4.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus5.JPG` } className="card-img-top" alt="..." style={{ height: '133.5%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus6.JPG` } className="card-img-top" alt="..." style={{ height: '119%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus10.JPG` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus12.JPG` } className="card-img-top" alt="..." style={{ height: '117.5%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria2/galeriapegasus13.JPG` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>






        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-1.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-2.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-3.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-4.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-5.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-6.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-7.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-8.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-9.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-10.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-11.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-12.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-13.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-14.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-15.jpeg` } className="card-img-top" alt="..." style={{ height: '100%' }}></img></center>           
          </div>
        </div>

        <div className="card-group ">
          <div className="card" style={{border:'0'}}>
            <center><img src= { `./assets/img/galeria3/Graduación EIFA-16.jpeg` } className="card-img-top" alt="..." style={{height: '100%' }}></img></center>           
          </div>
          <div className="card" style={{border:'0'}}>
            <center></center>
          </div>
          <div className="card" style={{border:'0'}}>
            <center></center>           
          </div>
        </div>



      {/* <div>
        <img src= { `./assets/img/Contacto1.png` } width="100%" height= 'auto'></img>
      </div> */}


      <Footer/>
    </div>
  )
}
