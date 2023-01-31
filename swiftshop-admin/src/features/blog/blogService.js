import axios from "axios"
import { base_url } from "../../utils/base_url"

const getBlogs = async () => {
    const response = await axios.get(`${base_url}blog/`)
    console.log("Data should be here>>>", response.data)
    return response.data
}

const blogService = {
    getBlogs
}

export default blogService