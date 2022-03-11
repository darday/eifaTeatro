import React, { useEffect, useState } from 'react'
import 'animate.css';
  
export const NavBarScreen = () => {
  
  const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 0) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const menuSeleccionado=(opcion)=>{
        switch (opcion) {
          case 1:
            localStorage.removeItem("menu");
            window.localStorage.setItem("menu",1);
            break;
          case 2:
            localStorage.removeItem("menu");
            window.localStorage.setItem("menu",2);
            break;
          
          case 3:
            localStorage.removeItem("menu");
            window.localStorage.setItem("menu",3);
            break;

          case 4:
            localStorage.removeItem("menu");
            window.localStorage.setItem("menu",4);
            break;

          case 5:
            localStorage.removeItem("menu");
            window.localStorage.setItem("menu",5);
            break;
        
          default:
            break;
        }
    }

   
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    
    

    
  return (
    <nav className={`navbar navbar-expand-md navbar-light  center-text ${show ? 'bg-light fixed-top':'bg-dark fixed-top navbar2'}  justify-content-center animate__animated animate__fadeInDown `}>
      <div className='row justify-content-center d-flex align-items-center'>
        <div className="mostrar-ocultar">
          <div className="navbar-brand" href="#">
            {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
            <a style={{ textDecoration:'none !important'}} href="https://www.facebook.com/EIFAEcuador/" target="_blank">
              <i className="fab fa-facebook fa-2x" style={{ color:'black'}}></i>
            </a>
          </div>
          <div className="navbar-brand" href="">
            {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
            <a href="https://www.instagram.com/eifa_teatromusical/?hl=es" target="_blank">
              <i className="fab fa-instagram fa-2x" style={{ color:'black'}} ></i>
            </a>

          </div>
          <div className="navbar-brand" href="#">
            {/* <img src={"./assets/logos/facebook-f-brands.svg"} style={{color:"blue"}}  width="30" height="30" alt=""></img> */}
            <a href="https://wa.link/3h7nxd" target="_blank">
              <i className="fab fa-whatsapp fa-2x" style={{ color:'black'}} ></i>
            </a>

          </div>

        </div>
        
        {console.log(localStorage.getItem("menu"))}
     

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <a href="/" className="sobre-enlace" style={{ textDecoration: 'none' }}>
              <li className="nav-item active flex-wrap" onClick={()=>menuSeleccionado(1)}>
                <div className={`nav-link p-4 ${(localStorage.getItem("menu")==1)  && 'color-seleccionado'}`} href="#">INICIO <span className="sr-only">(current)</span></div>
              </li>
            </a>
          
            <a href={"/teatro-musical"}  className="sobre-enlace" style={{ textDecoration: 'none' }}>
              <li className="nav-item active flex-wrap" onClick={()=>menuSeleccionado(2)}> 
                  <div className={`nav-link p-4 ${(localStorage.getItem("menu")==2)  && 'color-seleccionado'}`}  href="#">TEATRO MUSICAL</div>
              </li>
            </a>

            <a href={"/"} className="sobre-enlace"> 
              <li className="nav-item active flex-wrap">
                <div className="nav-link pr-4 pl-4 " href="#" onClick={()=>menuSeleccionado(1)}>
                  <img src={"./assets/logos/Sello-EIFA.png"} width="97vw" height="auto" alt=""></img>
                </div>
              </li>
            </a>
           
            <a href={"/eifa-kids"} className="sobre-enlace" style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap"onClick={()=>menuSeleccionado(3)}>
              <div className={`nav-link p-4 ${(localStorage.getItem("menu")==3)  && 'color-seleccionado'}`}  href="#">EIFA KIDS</div>
            </li>
            </a>
            <a href={"/casas"} className="sobre-enlace" style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap">
              <div className={`nav-link p-4 ${(localStorage.getItem("menu")==4)  && 'color-seleccionado'}`} href="#" onClick={()=>menuSeleccionado(4)}>CASAS</div>
            </li>
            </a>
            <a href={"/contacto"} className="sobre-enlace"  style={{ textDecoration: 'none' }}>
            <li className="nav-item active flex-wrap"onClick={()=>menuSeleccionado(5)}>
              <div className={`nav-link p-4 ${(localStorage.getItem("menu")==5)  && 'color-seleccionado'}`}  href="#" >CONTACTO</div>
            </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
