import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <>
        <ToastContainer />
        <Outlet/>
    </>
  )
}

export default Root