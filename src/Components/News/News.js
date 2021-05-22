import New from 'Components/Info_new/index'
import React from 'react'
import './styles.css'

const NEWS = [
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },
  {
    titulo:'Las dos reuniones de Petro con empresarios barranquilleros',
    imagen:'https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/05/21/gustavopetro.jpg?itok=aTXd9z2U',
    descripcion:'A la primera reunión, que se realizó en la capital atlanticense el año pasado, asistieron Carlos Cure, ex embajador de Colombia en Venezuela y expresidente de Bavaria y Jabib Char, ex embajador colombiano en República Dominicana y hermano de Fuad Char, cabeza de la poderosa casa política Char.',
    date:'03/may/2021'
  },

]


export default function News(){
  return(
    <div className='content_news'>
      {
        NEWS.map( data => (
          <div className='container_news'>
            <New titulo={data.titulo} imagen={data.imagen} descripcion={data.descripcion} date={data.date} />
          </div>
        ))
      }
    </div>
  )
}