import React, { Component } from "react";

export default class HandleState extends Component {
  // state:thuộc tính có sẵn của class compoment

  state = {
    isLogin: false,
  };
  // tạo ra 2 thuộc tính
  // isLogin nếu = true =>hello hao
  // islogin nếu = false => hiển thị nút đăng nhập
  //   isLogin = false; //hiện đăng nhập
  //   isLogin = true; //hiện hello hào
  userName = "hao";
  renderContent = () => {
    if (this.state.isLogin) {
      return <h1>Hello {this.userName}</h1>;
    }
    return <button onClick={this.login}>Đăng Nhập</button>;
  };

  //   đính nghĩa phương thức xử lý sự kiện login
  login = () => {
    // this.state.isLogin = true;
    const newState = {
      isLogin: true,
    };
    /**this.setstate là phương thwucs có sẵn của compomnet nhận vào state mới thay cho giá trị
     * state củ và tự động gọi lại hàm render
     */

    this.setState(newState, () => {
      console.log(this.state.isLogin);
    });
  };
  render() {
    return (
      <div>
        {/* {this.isLogin ? (
          <h1>Hello{this.userName}</h1>
        ) : (
          <button>Đăng Nhập</button>
        )} */}
        {this.renderContent()}
      </div>
    );
  }
}
