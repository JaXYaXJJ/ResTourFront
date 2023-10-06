import { ReactNode, createContext, useState } from "react"

const initialState = {
    darkMode: false,
    toggleDarkMode: () => { }
}

const DarkModeContext = createContext(initialState)

export const DarkModeContextWrapper = ({ children }: { children: ReactNode }) => {
    const [dark, setDark] = useState(false)

    const toggleDarkMode = () => {
        setDark((d) => !d)
        document.body.classList.toggle("dark")
    }

    return (
        <DarkModeContext.Provider value={{ darkMode: dark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext