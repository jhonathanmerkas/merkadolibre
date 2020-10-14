import React, {useState, useEffect} from 'react';
import { useHistory, Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    InputGroup,
    Input,
    InputGroupAddon,
    Button
} from 'reactstrap';
 
import * as ROUTES from '../constants/routes';
import Logo from '../assets/Logo_ML.png'
import Logo2x from '../assets/Logo_ML@2x.png'
import iconoLupa from '../assets/ic_Search.png'
import iconoLupa2x from '../assets/ic_Search@2x.png'
 
const Buscador = () => {
    const [value, setValue] = useState('')
    const history = useHistory();


    const searchItems = (event) => {
        event.preventDefault();
        setValue('')
        history.push(`${ROUTES.BUSQUEDA}?search=${value}`);
    }

    return(
        <header className="header">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} lg={10} className="d-flex flex-row align-items-center">
                        <Link to="/">
                            <img src={Logo} srcSet={`${Logo} 300w, ${Logo} 768w, ${Logo2x} 1280w`} />
                        </Link>
                        <Form onSubmit={searchItems}>
                            <InputGroup className="input-group-sm">
                                <Input 
                                    type="text"
                                    placeholder="Nunca dejes de buscar"
                                    value={value}
                                    onChange={(event) => setValue(event.target.value)}
                                />
                                <InputGroupAddon addonType="append">
                                    <Button type="submit">
                                        <img src={iconoLupa} srcSet={`${iconoLupa} 300w, ${iconoLupa} 768w, ${iconoLupa2x} 1280w`} />
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
 
export default Buscador;