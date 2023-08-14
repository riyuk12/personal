import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div>Login</div>
        <Link to='/register'>or Register</Link>
    </>
  )
}

export default Login