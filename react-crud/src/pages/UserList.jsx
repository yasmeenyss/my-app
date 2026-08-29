import { useEffect, useState } from "react"
import axios from "../api/axios"




export default function UserList(){
    const [ Users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await api.get("/users")
        console.log(res)
        setUsers(res.data)
    }

    useEffect(() => {
        fetchUsers();

    },[])

    return <h1>Users CRUD</h1>

}