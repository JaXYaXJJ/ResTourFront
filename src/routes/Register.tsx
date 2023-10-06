import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Spinner from "../components/Spinner/Spinner";
import authService from "../services/auth-service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

//Yup
const Register = () => {

  const nav = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2).required(),
    lastName: Yup.string().min(2).required(),
    dob: Yup.date().required(),
    phone: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).{6,20}$/)
      .required(),
  });

  const intiailValues = {
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
  }

  return (
    
    <Formik
      validationSchema={validationSchema}
      initialValues={intiailValues}
      onSubmit={({ firstName, lastName, dob, phone, email, password }) => {
        setLoading(true)
        setError(undefined)
        authService
          .register(firstName, lastName, dob, phone, email, password)
          .then((res) => {
            Swal.fire({
              title: "Registered successfully",
              icon: "success",
              timer: 2000
            })
            nav("/login")
          })
          .catch((e) => {
            console.log(e.response.data)
            setError(JSON.stringify(e.response.data.defaultMessage));
          })
          .finally(() => {
            setLoading(false)
          })
      }}
    >
      <Form>

        {loading && <Spinner title="Loading..." />}
        {error && <p className="text-red-400 flex justify-center 
        border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 w-fit mx-auto my-12">{error}</p>}

        <div className="form-group w-fit my-12 mx-auto">

          <div className="name-group flex justify-between my-5 gap-5">
            <div className="flex-col">
              <label className="sr-only" htmlFor="firstName">First Name</label>
              <Field
                className="
        px-2 py-1 rounded-md border-orange-100 border-2"
                placeholder="First Name" name="firstName" type="text" id="firstName" />
              <ErrorMessage name="firstName" component="div"
                className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />
            </div>

            <div className="flex-col">
              <label className="sr-only" htmlFor="lastName">Last Name</label>
              <Field
                className="
        px-2 py-1 rounded-md border-orange-100 border-2"
                placeholder="Last Name" name="lastName" type="text" id="lastName" />
              <ErrorMessage name="lastName" component="div"
                className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />
            </div>
          </div>

          <div className="dob flex justify-center flex-col">
            <label className="sr-only" htmlFor="dob">Date Of Birthday</label>
            <Field
              className="
        px-2 py-1 rounded-md border-orange-100 border-2"
              placeholder="Date Of Birthday" name="dob" type="date" id="dob" />
            <ErrorMessage name="dob" component="div"
              className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />
          </div>

          <div className="contact-group flex justify-between my-5 gap-5">
            <div className="flex-col">
              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <Field
                className="
        px-2 py-1 rounded-md border-orange-100 border-2"
                placeholder="Phone Number" name="phone" type="text" id="phone" />
              <ErrorMessage name="phone" component="div"
                className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />
            </div>

            <div className="flex-col">
              <label className="sr-only" htmlFor="email">E-Mail</label>
              <Field
                className="
        px-2 py-1 rounded-md border-orange-100 border-2"
                placeholder="E-Mail" name="email" type="email" id="email" />
              <ErrorMessage name="email" component="div"
                className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />
            </div>
          </div>

          <div className="password flex justify-center flex-col">
            <label className="sr-only" htmlFor="password">Password</label>
            <Field
              className="
        px-2 py-1 rounded-md border-orange-100 border-2"
              placeholder="Password" name="password" type="password" id="password" />
            <ErrorMessage name="password" component="div"
              className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />
          </div>

          <div className="form-btn grid justify-items-end">
            <button
              disabled={loading}
              className="
        disabled:bg-orange-500/50    
        px-2 py-1 rounded-md bg-orange-500 text-white my-5 w-1/4">
              Register
            </button>
          </div>

        </div>
      </Form>
    </Formik>
  );
};

export default Register;
