import React, { useState } from 'react'
import { Footer } from '../Footer/FooterScreen'
import { NavBarScreen } from '../navBar/NavBarScreen'
import './Gallery.css'
import { FaWindowClose } from "react-icons/fa";


import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';
import img12 from './img/img12.jpg';
import img13 from './img/img13.jpg';
import img14 from './img/img14.jpg';
import img15 from './img/img15.jpg';
import img16 from './img/img16.jpg';
import img17 from './img/img17.jpg';
import img18 from './img/img18.jpg';
import img19 from './img/img19.jpg';
import img20 from './img/img20.jpg';
import img21 from './img/img21.jpg';
import img22 from './img/img22.jpg';
import img23 from './img/img23.jpg';
import img24 from './img/img24.jpg';
import img25 from './img/img25.jpg';
import img26 from './img/img26.jpg';
import img27 from './img/img27.jpg';
import img28 from './img/img28.jpg';
import img29 from './img/img29.jpg';
import img30 from './img/img30.jpg';
import img31 from './img/img31.jpg';


export const GaleriaScreen = () => {
  localStorage.removeItem("menu");
  window.localStorage.setItem("menu", 5);

  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    }, {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
    {
      id: 31,
      imgSrc: img31,
    },
  ]

  const [model, setmodel] = useState(false);
  const [tempimgSrc, settempimgSrc] = useState('');

  const getImg = (imgSrc) => {
    settempimgSrc(imgSrc);
    setmodel(true);
    console.log(model, tempimgSrc);
  }


  return (
    <div>
      <NavBarScreen />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className={model ? "model open" : "model"} >
        <img src={tempimgSrc} />
        <FaWindowClose onClick={() => setmodel(false)} />
      </div>

      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div className='pics' key={index}>
              <img src={item.imgSrc} style={{ width: '100%' }} onClick={() => getImg(item.imgSrc)} />
            </div>
          )
        })}
      </div>



      <Footer />
    </div>
  )
}
