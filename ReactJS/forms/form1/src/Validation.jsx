import React, { Component } from "react";

export default class Validation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      allUserInfo: [
        {
          name: " Venkatesh",
          username: "venkatesh",
          email: "venkateshpathri143@gmail.com",
          password: "Venky@12345",
          confirmPassword: "Venky@12345",
        },
      ],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let newUserInfo = { ...this.state.userInfo };
    newUserInfo[e.target.name] = e.target.value;
    this.setState({ userInfo: newUserInfo });
  };

  addUserInfo = () => {
    console.log("calling... add userinfo");
    let newUsers = [...this.state.allUserInfo];
    newUsers.push(this.state.userInfo);
    this.setState({ allUserInfo: newUsers });
    this.clearform();
  };

  clearform = () => {
    let newForm = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.setState({ userInfo: newForm });
  };

  deleteUser = (usr) => {
    let latestUser = this.state.allUserInfo.filter(
      (myusr) => myusr.name !== usr.name
    );
    this.setState({ allUserInfo: latestUser });
  };
  editUser = (usr, i) => {
    this.setState({ userInfo: usr, editIndex: i });
    console.log(" call edit user ");
  };

  updateUser = ()=>{
    let  latestAllusers = [...this.state.allUserInfo]
    latestAllusers[this.state.editIndex] = this.state.userInfo
    this.setState({allUserInfo:latestAllusers})
  }


  render() {
    return (
      <>
        <div className="container border border-2 m-2 justify-content-center">
          <form>
            <label htmlFor="name"></label>
            Name :
            <input
              type="text"
              name="name"
              value={this.state.userInfo.name}
              id="name"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="UserName"></label>
            UserName :
            <input
              type="text"
              name="username"
              id="userName"
              value={this.state.userInfo.username}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="email"></label>
            Email :
            <input
              type="email"
              name="email"
              value={this.state.userInfo.email}
              id="email"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="password"></label>
            Password :
            <input
              type="text"
              name="password"
              id="password"
              value={this.state.userInfo.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="confirmPassword"></label>
            Confirm password :
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={this.state.userInfo.confirmPassword}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <br />
            {/* <button
              type="button"
              onClick={this.addUserInfo}
              className="btn btn-primary"
            >
              add userInfo
            </button> */}
          </form>
        {this.state.editIndex  !== null ? (
           <button
            type="button"
            className="btn btn-primary"
            onClick={this.updateUser}
          >
            update User
          </button>
        ):(
          <button
          type="button"
          onClick={this.addUserInfo}
          className="btn btn-primary"
        >
          add userInfo
        </button>
        )}
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>password</th>
              <th>confirm password</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUserInfo.map((usr, i) => (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmPassword}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}