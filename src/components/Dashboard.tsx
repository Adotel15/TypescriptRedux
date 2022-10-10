
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Card from "./Card"
import { Post, DispatchType } from "../types"
import { leerAPI, deletePost } from "../redux/actionCreator"
import '../scss/Dashboard.scss'



const Dashboard = () => {
    
    const posts: Post[] = useSelector( (state: Post[]) => state)

    const dispatch: DispatchType = useDispatch()

    useEffect(() => {
        if (posts.length === 0) leerAPI(dispatch)
    })

    const handleEliminarPost = (id:number):void => {

        if(window.confirm("¿Seguro que quieres eliminar este post?")) {
            let postEliminar = posts.findIndex(item => item.id === id)
            dispatch(deletePost(posts[postEliminar]))
        }
    }

    return (
        <div className = "dashboard">
            <h1>Dashboard</h1>
            <section className = "caja">
                {posts.map(carta => (
                    <Card 
                        key = {carta.title}
                        handleEliminarPost = {handleEliminarPost}
                        carta = {carta}
                    />
                ))}
            </section>

            <p className = "footer">©Copyright Adrian Dotel Pujols 2022</p>
        </div>
    )
}

export default Dashboard
