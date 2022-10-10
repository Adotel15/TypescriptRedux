
import { Link } from 'react-router-dom'
import { Post } from '../types'
import '../scss/Card.scss'

interface Props {
    carta : Post,
    handleEliminarPost: (id:number) => void
}

const Card = ( {carta, handleEliminarPost}: Props ) => {

    return (
            <div className = "card">
                
                <h1> <span>{ carta.id }</span> : { carta.title } </h1>
            
                <p> { carta.body } </p>

                <div>
                    <h3> {`Usuario: ${carta.userId}`} </h3>
                    <Link className = "editar" to = {`/editar/${carta.id}`} >Editar</Link>
                    <button 
                        className = 'editar'
                        onClick = {() => handleEliminarPost(carta.id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
    )
}

export default Card
