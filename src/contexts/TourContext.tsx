import { ReactNode, createContext, useState } from "react"
import { Tour } from "../@Types"

interface TourContextState {
    tours: Tour[]
    setTours: (tours: Tour[]) => void
}

const initialState = {
    tours: [],
    setTours: () => { }
}

const TourContext = createContext<TourContextState>(initialState)

export const TourContextProvider = ({ children }: { children: ReactNode }) => {
    const [tours, setTours] = useState<Tour[]>([])

    return (
        <TourContext.Provider value={{ tours, setTours }}>
            {children}
        </TourContext.Provider>
    )
}

export default TourContext