import React from 'react'

export const NavBarScreen = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light center-text fixed-top  justify-content-center">
      <div className='row justify-content-center d-flex align-items-center'>
        <a className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <i className="fab fa-facebook fa-2x" ></i>
        </a>
        <a className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <i className="fab fa-instagram fa-2x" ></i>

        </a>
        <a className="navbar-brand" href="#">
          {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
          <i className="fab fa-whatsapp fa-2x" ></i>

        </a>
     

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item active flex-wrap">
              <a className="nav-link p-4" href="#">INICIO <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active flex-wrap">
              <a className="nav-link p-4" href="#">TEATRO MUSICAL</a>
            </li>
            <li className="nav-item flex-wrap">
              <a className="nav-link p-0" href="#">
                <img src={"./assets/logos/Sello-EIFA.png"} width="97vw" height="auto" alt=""></img>
              </a>
            </li>
            <li className="nav-item active flex-wrap">
              <a className="nav-link p-4" href="#">EIFA KIDS</a>
            </li>
            <li className="nav-item active flex-wrap">
              <a className="nav-link p-4" href="#">CASAS</a>
            </li>
            <li className="nav-item active flex-wrap">
              <a className="nav-link p-4" href="#">CONTACTO</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
