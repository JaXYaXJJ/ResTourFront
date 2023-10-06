import { useQuery } from "react-query"
import Spinner from "../components/Spinner/Spinner"
import { tourRequest } from "../services/tour-service"
import { Link, useFetcher } from "react-router-dom"
import TourContext from "../contexts/TourContext"
import { useContext, useEffect } from "react"

interface Tour {
  id: number
  title: string
  destination: string
  description: string
  tourRoute: string
  availableDate: string
  price: string
}

const Tours = () => {
  const { setTours } = useContext(TourContext)
  const { isLoading, data: res } = useQuery("get-packages", tourRequest)

  useEffect(() => {
    if (res && res.data) {
      setTours(res?.data)
    }
  }, [res])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1>Tours</h1>
      {res?.data.map((tour: Tour) =>
        <Link
          to={`/tours/${tour.id}`}
          key={tour.id}
        >
          {tour.title}
          {tour.destination}
        </Link>
      )}
    </>
  )
}

export default Tours