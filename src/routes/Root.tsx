import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProfileClient, getProfileRequest } from "../clients/profile";
import { useLoginStore } from "../store";

const Root = () => {
  const navigate = useNavigate();
  const { authHeader, loginId } = useLoginStore(({ authHeader, loginId }) => ({
    authHeader,
    loginId,
  }));
  useEffect(() => {
    if (!authHeader) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authHeader]);

  useEffect(() => {
    const client = getProfileClient();
    client.getProfileById(
      getProfileRequest(loginId),
      {
        Authorization: `bearer ${authHeader}`,
      },
      (err, res) => {
        console.log({ err, res });
      }
    );
  }, [loginId, authHeader]);

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Root;
