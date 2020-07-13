import React, { Component } from "react";

export default class EventBinding extends Component {
  handleClick = () => {
    alert("Hello FE44");
  };
  showMessage = (Message) => {
    alert("Hello" + Message);
  };
  render() {
    return (
      <div>
        event binding compoment
        {/* cách 1 truyền trức tiếp callback function */}
        <button onClick={this.handleClick}>click me</button>
        <button onClick={this.showMessage.bind(this, "Nhân")}>
          showMessage
        </button>
        {/* cách 2 truyền function gián tiếp */}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          click me
        </button>
        <button
          onClick={() => {
            this.showMessage("Nhân");
          }}
        >
          {" "}
          click
        </button>
      </div>
    );
  }
}
