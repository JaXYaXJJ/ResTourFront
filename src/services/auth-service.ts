import axios from "axios"

const baseUrl = "http://localhost:8080/api/v1/auth"
export const register = (
    firstName: string,
    lastName: string,
    dob: string,
    phone: string,
    email: string,
    password: string ) => {
    
    return axios
        .post(`${baseUrl}/signup`, { firstName, lastName, dob, phone, email, password })
}

export const login = (email: string, password: string) => {
    return axios.post(`${baseUrl}/signin`, {
            email,
            password
        })
        .then((res) => {
            const token = res.data.jwt
            const role = res.data.userRole

            if (token) {
                localStorage.setItem("user", JSON.stringify({ 
                    email, 
                    token,
                    role
                }))
            }
            return res
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = { 
    register, 
    login, 
    logout 
}

export default authService