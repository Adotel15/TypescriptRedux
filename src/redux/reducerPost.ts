
import { ADD_POST, EDIT_POST, DELETE_POST } from './actionTypes'
import { Post, PostAction } from '../types'


const INITIAL_STATE:Post[] = []


export const postReducer = (state:Post[] = INITIAL_STATE, action:PostAction):Post[] => {
    const { type, post } = action
    switch (type){
        
        case ADD_POST:
            return [...state, post]
            

        case EDIT_POST:
            return state.map( item => post.id === item.id ? post : item )

        case DELETE_POST:
            return state.filter( item => post.id !== item.id)

        default:
            return state
    }

}
  
