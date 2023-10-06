import "../Home/Start.scss"

const Start = () => {

    return (
        <>
            <div className="start-block 
            dark:brightness-50">
                <div className="p-12 opacity-30">
                <div className="title-group 
                w-fit bg-gray-50 rounded-lg">
                    <h1 className="
                title-start-block text-gray-500 opacity-50 py-12 px-12
                dark:text-blue-900 dark:opacity-90">
                        UNIQUE TOURS
                    </h1>
                    <div className="
                description-start-block text-gray-500 px-12 pb-12
                dark:text-blue-900">
                        <p>A unique format of group adventures</p>
                        <p>in which you will take the best routes,</p>
                        <p>explore amazing places and cultures on your own,</p>
                        <p>and find yourself in cool stories.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Start