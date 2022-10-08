
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const Usuario = () => {

    const { id }= useParams()

    return (
        <div className = 'form_general'>
            <p> App / Dashboard / Usuario {id} </p>
            <h1>Posts del Usuario {id} </h1>   
        </div>
    )
}

export default Usuario
