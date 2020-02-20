import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: ""
    };
  }

  // component가 열리면 _getHost 함수를 호출
  componentDidMount() {
    this._getHost();
  }

  //  _getHost는 /api/host에 요청을 해서 받아온 결과 값
  _getHost = async () => {
    const res = await axios.get("/api/host");
    //  그 결과중에 host라는 정보만 뽑아서 state로 바꿈
    this.setState({ host: res.data.host });
  };
  render() {
    return (
      <div>
        <h3>
          welecome to <u>{this.state.host}</u> Blog!
        </h3>
      </div>
    );
  }
}
