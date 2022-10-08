
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/Login.scss'

interface LoginState {
    usuario: string,
    password: string
}

const Login = () => {

    const [ inputValues, setInputValues ] = useState<LoginState>({
        usuario: "root",
        password: "root"
    })

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if(inputValues.usuario !== "root" || inputValues.password !== "root") {
            alert("Usuario o Contraseña Incorrectos")
            return
        }

        navigate("/")

    }

     
    return (
    <div className = 'login'>
        <div>
            <form 
                className = 'login_form'
                onSubmit = {handleSubmit}
            >
                <label>Usuario:</label>
                <input
                    name = 'usuario'
                    type = "text"
                    className= 'input_login'
                    placeholder = 'Usuario'
                    value = {inputValues.usuario}
                    onChange = { e => setInputValues({
                        ...inputValues,
                        [e.target.name] : e.target.value
                    }) }
                />
                <label>Contraseña:</label>
                <input 
                    name = 'password'
                    type = "password" 
                    className= 'input_login'
                    placeholder = 'Contraseña'
                    value = {inputValues.password}
                    onChange = { e => setInputValues({
                        ...inputValues,
                        [e.target.name] : e.target.value
                    }) }
                />
                <input
                    type = "submit"
                    className = 'boton_login'
                    value = "LOGIN"
                />
            </form>
        </div>

        <div className = 'titulo_login'>
            <h1>APP ENTREVISTA CLEVERPY</h1>
        </div>
    </div>
  )
}

export default Login
