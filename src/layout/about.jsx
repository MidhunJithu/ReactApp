import React from "react";
import { PostCards } from "../utilities";
import { Row,Col } from "react-bootstrap";
import {FcConferenceCall} from 'react-icons/fc';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export class WelcomePage extends React.Component{

    constructor(props){
        super(props)
        this.state = {show : true , setShow : () => {}};
    }

    componentWillUnmount(){
        console.log('unmounted');
    }
    render(){
        
        return(
        <div className="container">
            <div className="container-fluid">
                <h4 className="centre">About</h4>
            </div>
            <div className="container-fluid mt-5">
                <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

¿Por qué lo usamos?
Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).


¿De dónde viene?
                </p>
            </div>
            <div className="container mt-5">
                <div className="container-fluid">
                    <h5 className="centre">Services</h5>
                </div>
                <div className="container-fluid mt-5 mb-5">
                    <Row>                        
                        <Col className="hovertest">
                            <Link to='/Home' className="unsetAll">
                                <PostCards class='border-success'
                                title={<span className="m-2"><img src='https://digitallibrary.io/wp-content/uploads/2020/08/books-1.svg'/>
                                <span className="ml-2">Library books</span>
                                </span>}
                                content = {<span className="m-3">select Books by level</span>}
                                />
                            </Link>
                        </Col>                        
                        <Col className="hovertest">
                            <Link to='/Comments' className="unsetAll">
                                <PostCards class='border-success '
                                title={<span className=""><img src='https://digitallibrary.io/wp-content/uploads/2020/08/collections-1.svg' width='74px'/>
                                <span className="ml-2">Collections</span>
                                </span>}
                                content = {<span className="m-3">Blog Articles and News Feeds</span>}
                                />
                            </Link>
                        </Col>
                        <Col className="hovertest">
                            <Link to='/Blogs' className="unsetAll">
                                <PostCards class= 'border-success '
                                title={<span className="m-2">
                                    <IconContext.Provider value={{size:'3.75rem'}}>
                                        <FcConferenceCall/>
                                    </IconContext.Provider>
                                <span className="ml-2">Connectivity</span>
                                </span>}
                                content = {<span className="m-3">Interactive Web space</span>}
                                />
                            </Link>
                        </Col>
                    </Row>
                </div>                
            </div>
        </div>
        );
    }
}
