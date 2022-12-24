import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik"
import {useDispatch, useSelector} from 'react-redux'
import { login } from "../features/auth/authSlice"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
      onSubmit: (values) => {
        dispatch(login(values))
      },
  });
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
    )
  useEffect(() => {
    if(isSuccess) {
      navigate('admin')
    } else {
      navigate('')
    }
  }, [user, isLoading, isError, isSuccess, message  ])
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh"}}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput type="text" name="email" label="Email Address" id="email" val={formik.values.email} onCh={formik.handleChange("email")}/>
          <CustomInput type="password" name="password" label="Password" id="pass" val={formik.values.password} onCh={formik.handleChange("password")} />
          <div className="mb-3 text-end">
            <Link to="forgot-password">Forgot Password?</Link>
          </div>
          <button to='/admin'
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
