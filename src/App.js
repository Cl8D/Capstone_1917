//import logo from './logo.svg';
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";
import Loading from "./routes/Loading";
import Navigation from "./Component/Navigation";
import Oauth2 from "./routes/Oauth2";
import VideoList from "./routes/Video_list";


//import {react, useEffect, useState} from "react";
// useEffect -> App() 실행될 때마다 같이 실행 (생성자 느낌, 가장 처음에 실행), 안에 있는 state들의 값이 바뀔때마다 실행
// arrow function, axios
// ,[state] -> state 값이 변경될 때마다 내부가 실행됨. state가 없으면 func이 호출될 때마다 실행


function App() {
  //useEffect(client);
  //axios.get(url , {});
  
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/oauth2callback"  component={Oauth2} />
      <Route path="/list" exact={true} component={VideoList} />
      <Route path="/Loading" exact={true} component={Loading} />
  </BrowserRouter>
  );
}
// </BrowserRouter><Route path="/Result/:title/:subscriber" component={Result} />
export default App;
