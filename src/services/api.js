import axios from "axios";

const HEADERS = {
    "Authorization": "Basic tokenString"
}

const Axios = axios.create({
    timeout: 30000,
    headers: HEADERS
})

const API = {
    get: async (url) => {
        try {
            const res = await Axios.get(url)
            return res
        } catch (error) {
            return error
        }
    }
}

export default API