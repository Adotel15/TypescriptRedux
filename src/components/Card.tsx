
import { Link } from 'react-router-dom'
import { Data } from '../types'
import '../scss/Card.scss'

interface Props {
    carta : Data
}

const Card = ({carta}: Props ) => {

    return (
            <div className = "card">
                
                <h1> <span>{ carta.id }</span> : { carta.title } </h1>
            
                <p> { carta.body } </p>

                <div>
                    <h3> {`Usuario: ${carta.userId}`} </h3>
                    <Link className = "editar" to = {`/editar/${carta.id}`} >Editar</Link>
                </div>
            </div>
    )
}

export default Card
