import React, { Component } from "react";
import BTSmartPhone from "./BTSmartPhone";

export default class BTSListPhone extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center"> Best Smart Phone</h3>
        <div className="row">
          <div className="col-3">
            <BTSmartPhone />
          </div>
          <div className="col-3">
            <BTSmartPhone />
          </div>
          <div className="col-3">
            <BTSmartPhone />
          </div>
          <div className="col-3">
            <BTSmartPhone />
          </div>
        </div>
      </div>
    );
  }
}
