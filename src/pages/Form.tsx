
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Post, DispatchType } from "../types"
import { editPost } from '../redux/actionCreator'

import '../scss/Form.scss'
import { useEffect } from "react"

const Form = () => {

    const [ postEditar, setPostEditar ] = useState<Post>({
        id: 0,
        userId: 0,
        body: "",
        title: ""
    })
    const { id } = useParams()
    
    const posts: Post[] = useSelector( (state: Post[]) => state)
    
    const dispatch: DispatchType = useDispatch()

    const navigate = useNavigate()
    
    useEffect(() => {
        setPostEditar(posts[Number(id) - 1])
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if( [postEditar.body , postEditar.id, postEditar.title, postEditar.userId].includes("")) return
        
        dispatch(editPost(postEditar))

        alert("Post Editado Correctamente")

        navigate("/")
    }

    return (
        <div className = "form_general">
            <p> App / Dashboard / Edición </p>
            <h1>Editar Post { id }</h1>

            <div>
                <form 
                    className = "form_editar"
                    onSubmit = {handleSubmit}
                >
                    <label htmlFor = "titulo">Título:</label>
                    <input 
                        name = "title"
                        type = "text"
                        placeholder = "Título"
                        onChange = { event => setPostEditar({
                            ...postEditar,
                            [ event.target.name ]: event.target.value
                        }) }
                        value = {postEditar.title}
                    />
                    <label htmlFor = "post">Post:</label>
                    <textarea
                        name = "body"
                        placeholder = "Nuevo Post"
                        className = "form_textarea"
                        onChange = { event => setPostEditar({
                            ...postEditar,
                            [ event.target.name ]: event.target.value
                        }) }
                        value = {postEditar.body}
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
