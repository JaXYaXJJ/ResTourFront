import axios from "axios"

const baseUrl = "http://localhost:8080/api/v1/packages"
export const adminPost = (
    tourTitle: string,
    destination: string,
    description: string,
    tourRoute: string,
    groupLimit: number,
    groupCurren: number,
    availableDate: string,
    price: number ) => {
        
        return axios
            .post(`${baseUrl}`, {
                tourTitle, destination, description, tourRoute, groupLimit, groupCurren, availableDate, price
            })
    }

    export default adminPost