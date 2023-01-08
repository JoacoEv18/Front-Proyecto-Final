import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Perfil = () => {
    const URL = 'http://localhost:3001/crear';
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        email:"",
        edad:""
    })
    const handleChange = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = async () => {
        await axios.post(URL, inputs) // Enviamos Datos
        setInputs({ //Vaciamos Inputs
            nombre: "",
            apellido: "",
            dni: "",
            email:"",
            edad:""
        })
    }

    return (
        <div className='formu'>
            <h1 className='text-center'>
                Registrate como Colaborador
            </h1>
            {Object.keys(inputs).map((key, index)=>(
                <Form.Group className="mb-3" key={index}>
                    <Form.Label id='form'>
                        {key}
                    </Form.Label>
                    <Form.Control
                        name={key}
                        value={inputs[key]}
                        onChange={handleChange}
                    />
                </Form.Group>
            ))}


                <div className='text-center w-100'>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Enviar Datos
                </Button>
                </div>
        </div>
    )
}

export default Perfil