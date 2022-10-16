import Head from "next/head";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { STRAPI_URL } from "../../constants/api";
import {
  setToken,
  getTokenFromLocalCookie,
  getUserFroLocalCookie,
} from "../../library/auth";
import Router from "next/router";

const Login = () => {
  const jwt = getTokenFromLocalCookie();

  useEffect(() => {
    if (jwt) {
      Router.push("/admin");
    } else {
      Router.push("/login");
    }
  }, []);

  /** Strapi authentication */

  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${STRAPI_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    });
    const responseData = await response.json();
    // console.log(response);
    console.log(responseData);
    setToken(responseData);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title className="text-2xl">Login</title>
        <meta name="Login page" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header header={"Login"} />
        <MainLayout>
          <form className="form-control w-96" onSubmit={handleSubmit}>
            <label htmlFor="email" className="label">
              <span className="label-text">Email or Username:</span>
              {/* {errors.identifier && (
                <span className="label-text-alt text-error">
                  {errors.identifier.message}
                </span>
              )} */}
            </label>
            <input
              id="email"
              type="text"
              name="identifier"
              className="input input-bordered"
              // {...register("identifier", { required: true })}
              onChange={handleChange}
            />
            <label htmlFor="password" className="label">
              <span className="label-text">Password:</span>
              {/* {errors.password && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )} */}
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="input input-bordered"
              // {...register("password", { required: true })}
              onChange={handleChange}
            />
            <button className="btn btn-block mt-6" type="submit">
              Send message
            </button>
          </form>
        </MainLayout>
      </Layout>
    </>
  );
};

export default Login;
