import axios from "axios"

const registroAPI = axios.create({
    baseURL:'http://localhost:3001/api/registro'
})

export default registroAPI