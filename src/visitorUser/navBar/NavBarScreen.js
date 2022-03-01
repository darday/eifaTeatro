import React, { useEffect, useState } from 'react'

export const NavBarScreen = () => {

  const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 600) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  return (
    <nav className={`navbar navbar-expand-md navbar-light  center-text ${show ? 'bg-light fixed-top':'bg-dark fixed-top navbar2'}  justify-content-center`}>
      <div className='row justify-content-center d-flex align-items-center'>
        <div className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <a style={{ textDecoration:'none !important'}} href="https://www.facebook.com/EIFAEcuador/" >
            <i className="fab fa-facebook fa-2x" style={{ color:'black'}}></i>
          </a>
        </div>
        <div className="navbar-brand" href="">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <a href="https://www.instagram.com/eifa_teatromusical/?hl=es">
            <i className="fab fa-instagram fa-2x" style={{ color:'black'}} ></i>
          </a>

        </div>
        <div className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <a href="https://wa.link/3h7nxd">
            <i className="fab fa-whatsapp fa-2x" style={{ color:'black'}} ></i>
          </a>

        </div>
     

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <a href="/" style={{ textDecoration: 'none' }}>
              <li className="nav-item active flex-wrap">
                <div className="nav-link p-4" href="#">INICIO <span className="sr-only">(current)</span></div>
              </li>
            </a>
          
            <a href={"/teatro-musical"}  style={{ textDecoration: 'none' }}>
              <li className="nav-item active flex-wrap">
                  <div className="nav-link p-4 sin-decorator" href="#">TEATRO MUSICAL</div>
              </li>
            </a>
            <li className="nav-item flex-wrap">
              <div className="nav-link p-0" href="#">
                <img src={"./assets/logos/Sello-EIFA.png"} width="97vw" height="auto" alt=""></img>
              </div>
            </li>
            <a href={"/eifa-kids"}  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className="nav-link p-4" href="#">EIFA KIDS</div>
            </li>
            </a>
            <a href={"/casas"}  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className="nav-link p-4" href="#">CASAS</div>
            </li>
            </a>
            <a href={"/contacto"}  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className="nav-link p-4" href="#">CONTACTO</div>
            </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
