import React, {useState, useEffect, useContext} from 'react';
import { 
    Container,
    Row,
    Col,
    Button 
} from 'reactstrap';

import BreadcrumbComponent from '../components/breadcrumb'

function Home (){
    const [loading, setLoading] = useState(true)
    const [breadcrumb, setBreadcrumb] = useState([
        {ubicacion: 'Inicio', estado: 'inactivo'}
    ])

    useEffect(()=>{
        setLoading(true)
    },[])

    return(
        <div className="landing">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} >
                        <BreadcrumbComponent datos={breadcrumb} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;