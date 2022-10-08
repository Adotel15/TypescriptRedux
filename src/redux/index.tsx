
import { useReducer } from "react";

const ChangePost = "CHANGE_POST"
const CreatePost = "CREATE_POST"

interface Data {
    userId: number, 
    id: number, 
    title: string, 
    body: string
}


interface postsReducerAction {
    type:string,
    payload: {
        newPost:Data
    }
}

const INITIAL_STATE: Array<Data>= 
[
    {
        body: "",
        userId: 0,
        title: "",
        id: 0
    }
]

const init = () => {
    INITIAL_STATE[0].body = ""
    INITIAL_STATE[0].title = ""
    INITIAL_STATE[0].id = 0
    INITIAL_STATE[0].userId = 0
}


const postReducer = (state:Array<Data>, action:postsReducerAction) => {
    const { type, payload } = action
    switch (type){
        
        case ChangePost:
            const { newPost } = payload;
            return state[newPost.id - 1] = newPost;

        case CreatePost:
            return state.push(payload.newPost);
        
        default:
            return state
    }

}



const [ state, dispatch ] = useReducer(postReducer, INITIAL_STATE, init)


console.log(state)