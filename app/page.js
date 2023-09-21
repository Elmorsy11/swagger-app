'use client'

import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(() => import("swagger-ui-react"))
import 'swagger-ui-react/swagger-ui.css';
import Login from './components/Login';
import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';

const page = () => {
  const [isAuth, setIsAuth] = useState(typeof window !== "undefined" && localStorage?.getItem('Auth') === 'true')

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage?.setItem('Auth', isAuth)
    }
  }, [isAuth])

  return (
    <>

      {!isAuth ? <> <Login setIsAuth={setIsAuth} isAuth={isAuth} /> </> : <>   <NavBar isAuth={isAuth} setIsAuth={setIsAuth} /> <SwaggerUI url="/api/swagger" /> </>}
      <ToastContainer position="top-center"
        autoClose={3000} />
    </>
  )
}

export default page