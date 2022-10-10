
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { Post, DispatchType } from "../types"
import { deletePost } from "../redux/actionCreator"
import Card from "../components/Card"


import '../scss/Usuario.scss'

const Usuario = () => {

    const posts: Post[] = useSelector( (state: Post[]) => state)

    const { id } = useParams()

    const dispatch: DispatchType = useDispatch()

    const [ usuarioPost, setUsuarioPost ] = useState<Array<Post>>([
        {
            id: 0,
            userId: 0,
            title: "",
            body: ""
        }
    ])

    useEffect(() => {
        const postUsuario = posts.filter( item => item.userId === Number(id) )
        setUsuarioPost(postUsuario)
    }, [id, posts])

    const handleEliminarPost = (id:number):void => {

        if(window.confirm("¿Seguro que quieres eliminar este post?")) {
            let postEliminar = posts.findIndex(item => item.id === id)
            dispatch(deletePost(posts[postEliminar]))
        }
    }

    return (
        <div className = 'usuario_general'>
            <p> App / Dashboard / Usuario {id} </p>
            <h1>Posts del Usuario {id} </h1>  

            <div className = "usuario_tarjeta">
                {usuarioPost.map( item => (
                    <Card 
                        key = {item.id}
                        carta = {item}
                        handleEliminarPost = {handleEliminarPost}
                    />
                ))}
            </div> 

            <p className = "footer">©Copyright Adrian Dotel Pujols 2022</p>
        </div>
    )
}

export default Usuario
