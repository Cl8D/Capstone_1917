import React from 'react';
import './Home.css';

// const SERVER_URL = "http://hoduback.space/oauth2callback";

/*
    axios
      .get(
        "http://localhost:8080/",
        {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        },
        { json데이터 전송}
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
*/


class Home extends React.Component {  
  state = {
    title : '',
    subscriber : ''
  }

  appchange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
      });
  }

  appClick = () => {

    // window.location.href =
    // "https://accounts.google.com/o/oauth2/auth?client_id=812957670514-e7arbd2p80s7f7ln233da9r716934u5h.apps.googleusercontent.com&redirect_uri=" +
    // "http://localhost:3000/oauth2callback" +
    // "&scope=https://www.googleapis.com/auth/youtube.force-ssl&response_type=code&access_type=offline";

  
    this.props.history.push("/list");
  }

  appKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }


  render() {
    const {title, subscriber} = this.state;
    const {appchange, appClick, appKeyPress} = this;

    return (
      <div className="header"> 
          <button className = "login_button" onClick = {appClick}>▶</button>
          <div className = "login"> LOGIN <br></br> TO <br></br> YOUTUBE</div> 
          <div className = "warning_message">지나친 악용은 권장하지 않습니다.</div>
        </div>
        );
    }
  }

  
  export default Home;