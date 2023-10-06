import { useParams } from "react-router-dom"
import TourContext from "../contexts/TourContext"
import { useContext } from "react"

const TourDetails = () => {
  const { id } = useParams()
  const { tours } = useContext(TourContext)

  const tour = tours.find(t => t.id.toString() === id)

  if (tour) {
    return <div>{tour.title}</div>
    return <div>No Such Post</div>
  }
 
  return (
    <div>TourDetails</div>
  )
}

export default TourDetails