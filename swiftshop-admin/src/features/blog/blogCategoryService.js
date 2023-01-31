import axios from "axios"
import { base_url } from "../../utils/base_url"

const getBlogCategories = async () => {
    const response = await axios.get(`${base_url}blog-category/`)
    console.log("Data should be here>>>", response.data)
    return response.data
}

const blogCategoryService = {
    getBlogCategories
}

export default blogCategoryService