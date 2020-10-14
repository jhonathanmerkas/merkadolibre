import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import queryString from 'query-string';
import { 
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import { API_URL } from "../constants/server";
import BreadcrumbComponent from '../components/breadcrumb';
import domicilio from '../assets/ic_shipping.png'
import domicilio2x from '../assets/ic_shipping@2x.png'

function ItemDetalle (){
    const [loading, setLoading] = useState(true);
    const [actualizar, setActualizar] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState([])
    const [item, setItems] = useState();
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        const fetchData = async () =>{
            try{
                const result = await fetch(`${API_URL}/api/items/${id}`);
                const data = await result.json();
                const categoria = await fetch(`${API_URL}/api/categories/${data.category_id}`);
                const dataCategoria = await categoria.json();
                const bread = breadcrumb;
                dataCategoria.forEach(category => {
                    const element = {ubicacion: category}
                    bread.push(element)
                })
                bread.push({ubicacion: data.title, estado: 'activo'})
                setBreadcrumb(bread)
                console.log(dataCategoria)
                setItems(data)
                setLoading(false)
                console.log(data)
            } catch (error){
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={12} lg={10} >
                    <BreadcrumbComponent datos={breadcrumb} />
                    {loading ?
                        <div>cargando</div>
                    :
                        <div className="caja-body">
                            <Row className="item-detalle">
                                <Col xs={12} sm={7} md={7} lg={7} >
                                    <img src={item.picture} alt={item.title}/>
                                    <div className="item-detalle-descripcion">
                                        <h3>Descripción del producto</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={5} md={5} lg={4} className="item-detalle-informacion">
                                    <p>{item.condition === "new" ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos</p>
                                    <h1>{item.title}</h1>
                                    <h3>${item.price.amount}</h3>
                                    <Button color="primary" block>Comprar</Button>
                                </Col>
                            </Row>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetalle;