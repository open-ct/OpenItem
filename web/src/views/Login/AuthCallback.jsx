import React from "react";
import {Button, Result, Spin} from "antd";
import * as Setting from "../../utils/setting";

export default class AuthCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      msg: null,
    };
  }

  componentWillMount() {
    this.login();
  }

  login() {
    setTimeout(() => {
      Setting.showMessage("success", `Logged in successfully`);
      Setting.goToLink("/home");
    }, 3000);
    Setting.signin().then((res) => {
      console.log("this is res:");
      console.log(res);
      if (res.status === "ok") {
        Setting.showMessage("success", `Logged in successfully`);
          Setting.goToLink("/home");
        } else {
        this.setState({
          msg: res.msg,
        });
      }
    });
    console.log(this.props);
    
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        {this.state.msg === null ? (
          <Spin
            size="large"
            tip="Signing in..."
            style={{paddingTop: "10%"}}
          />
        ) : (
          <div style={{display: "inline"}}>
            <Result
              status="error"
              title="Login Error"
              subTitle={this.state.msg}
              extra={[
                <Button type="primary" key="details">
                  Details
                </Button>,
                <Button key="help">Help</Button>,
              ]}
            />
          </div>
        )}
      </div>
    );
  }
}