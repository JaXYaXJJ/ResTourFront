import { ColorRing } from "react-loader-spinner"

interface SpinnerProps {
    title?: string
    className?: string
}

const Spinner = (props:SpinnerProps) => {
    return (
        <>
            <div className="
    my-12 flex flex-col justify-center items-center">
                <p>{props.title}</p>
                <ColorRing
                    height={100} />
            </div>
        </>
    )
}

export default Spinner