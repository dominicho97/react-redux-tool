import React, { Component } from "react";
import Notifications from "./Notifications";

export class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard container">
        <div className="row">
          <div className="col s12 m6" />
          <div className="col s12 m5 offsetm1" />
          <Notifications />
        </div>
      </div>
    );
  }
}

export default Dashboard;
