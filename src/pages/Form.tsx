
import { useParams } from "react-router-dom"
import '../scss/Form.scss'

const Form = () => {

    const { id } = useParams()

    return (
        <div className = "form_general">
            <p> App / Dashboard / Edición </p>
            <h1>Editar Post { id }</h1>

            <div>
                <form className = "form_editar">
                    <label htmlFor = "titulo">Título:</label>
                    <input 
                        name = "titulo"
                        type = "text"
                        placeholder = "Título"
                    />
                    <label htmlFor = "post">Post:</label>
                    <textarea
                        name = "post"
                        placeholder = "Nuevo Post"
                    />
                    <label htmlFor = "usuario">Usuario:</label>
                    <input 
                        name = "usuario"
                        type = "text"
                        placeholder = "Usuario"
                    />
                    <input
                        className = "input_editar"
                        type = "submit"
                        value = "Editar"
                    />
                </form>
            </div>
        </div>
    )
}

export default Form
