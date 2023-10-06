import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import adminPost from "../services/admin-service";
import Swal from "sweetalert2";

const AdminPost = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const validationSchema = Yup.object({
        tourTitle: Yup.string().required(),
        destination: Yup.string().required(),
        description: Yup.string().required(),
        tourRoute: Yup.string().required(),
        groupLimit: Yup.number(),
        groupCurren: Yup.number(),
        availableDate: Yup.date().required(),
        price: Yup.number().required(),
    });

    const intiailValues = {
        tourTitle: "",
        destination: "",
        description: "",
        tourRoute: "",
        groupLimit: 0,
        groupCurren: 0,
        availableDate: "",
        price: 0,
    }

    return (

        <Formik
            validationSchema={validationSchema}
            initialValues={intiailValues}
            onSubmit={({ tourTitle, destination, description, tourRoute, groupLimit, groupCurren, availableDate, price
            }) => {
                setLoading(true)
                    adminPost(tourTitle, destination, description, tourRoute, groupLimit, groupCurren, availableDate, price)
                        .then((res) => {
                            Swal.fire({
                                title: "Post successfully",
                                icon: "success",
                                timer: 2000,
                            })
                            nav("/tours")
                        })
                        .catch((e) => {
                            console.log(e.response.data)
                            setError(JSON.stringify(e.response.data.defaultMessage))
                        })
                        .finally(() => {
                            setLoading(false)
                        })
            }}
        >
            <Form>
                <div className="flex justify-between flex-col w-fit mx-auto">

                <label className="sr-only" htmlFor="tourTitle">Tour Title</label>
                <Field placeholder="First Name" name="tourTitle" type="text" id="tourTitle" />

                <label className="sr-only" htmlFor="destination">Destination</label>
                <Field placeholder="Destination" name="destination" type="text" id="destination" />

                <label className="sr-only" htmlFor="description">Description</label>
                <Field placeholder="Description" name="description" type="text" id="description" />
                
                <label className="sr-only" htmlFor="tourRoute">Tour Route</label>
                <Field placeholder="Tour Route" name="tourRoute" type="text" id="tourRoute"/>

                <label className="sr-only" htmlFor="groupLimit">Group Limit</label>
                <Field placeholder="Group Limit" name="groupLimit" type="number" id="groupLimit"/>

                <label className="sr-only" htmlFor="groupCurren">Group Curren</label>
                <Field placeholder="Group Curren" name="groupCurren" type="number" id="groupCurren"/>

                <label className="sr-only" htmlFor="availableDate">Avl. Date</label>
                <Field placeholder="Avl. Date" name="availableDat" type="date" id="availableDat"/>

                <label className="sr-only" htmlFor="price">Price</label>
                <Field placeholder="Price" name="price" type="number" id="price"/>

                <div>
                <button>
                    Post
                </button>
                </div>
    
                </div>
            </Form>
        </Formik>
    );
};

export default AdminPost;
