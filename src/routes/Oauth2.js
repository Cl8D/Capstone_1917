import { react, useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import { Redirect } from "react-router";

// response code

const Oauth2 = (props) => {
  const queryObj = queryString.parse(props.location.search);
  const { code } = queryObj;

  useEffect(() => {
    axios
      .get("http://hoduback.space/oauth2/code?code=" + code)
      .then((res) => {
        console.log(res);
        localStorage.setItem("Token", "Bearer " + res.data.access_token);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [code]);

  return <Redirect to ="/list"/>;
};

export default Oauth2;
