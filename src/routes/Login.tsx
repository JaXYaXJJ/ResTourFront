import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import Spinner from "../components/Spinner/Spinner";
import authService from "../services/auth-service";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

//Yup
const Login = () => {

  const { login } = useContext(AuthContext)
  const nav = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).{6,20}$/)
      .required(),
  });

  const intiailValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={intiailValues}
      onSubmit={({ email, password }) => {
        setLoading(true)
        setError(undefined)

        authService
          .login(email, password)
          .then((res) => {
            if (res.data) {
              Swal.fire({
                title: "Login successfully",
                icon: "success",
                timer: 2000,
              })
              const data = localStorage.getItem("user")
              const user = JSON.parse(data || "{}")
              login(
                email,
                res.data.jwt,
                user.role.some((
                  role: { authority: string }) =>
                  role.authority === "ROLE_ADMIN"))
              nav("/tours")
            }
          })
          .catch((e) => {
            console.log(e.response.data)
            setError("E-Mail or password is incorrect")
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

          <div className="email flex justify-center flex-col my-5">
            <label className="sr-only" htmlFor="email">E-Mail</label>
            <Field
              className="
        px-2 py-1 rounded-md border-orange-100 border-2"
              placeholder="E-Mail" name="email" type="email" id="email" />
            <ErrorMessage name="email" component="div"
              className="
          border border-t-0 border-red-200 rounded-md bg-red-100 px-4 py-1 text-red-400 text-sm" />

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

          <div className="login-btn grid justify-items-end">
            <button
              disabled={loading}
              className="
        disabled:bg-orange-500/50    
        px-2 py-1 rounded-md bg-orange-500 text-white my-5 w-1/3">
              Login
            </button>
          </div>

        </div>
      </Form>
    </Formik>
  );
};

export default Login;
