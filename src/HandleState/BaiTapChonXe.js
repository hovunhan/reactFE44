import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/red-car.jpg",
  };
  changecolor = (newImgsrc) => {
    this.setState({ srcImg: newImgsrc });
  };
  render() {
    return (
      <div className="container ">
        <h3 className="text-center"> Bài Tập Chọn Xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.srcImg} alt="red_car.jpg" />
          </div>
          <div className="col-6">
            <h5 className="text-center" color="red">
              Chọn Màu Xe
            </h5>
            <div className="row">
              <div className="col-3">
                <button
                  style={{ border: "1px soild #888" }}
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    this.changecolor("./img/red-car.jpg");
                  }}
                >
                  Red Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px soild #888" }}
                  class="btn btn-warning"
                  onClick={() => {
                    this.changecolor("./img/silver-car.jpg");
                  }}
                >
                  Silver Car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px soild #888" }}
                  class="btn btn-secondary"
                  onClick={() => {
                    this.changecolor("./img/Steel-car.jpg");
                  }}
                >
                  Steel Car
                </button>
              </div>
              <div className="col-3">
                <button type="button" class="btn btn-danger">
                  Danger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
