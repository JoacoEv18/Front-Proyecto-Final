import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Nosotros = () => {
    const [personas, setPersonas] = useState([]);
    const URL = 'https://back-proyecto-final-production-ed63.up.railway.app/';
    
    const getPersonas = async () => {
        try {
            const { data } = await axios.get(URL);
            setPersonas(data.colaboradores)
            console.log(data.colaboradores);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPersonas()
    },[]);

    return (
        <div>
            <h1 className='text-center mt-2'>
                Nuestros Colaboradores
            </h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {personas.map(persona => 
                    <tr>
                        <td>{persona._id}</td>
                        <td>{persona.nombre}</td>
                        <td>{persona.apellido}</td>
                        <td>{persona.dni}</td>
                        <td>{persona.email}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default Nosotros