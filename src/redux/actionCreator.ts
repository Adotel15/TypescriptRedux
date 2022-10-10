
import { ADD_POST, EDIT_POST, DELETE_POST } from './actionTypes'
import { Post, PostAction, DispatchType } from '../types'

export const leerAPI = async (dispatch: DispatchType) => {

    const url:string = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const resultado = await response.json()

    resultado.map( (item:Post) => dispatch(addPost(item)))
} 

export const addPost = (post:Post) => {
    const action: PostAction = {
        type: ADD_POST,
        post
    }
    return action
} 

export const editPost = (post:Post) => {
    const action: PostAction = {
        type: EDIT_POST,
        post
    }
    return action
} 

export const deletePost = (post:Post) => {
    const action: PostAction = {
        type: DELETE_POST,
        post
    }
    return action
}