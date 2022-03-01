import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarScreen = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light center-text fixed-top  justify-content-center">
      <div className='row justify-content-center d-flex align-items-center'>
        <div className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <i className="fab fa-facebook fa-2x" ></i>
        </div>
        <div className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <i className="fab fa-instagram fa-2x" ></i>

        </div>
        <div className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <i className="fab fa-whatsapp fa-2x" ></i>

        </div>
     

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <Link to={"/"} style={{ textDecoration: 'none' }}>
              <li className="nav-item active flex-wrap">
                <div className="nav-link p-4" href="#">INICIO <span className="sr-only">(current)</span></div>
              </li>
            </Link>
          
            <Link to={"/teatro-musical"}  style={{ textDecoration: 'none' }}>
              <li className="nav-item active flex-wrap">
                  <div className="nav-link p-4 sin-decorator" href="#">TEATRO MUSICAL</div>
              </li>
            </Link>
            <li className="nav-item flex-wrap">
              <div className="nav-link p-0" href="#">
                <img src={"./assets/logos/Sello-EIFA.png"} width="97vw" height="auto" alt=""></img>
              </div>
            </li>
            <Link to={"/eifa-kids"}  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className="nav-link p-4" href="#">EIFA KIDS</div>
            </li>
            </Link>
            <Link to={"/casas"}  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className="nav-link p-4" href="#">CASAS</div>
            </li>
            </Link>
            <Link to={"/contacto"}  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className="nav-link p-4" href="#">CONTACTO</div>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
