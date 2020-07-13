import React, { Component } from "react";
import cssDataBinding from "./DataBinding.module.css";

export default class DataBingding extends Component {
  // thuộc tính
  name = "frontend44";
  img = "https://picsum.photos/100/100";
  //   phương thức
  renderImg = () => {
    return (
      <div className="card w-25">
        <h1 className={`${cssDataBinding.title} display-4`}>Đây Là Hình Ảnh</h1>
        <img className="card-img-top" src={this.img} alt="123" />
      </div>
    );
  };

  render() {
    //   binding biến
    let title = "CYBERSOFT - FE 44";
    let srcImg = "https://picsum.photos/200/200";
    // binding hàm
    let renderText = () => {
      // trả về chuỗi hoặc số hoặc đoạn html react(jsx)
      return (
        <div>
          <h1>hello 123</h1>
        </div>
      );
    };
    return (
      <div>
        {this.renderImg()}
        <h1 id="title">{title}</h1>
        <img src={srcImg} alt="123" />
        {renderText()}
        <p>Name:{this.name}</p>
      </div>
    );
  }
}
