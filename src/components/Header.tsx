
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "../scss/Header.scss"


const Header = () => {

    const [ usuario, setUsuario ] = useState<number>(0)

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if (usuario === 0 || usuario > 10){
            alert("Usuario no existente")
            return
        }

        navigate(`usuario/${usuario}`) 
        setUsuario(0)
        
    }

    return (
        <div className = "header flex">

            <h1 className= "logo"><Link to = "/">Cleverpy</Link></h1>

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
                <Link to = "/login">Cerrar Sesión</Link>
            </div>

        </div>
    )
}

export default Header
