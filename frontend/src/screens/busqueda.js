import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { 
    Container,
    Row,
    Col
} from 'reactstrap';

import { API_URL } from "../constants/server";
import BreadcrumbComponent from '../components/breadcrumb';
import domicilio from '../assets/ic_shipping.png'
import domicilio2x from '../assets/ic_shipping@2x.png'

function Busqueda (){
    const [loading, setLoading] = useState(true);
    const [actualizar, setActualizar] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState([
        {ubicacion: 'Inicio', estado: 'inactivo'}
    ])
    const [items, setItems] = useState();
    const location = queryString.parse(useLocation().search)

    useEffect(()=>{
        setLoading(true)
        const fetchData = async () =>{
            try{
                const result = await fetch(`${API_URL}/api/items?q=${location.search}`);
                const data = await result.json();
                const bread = breadcrumb;
                data.categories.forEach(category => {
                    const element = {ubicacion: category}
                    bread.push(element)
                })
                bread.push({ubicacion: location.search, estado: 'activo'})
                setBreadcrumb(bread)
                setItems(data)
                setLoading(false)
                console.log(data)
            } catch (error){
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    },[location.search])

    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={10} >
                    <BreadcrumbComponent datos={breadcrumb} />
                    {loading ?
                        <div>cargando</div>
                    :
                        <div className="caja-body">
                            {items && items.items.map( (item, index) =>{
                                console.log(item)
                                return(
                                    <Link to={`/item/${item.id}`} key={index} className="caja-items">
                                        <div className="caja-items-imagen">
                                            <img src={item.picture} alt={item.title}/>
                                        </div>
                                        <div className="caja-items-informacion">
                                            <div className="caja-items-informacion-titulo">
                                                <p>${item.price.amount}</p>
                                                <img src={domicilio} srcSet={`${domicilio} 300w, ${domicilio} 768w, ${domicilio2x} 1280w`} alt=""/>
                                            </div>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="caja-items-ubicacion">
                                            <p>{item.address}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Busqueda;