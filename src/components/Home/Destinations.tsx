import { NavLink } from "react-router-dom"
import "../Home/Destinations.scss"

const Destinations = () => {
    return (
        <>
            <div className="upper-destinations
     flex justify-between">
                <div className="faroe w-1/2">
                    <a href="" className="">
                        <div className="p-12 opacity-30">
                            <div className="faroe-title
                            w-fit bg-gray-50 rounded-lg">
                                <h1 className="title-start-block
                                 text-gray-500 opacity-50 py-12 px-12
                                 dark:text-blue-900 dark:opacity-90">
                                    FAROE
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="nepal w-1/2">
                    <a href="" className="">
                        <div className="p-12 opacity-30">
                            <div className="nepal-title
                            w-fit bg-gray-50 rounded-lg">
                                <h1 className="title-start-block
                             text-gray-500 opacity-50 py-12 px-12
                             dark:text-blue-900 dark:opacity-90">
                                    NEPAL
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="middle-destinations
     flex justify-between">
                <div className="india 
    w-1/2">
                    <a href="" className="">
                        <div className="p-12 opacity-30">
                            <div className="india-title
                            w-fit bg-gray-50 rounded-lg">
                                <h1 className="title-start-block
                             text-gray-500 opacity-50 py-12 px-12
                             dark:text-blue-900 dark:opacity-90">
                                    NORTH INDIA
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="iceland 
    w-1/2">
                    <a href="" className="">
                        <div className="p-12 opacity-30">
                            <div className="iceland-title
                            w-fit bg-gray-50 rounded-lg">
                                <h1 className="title-start-block
                             text-gray-500 opacity-50 py-12 px-12
                             dark:text-blue-900 dark:opacity-90">
                                    ICELAND
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="lower-destinations
     flex justify-between">
                <div className="kamchatka 
    w-1/2">
                    <a href="" className="">
                        <div className="p-12 opacity-30">
                            <div className="kamchatka-title
                            w-fit bg-gray-50 rounded-lg">
                                <h1 className="title-start-block
                             text-gray-500 opacity-50 py-12 px-12
                             dark:text-blue-900 dark:opacity-90">
                                    KAMCHATKA
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="mongolia 
    w-1/2">
                    <a href="" className="">
                        <div className="p-12 opacity-30">
                            <div className="mongolia-title
                            w-fit bg-gray-50 rounded-lg">
                                <h1 className="title-start-block
                             text-gray-500 opacity-50 py-12 px-12
                             dark:text-blue-900 dark:opacity-90">
                                    MONGOLIA
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Destinations