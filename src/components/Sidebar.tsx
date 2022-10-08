
import { Link } from 'react-router-dom'
import '../scss/Sidebar.scss'

const Sidebar = () => {

    return (
        <div className = 'side'>
            <h2>Usuarios Disponibles</h2>

            <nav className = 'navegacion'>
                <Link className = 'usuario' to = '/usuario/1'>User 1</Link>
                <Link className = 'usuario' to = '/usuario/2'>User 2</Link>
                <Link className = 'usuario' to = '/usuario/3'>User 3</Link>
                <Link className = 'usuario' to = '/usuario/4'>User 4</Link>
                <Link className = 'usuario' to = '/usuario/5'>User 5</Link>
                <Link className = 'usuario' to = '/usuario/6'>User 6</Link>
                <Link className = 'usuario' to = '/usuario/7'>User 7</Link>
                <Link className = 'usuario' to = '/usuario/8'>User 8</Link>
                <Link className = 'usuario' to = '/usuario/9'>User 9</Link>
                <Link className = 'usuario' to = '/usuario/10'>User 10</Link>
            </nav>


        </div>
    )
}

export default Sidebar
