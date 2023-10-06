import { ReactNode, createContext, useEffect, useState } from "react"
import { string } from "yup"

interface AuthContext {
    isLoggedIn: boolean
    isAdmin: boolean
    mail?: string
    token?: string
    login: (mail: string, token: string, admin: boolean) => void
    logout: () => void
}

const initialState = {
    isLoggedIn: false,
    isAdmin: false,
    login: (mail: string, token: string, admin: boolean) => { },
    logout: () => { },
}

const AuthContext = createContext(initialState)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [mail, setMail] = useState<string>()
    const [token, setToken] = useState<string>()

    useEffect(() => {
        const data = localStorage.getItem("user")
        if (data) {
            const user = JSON.parse(data)
            setIsLoggedIn(true)
            setIsAdmin(user.role.some((
                role: { authority: string }) =>
                role.authority === "ROLE_ADMIN"))
            setMail(user.mail)
            setToken(user.token)
        }
    }, [])

    const auth = {
        isLoggedIn: isLoggedIn,
        isAdmin: isAdmin,
        mail,
        token,
        login: (mail: string, token: string, admin: boolean) => {
            setMail(mail)
            setToken(token)
            setIsLoggedIn(true)
            setIsAdmin(admin)
        },
        logout: () => {
            setMail(undefined)
            setToken(undefined)
            setIsLoggedIn(false)
            setIsAdmin(false)
            localStorage.removeItem("user")
        }
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext