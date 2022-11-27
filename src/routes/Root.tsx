import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useLoginStore } from '../store';

const Root = () => {
    const navigate = useNavigate();
    const { authHeader } = useLoginStore(({ authHeader }) => ({
      authHeader 
    }));
    useEffect(() => {
      if (!authHeader) {
        navigate("/login");
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authHeader]);
  return (
    <>
        <ToastContainer />
        <Outlet/>
    </>
  )
}

export default Root