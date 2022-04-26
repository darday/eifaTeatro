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

      <div style={{ backgroundColor: '#535353', paddingBottom: '10vh' }}>
        <div className='container'>
          <div style={{ paddingTop: '2vh', textAlign: 'justify', color: '#e8eaed', fontSize: '2.8vh'}}>
          La Escuela Integral de Formación de Artistas-EIFA utiliza un sistema de casas. Su cuerpo de
          estudiantes se divide en tres casas: Fenice, Pegasus y Drago. Cada una de ellas lleva el 
          nombre de una criatura mitológica, cuyo espírito se dice que merodea alrededor de la escuela
          y cuyas características identifican a quienes integran su casa. Los estudiantes competirán 
          durante cada período para ganar puntos para su Casa, que serán recompensados al final, con 
          diferentes bonificaciones y reconocimientos
          </div>            
        </div>
      </div>

      <div className="contenedor">
        <img src= { `./assets/img/1casaFenix.jpeg` } width="100%" height= 'auto'></img>
        <div className="centradoCasas" >
          <div className='row'style={{ paddingTop: '2vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{ textAlign: 'justify', color: '#e8eaed', paddingRight: '10vh', paddingLeft: '4vh'}}> 
              <h3 style={{ textAlign: 'center', color: '#e8eaed', fontSize: '3.3vw', fontWeight: 'bold'}} >CASA FENICE</h3>
              Esta casa está representada por el Ave Fénix y acepta entre sus integrantes a estudiantes 
              que, al igual que esta criatura, poseen la capacidad y fuerza de darse forma a sí mismos,
              iluminando su propio camino con valentía y renaciendo de las cenizas y el fuego; cada 
              vez más fuertes, más grandes y más sabios.<br></br> <br></br>
              Los integrantes de las Casa Fenice suelen ser personas 
              que sirven de inspiración a los demás, pero que, ante todo, son capaces de seguir adelante
              ante la adversidad, con sus alas cada vez más prominentes.<br></br><br></br> 
              LEMA: Ut queant laxis resonare fibris. (Latin).<br></br> 
              VALORES: Valentía, lealtad, honor, superación.<br></br>
              COLORES: Dorado y carmesí.<br></br> 
              ELEMENTO: Fuego.<br></br> 
              PIEDRA: Ópalo.<br></br>
              RAMA: Canto.
            </div>              
          </div> 
        </div>
      </div>

      <div style={{ backgroundColor: '#7d1316' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', padding: '5vh', textAlign: 'left', fontSize: '4.5vh', fontWeight: '900'}}>PROFESORES</h1>
          <h1 style={{color: '#e8eaed', paddingTop: '0vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Iván Acosta</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Fenice1IvanAcosta.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>ivanacostaartista </label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Cantante y director musical. Realizó sus estudios
                musicales en el Conservatorio Nacional y en la Universidad de los Hemisferios. Actualmente 
                tiene a su cargo el Coro y el Club de canto de la UDLA, dirige el Coro De la Escuela Integral 
                de Formación de Artistas (EIFA) y el Coro EnKanto, fue Director fundador del Coro de la 
                Universidad San Francisco de Quito y el Coro Escénico de la Fundación Teatro Bolívar; formó 
                parte del Coro Mixto Ciudad de Quito de la Fundación Teatro Nacional Sucre. Realizó seminarios 
                internacionales de Dirección Coral en Cuba en el 2013 y 2014 y en en Argentina en el 2015;
                completó el Curso de Dirección Coral y Orquestal del Conservatorio Mozarte, impartido por el
                maestro Búlgaro Sergei Pavlov. Miembro del grupo de Improvisación Teatral Improtantes. 
                Como actor y cantante, ha sido parte de musicales y obras como: Sweeney Todd, Los Miserables, 
                West Side Story, Chiquitita, Beethoven Ira Mansa, El Hombre de la Mancha, Luisa Fernanda, 
                La Rondine, Suor Angelica, Così fan Tutte, la Flauta Mágica de los Andes, Todos a la Cama, 
                Las Anónimas, Seis personajes en busca de autor, entre otras.
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#7d1316' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>María Katherina</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Fenice2MariaKatherina.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>mariakatherinamusic </label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>María Katherina es una artista de indie-pop muy
                versátil, vanguardista y orgullosamente ecuatoriana. Se ha distinguido por crear atmósferas
                y melodías vocales muy meticulosas en sus producciones, las reflejan sin lugar a dudas en sus
                productos finales. Cuando crea su música, usualmente etérea y de la mano de lo
                contemporáneo, toma su pasado de la música clásica y lo aplica sutilmente, creando un sonido
                bastante original y moderno. <br></br>Estudió jazz y clásico en el conservatorio, y concluyó
                una licenciatura en música en la Universidad de las Américas, con un énfasis en composición
                musical. Su proceso creativo parte de la necesidad de poner en sus propias palabras y música
                el producto de la introspección y reflexión sobre varios temas, buscando la simplicidad 
                dentro de lo complejo, sea armónica o melódicamente y buscando el diálogo íntimo con el piano,
                en el que se genera una conversación inevitable, que crece, se desarrolla, concluye.<br></br>
                Una parte que concibe como fundamental es la concepción de la voz como el elemento del que
                parte la creación, y como elemento que da matices a la composición, que le da carácter, 
                cuando ha sido explorado y explotado en toda su extensión y emotividad. <br></br>La sutileza y la fuerza
                de su voz, sus matices y su control, hacen que escucharla sea una experiencia realmente interesante.
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#7d1316' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Isaac Hinojosa</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Fenice3IsaacHinojosa.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>isaac_hinojosa1</label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Cantante lírico en voz de contratenor y licenciado
                en Ciencias de la Educación con mención en Educación Musical. Comenzó sus estudios en canto
                lírico en el conservatorio Franz Liszt bajo la tutela de Jacqueline Hernandez y Beth Egnatoff, en este
                período se incluye al coro del conservatorio bajo la dirección de la Maestra Cecilia Sánchez. <br></br>
                Continuó sus estudios en la Pontificia Universidad Católica del Ecuador en la facultad de Ciencias de la
                Educación en la carrera de Educación Musical donde obtuvo su licenciatura. Ha complementado
                su formación como cantante y pedagogo en diversos talleres y seminarios enfocados en
                dirección coral para coros infantiles y juveniles de mano de las profesoras Claudia Londoño y María
                Teresa Guillen, pedagogas y directoras corales colombianas, y salud vocal con la maestra Zintzuni
                Cardel. Entre sus actividades académicas se incluyen el concierto de Música Barroca con el
                Conservatorio de Oberlin, USA, bajo la tutela del Profesor Webb Wiggins, presentado en la Iglesia de
                la Compañía; y un papel protagónico en la ópera infantil Brundibar de Hans Krása, con colaboración
                de la Orquesta Sinfónica Nacional del Ecuador, el Conservatorio de Música Franz Liszt, el
                Conservatorio Superior Nacional de Música y la Fundación Teatro Sucre. <br></br>
                Fue docente, director del coro a cappella y coordinador de Pproyectos educativos donde se
                conformó la estudiantina en el Colegio Nuevo Mundo. También fue coordinador de prácticas pre
                profesionales del área de música para los nuevos aspirantes a docentes. <br></br>
                Actualmente se desempeña como docente y director de los ensambles corales en el Sauce
                school. Ha participado como actor en las obras: Las Brujas de Salem, de Arthur Miller, Todo sobre la
                banca, Como Agua para Chocolate, Beethoven Ira Mansa y Seis Personajes en Busca de Autor.
              </div>
            </div> 
          </div>
        </div>
      </div>




      <div className="contenedor">
        <img src= { `./assets/img/2casaPegasu.jpeg` } width="100%" height= 'auto'></img>
        <div className="centradoCasas" >
          <div className='row'style={{ paddingTop: '2vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{ textAlign: 'justify', color: '#e8eaed', paddingRight: '10vh', paddingLeft: '4vh'}}> 
              <h3 style={{ textAlign: 'center', color: '#e8eaed', fontSize: '3.3vw', fontWeight: 'bold'}} >CASA PEGASUS</h3>
              Esta casa está representada por el Pegaso y acepta entre sus integrantes a estudiantes dotados de un buen corazón,
              pero a la vez rebeldes, inteligentes y bondadosos; guerreros indomables con un alto sentido de independencia,
              sabiduría, justicia y libertad.<br></br> <br></br>
              Los integrantes de la Casa Pegasus suelen ser personas que generan gran paz y tranquilidad; su mayor virtud es la
              fidelidad y sus ventajas son la inteligencia y sentido de verdad. Suelen ser muy determinados y solamente
              desatan su lado salvaje para conseguir lo que se han propuesto, usando sus dones de astucia, y agilidad.<br></br><br></br> 
              LEMA: Vivere memento vive parvo. (Latin).<br></br> 
              VALORES: Inteligencia, bondad, resistencia y compromiso.<br></br>
              COLORES: Blanco y azul.<br></br> 
              ELEMENTO: Agua.<br></br> 
              PIEDRA:  Lapis Lázuli.<br></br>
              RAMA: Actuación. 
            </div>              
          </div> 
        </div>
      </div>

      <div style={{ backgroundColor: '#004657' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', padding: '5vh', textAlign: 'left', fontSize: '4.5vh', fontWeight: '900'}}>PROFESORES</h1>
          <h1 style={{color: '#e8eaed', paddingTop: '0vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Juan Pablo Acosta</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Pegasu1Juan-Pablo-Acosta-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>juanpiacosta </label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Actor, director, cantante y pintor. Graduado en
                teatro y actuación en el Laboratorio Malayerba. Estudió Modern Method Acting con el maestro
                serbio Boyan Ivic y Commedia dell’Arte con el maestro italiano Antonio Fava. Actualmente es
                docente universitario en el área de lengua y teatro; director artístico del Teatro Victoria, miembro del
                grupo de Improvisación Teatral Improtantes y,desde el 2014, director del Grupo de Teatro de la
                Universidad Politécnica Salesiana. Fue parte del Colectivo Zeta de Danza Contemporánea, con
                quienes participó en los montajes En mi cuerpo existirás y Ciudades Pasajeras. Ha dirigido cerca de
                treinta montajes escénicos, entre los que destacan: La Importancia de llamarse Ernesto, Como Agua
                para Chocolate, A Veces la Lluvia Tiene Color Carmesí, Los Menecmos, Blind Date, Las Brujas de
                Salem, Cupo Limitado, Mi Mujer Artificial, Seis Personajes en Busca de Autor. Co director del
                perfomance Sublimación y Nostalgia, interpretado por Sofía Izurieta y producido por el Conservatorio
                Franz Liszt para ser presentado en el marco de las Naciones Unidas en Ginebra. Fue director escénico
                de la Ópera Pagliacci, del musical Shrek, la Zarzuela Bohemios y los musicales Chiquitita, El Hijo del Sol,
                Todos a la cama, Beethoven, Ira Mansa, Saphi el nuevo tiempo del viejo mundo. Ha escrito obras
                inéditas de teatro y musicales, como: El último otoño del corazón, Cabeza de Pollo, Juego
                inconcluso y El penúltimo.
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#004657' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Daniel Enríquez</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Pegasu2Daniel-Enriquez-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>daniel_enriquez93 </label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Actor, productor, director y dramaturgo. Ha escrito
                y dirigido alrededor de 17 obras de microteatro. Director y escritor de las obras de teatro Operación
                Albacora, Fracasados, Couching para agarrar, El fin de los tiempos, Mis tres regalos, El viaje y otras
                calamidades y La teoría de los opuestos. Ha participado en el Festival de Artes Vivas de Loja con
                microteatro. <br></br><br></br>Como director del perfomance Sublimación y
                nostalgia, interpretado por Sofía Izurieta y producido por el Conservatorio Franz Liszt para ser
                presentado en el marco de las Naciones Unidas en Ginebra. Miembro fundador del grupo de
                improvisación teatral IMPROTANTES y creador y entrenador del grupo Esos Manes Impro. Como
                asistente de dirección ha trabajado en la Ópera EL PAGLIACCI y Shrek El Musical. Co director del
                musical BEETHOVEN IRA MANSA<br></br><br></br>
                Como escritor y director ha trabajado en teatro, cine y publicidad, destaca su trabajo como guionista
                freelance en Touché Films desde el 2022. 
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#004657' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Greymar Hernández</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Pegasu3Greymar-Hernandez-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '2.5vh'}}><label style={{ fontFamily:'Verdana' }}>greymarhernandez.escritora</label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Escritora, actriz, directora teatral, iluminadora y
                periodista. Ha trabajado para varios medios impresos y ha escrito alrededor de 40 piezas
                teatrales que han tenido temporadas de éxito en diferentes ciudades como Madrid, Barcelona,
                Buenos Aires, Santiago, Lima, Quito, Nuevo León, Santo Domingo, Niza, Miami, Oxnard, entre otras. <br></br><br></br>
                Actualmente se desempeña como directora de actores dentro de la compañía teatral La Pata Rota Producciones, que hace vida en Quito. Además, es
                formadora de nuevos escritores, y ha tenido más de 300 alumnos en diferentes lugares del mundo. Hoy
                en día, asume el rol de profesora de la cátedra de Dramaturgia, Narratología y Análisis de Textos
                Dramáticos, en la Escuela Integral de Formación de Artistas, en Quito.              
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#004657' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Scarlet Cisneros</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Pegasu4Scarlet-Cisneros-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>skr.pam</label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Actriz profesional con experiencia de 8 años
                interpretando papeles, en su mayoría protagónicos en diferentes obras de teatro como: Las Brujas de
                Salem, de Arthur Miller, La importancia de llamarse Ernesto, de Oscar Wilde, Como Agua para
                Chocolate, de Laura Esquivel, Los Menecmos, de Plauto, Cupo Limitado, de Tomás Urtusástegui, El
                Hombre de la Mancha, A Tarantino con amor, de Greymar Hernández, Las lágrimas se secan solas de
                Alexis Márquez interpretando a Amy Winehouse y en un tributo musical a José José, como también en
                diferentes obras de microteatro y teatro infantil. <br></br><br></br>
                Ha participado también en diversas producciones
                audiovisuales en las que se destacan: actriz protagónica de la serie web “La misteriosa
                desaparición de Alan” de Arkat Media, en la novela web "La Apuesta" y en en la serie "Ahora te toca a ti"
                producida por Touché Films. <br></br> 
                Ha actuado en espacios como la Casa de la Cultura
                Ecuatoriana, Teatro Patio de Comedias, La Casa de la Música, Teatro Victoria, Wonder Bar del Teatro
                Bolívar, La Casa Tomada, Teatro de la Universidad Central, en la Universidad Salesiana sede Quito,
                Guayaquil y Cuenca, en la Udla, Universidad Católica, Sala de Artes Escénicas Espacio Vazio, entre otros.<br></br>
                Actualmente interpretó a Estela en la obra Las
                Anónimas de Gisselle Jukka y es parte del elenco de Seis Personajes en Busca de Autor, de Luigi
                Pirandello. Tiene varios años enseñando a niños y jóvenes, además de ser comunicadora social y locutora.                
              </div>
            </div> 
          </div>
        </div>
      </div>




      
      <div className="contenedor">
        <img src= { `./assets/img/3casaDragon.jpeg` } width="100%" height= 'auto'></img>
        <div className="centradoCasas" >
          <div className='row'style={{ paddingTop: '2vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' style={{ textAlign: 'justify', color: '#e8eaed', paddingRight: '10vh', paddingLeft: '4vh'}}> 
              <h3 style={{ textAlign: 'center', color: '#e8eaed', fontSize: '3.3vw', fontWeight: 'bold'}} >CASA DRAGO</h3>
              Esta casa está representada por el
              Dragón y acepta entre sus integrantes a estudiantes que se identifican como
              seres independientes, fuertes y solitarios, que poseen un gran poder para enfrentar
              cualquier reto gracias a sus habilidades físicas, espirituales y mentales. Su
              fortaleza radica en su poder espiritual y su fuerza.<br></br> <br></br>
              Los integrantes de la Casa Drago suelen ser personas que además poseen un gran
              sentido de intuición y conocimiento. Están dispuestos a defender a los demás
              con coraje y sabiduría y, por lo tanto, son benévolos.<br></br><br></br> 
              LEMA: En talis tamquam saltare vivir. (Latin).<br></br> 
              VALORES: Audacia, coraje, templanza, liderazgo.<br></br>
              COLORES: Verde y ámbar.<br></br> 
              ELEMENTO: Tierra.<br></br> 
              PIEDRA: Esmeralda.<br></br>
              RAMA: Danza.
            </div>              
          </div> 
        </div>
      </div>

      <div style={{ backgroundColor: '#577000' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', padding: '5vh', textAlign: 'left', fontSize: '4.5vh', fontWeight: '900'}}>PROFESORES</h1>
          <h1 style={{color: '#e8eaed', paddingTop: '0vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Pancho Viteri</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Drago1Pancho-Viteri-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>pancho_viteri</label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Bailarín e intérprete de danza urbana por más de 8
                años. Comenzó su formación en el estudio de baile Passion Studio por 3 años en Melbourne, Australia
                donde recibió fundamentos de HipHop Dance, House, Popping, Locking, entre otros. En Australia
                tuvo su primer acercamiento entrenando con coreógrafos de talla mundial como Keone Madrid &
                Mari Madrid, Parris Goebel y Lyle Beniga. Trabajó como maestro suplente en Passion Studio en
                Australia. En 2015 regresó a Ecuador para trabajar como Instructor de Urban Choreography en Frevo
                Dance Studio. Representó al Ecuador en el Festival de Andong, Corea del Sur. En ese tiempo, entrenó
                por 4 meses en el reconocido estudio de baile One Million Dance Studio en Seoul, con coreógrafos
                como Lia Kim. Ha entrenado con talleristas internacionales traídos el Ecuador, como:
                Hollywood, Matt Steffanina, Karon Lynn, CJ Salvador, Mykell Wilson, Yanis Marshall, Rob Rich,
                entre muchos otros. Graduado de EIFA (Escuela Integral de Formación de Artistas donde además se
                hace cargo del área de danza urbana. Entrenó en Lima en SoulFul Studio con grandes exponentes de
                danza urbana como Angie Pinto y Cesar Ávalos, entre otros y en Los Ángeles en Movement Lifestyle,
                Kinjaz Dojo, Millenium Dance Complex, Kreative Mindz, IMMA Space, etc. Ha participado como actor
                en obras y musicales como: El Último Otoño del Corazón, Cabeza de Pollo, Como Agua para
                Chocolate, Saphi, el nuevo tiempo del viejo mundo y Seis personajes en busca de autor
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#577000' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Luis Cifuentes Tapia</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Drago2Luis-Cifuentes-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>pancho_viteri </label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Artista Chileno. Mtr. En Estudios Avanzados de
                Teatro, (en curso 2022). Licenciado en artes escénicas de la Universidad Mayor (Chile).
                Posgrado Entre cuerpos y miradas: artes, poéticas y políticas de la mirada en la educación, FLACSO
                Argentina. Egresado de la Escuela de Ballet del Teatro Municipal de Santiago (Chile), obteniendo el
                grado de Bailarín Profesional en Danza Clásica, realizó una certificación en “ Royal Academy of
                Dance Vocational Graded Examination in Dance, Intermediate”. <br></br>                
                En su país, fue miembro de las compañías: Ballet de
                Cámara del Teatro Municipal de Santiago, Ballet de Arte Moderno y Ballet del Teatro Nescafé, en las que
                desempeño roles de cuerpo de baile y bailarín solista, interpretando obras de repertorio de ballet
                clásico. Posteriormente, en Ecuador formó parte del elenco de bailarines del Ballet Nacional de
                Ecuador e integra la agrupación de danza contemporánea Callejón Vacío.
                Ha trabajado Producciones y workshops con Coreógrafos y Maestros reconocidos a nivel internacional.<br></br>
                Trabajó como docente impartiendo clases y talleres de Técnica Académica en la Escuela Municipal de
                Cabildo, Adjunta al Teatro Municipal de Santiago de Chile, en la Escuela Metropolitana de Danza
                “Metrodanza” y en la Compañía Nacional de Danza de Ecuador. <br></br>
                Participó en festivales y encuentros de Danza en Chile, Ecuador, Argentina y España.
                Actualmente es parte de la Compañía Nacional de Danza del Ecuador como Interprete-Creador.
                Docente en Eifa Escuela Integral de Formación de Artistas y co-fundador del proyecto Agujero Negro.
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#577000' }}> 
        <div className='container'>
          <h1 style={{color: '#e8eaed', paddingTop: '5vh', paddingLeft:'5vh', textAlign: 'left', fontSize: '4vh '}}>Camila Paredes</h1>        
        </div>
        <div className='container'>
          <div className='row' style={{paddingBottom:'5vh', paddingLeft:'5vh', paddingRight: '5vh'}}>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
              <center><img src= { `./assets/img/Drago3Camila-Paredes-min.png` } width= "100%" height= "auto" ></img></center>                
              <br></br>
                <i className="fab fa-instagram fa-2x" style={{ color:'#e5e4e0', fontSize: '3vh'}}><label style={{ fontFamily:'Verdana' }}>pancho_viteri</label></i>
              </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6' >
              <div style={{ textAlign: 'justify', color: '#e8eaed', fontSize: '2.1vh'}}>Artista Chileno. Mtr. En Estudios Avanzados de
                Teatro, (en curso 2022). Licenciado en artes escénicas de la Universidad Mayor (Chile).
                Posgrado Entre cuerpos y miradas: artes, poéticas y políticas de la mirada en la educación, FLACSO
                Argentina. Egresado de la Escuela de Ballet del Teatro Municipal de Santiago (Chile), obteniendo el
                grado de Bailarín Profesional en Danza Clásica,realizó una certificación en “ Royal Academy of
                Dance Vocational Graded Examination in Dance, Intermediate”. <br></br>
                En su país, fue miembro de las compañías: Ballet de
                Cámara del Teatro Municipal de Santiago, Ballet de Arte Moderno y Ballet del Teatro Nescafé, en las que
                desempeño roles de cuerpo de baile y bailarín solista, interpretando obras de repertorio de ballet
                clásico. Posteriormente, en Ecuador formó parte del elenco de bailarines del Ballet Nacional de
                Ecuador e integra la agrupación de danza contemporánea Callejón Vacío.
                Ha trabajado Producciones y workshops con Coreógrafos y Maestros reconocidos a nivel internacional. <br></br>
                Trabajó como docente impartiendo clases y talleres
                de Técnica Académica en la Escuela Municipal de Cabildo, Adjunta al Teatro Municipal de Santiago de
                Chile, en la Escuela Metropolitana de Danza “Metrodanza” y en la Compañía Nacional de Danza de Ecuador. <br></br>
                Participó en festivales y encuentros de Danza en
                Chile, Ecuador, Argentina y España. Actualmente es parte de la Compañía Nacional de
                Danza del Ecuador como Interprete-Creador. Docente en Eifa Escuela Integral de Formación de
                Artistas y co-fundador del proyecto Agujero Negro.
              </div>
            </div> 
          </div>
        </div>
      </div>
            
      <Footer/>
    </div>
  )
}
