import React from 'react'
import { useStateValue } from '../context'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const [state, dispatch] = useStateValue()
  const user = state.token
    return user ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Auth