import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Tarjetas = () => {
    const [productos, setProductos] = useState([]);
    const URL = 'https://back-proyecto-final-production-ed63.up.railway.app/';
    
    const getPersonas = async () => {
        try {
            const { data } = await axios.get(URL);
            setProductos(data.productos)
            console.log(data.productos);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPersonas()
    }, []);
    return (
        <div className='container-tarjetas'>
            {productos.map((p) => (
                <Row>
                    <Col key={p._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={p.imagen} />
                            <Card.Body>
                                <Card.Title>{p.nombre}</Card.Title>
                                <Card.Text>
                                    <span>Especie: {p.descripcion}</span> <br />
                                    <span>Status: {p.precio}</span> <br />
                                </Card.Text>
                                <Button variant="primary">+ Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    )
}