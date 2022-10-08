
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../scss/Header.scss"


const Header = () => {

    const [ usuario, setUsuario ] = useState<number>(0)

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if (usuario === 0 || usuario > 10){
            console.log("No existe usuario")
            return
        }

        navigate(`usuario/${usuario}`) 
        setUsuario(0)
        
    }

    return (
        <div className = "header flex">

            <h1 className= "logo"><a href = "/">Cleverpy</a></h1>

            <form
                className = "formulario"
                onSubmit = {handleSubmit}
            >
                <input
                    name = "usuario"
                    className = "input"
                    type = "number"
                    value = { usuario }
                    onChange = { event => setUsuario(event.target.valueAsNumber)}
                    placeholder = "Buscar"
                />
                <input 
                    className = "boton"
                    type = "submit"
                    value = "BUSCAR USUARIO"
                />
             </form>

             <div className = "logout">
                <a href = "/login">Cerrar Sesión</a>
            </div>

        </div>
    )
}

export default Header
