
import { useEffect, useState } from "react"
import Card from "./Card"
import { Data } from '../types'
import '../scss/Dashboard.scss'



const Dashboard = () => {

    const [ data, setData ] = useState<Data[]>([])

    useEffect (() => {

        const url:string = 'https://jsonplaceholder.typicode.com/posts'

        const leerAPI = async (url:string) => {
            
            const response = await fetch(url)
            const resultado = await response.json()

            setData(resultado)
        }

        leerAPI(url)

    }, [])
    

    return (
        <div className = "dashboard">
            <h1>Dashboard</h1>
            <section className = "caja">
                {data.map(carta => (
                    <Card 
                        key = {carta.title}
                        carta = {carta}
                    />
                ))}
            </section>
        </div>
    )
}

export default Dashboard
