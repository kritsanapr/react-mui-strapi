import http from "./configAxios"

const getAllProducts = () => {
    return http.get("/products");
}

export default {
    getAllProducts
}