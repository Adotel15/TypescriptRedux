
export interface Post {
    userId: number, 
    id: number, 
    title: string, 
    body: string
}

export type PostAction = {
    type: string,
    post: Data
}

export type DispatchType = (args: PostAction) => PostAction