import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Tarjetas } from '../componentes/Tarjetas';
/* import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'; */


export const Home = () => {
    /* const [productos, setProductos] = useState([]); */

    /* const URL = 'https://api-mf-production.up.railway.app/';

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
    }, []); */

    return (
        <div>
            <div>
                <Carousel className='centrado' variant="dark">
                    <Carousel.Item className='Item-centrado'>
                        <img
                            className=""
                            src="https://promociondescuentos.com/wp-content/uploads/2021/11/panini-buen-fin-2021-1024x1003.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='Item-centrado'>
                        <img
                            className=""
                            src="https://pinturasdoal.com/wp-content/uploads/2022-Promocion_ENERO.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='Item-centrado'>
                        <img
                            className=""
                            src="https://pbs.twimg.com/media/CqAqYZLVIAAyunX.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <hr />
                <h1 className='text-center m-5'>
                    Productos en Venta
                </h1>
                <hr />
            </div>
            {/* {<Row>
                {productos.map((p) => (
                    <Col key={p._id}>
                        <Tarjetas productos={p} />
                    </Col>
                ))}
            </Row>} */}
            <Tarjetas/>
        </div>
    )
}

