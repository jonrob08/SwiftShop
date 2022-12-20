import React from 'react'
import CustomInput from '../components/CustomInput'

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
      <form action="">
        <CustomInput type="text" placeholder='Email Address' id='email' />
        <CustomInput type="password" placeholder='Password' id='pass' />
        <button className="border-0 px-3 py-2" style={{ background: "#ffd333" }} type="submit"></button>
      </form>
      </div>
    </div>
  )
}

export default Login