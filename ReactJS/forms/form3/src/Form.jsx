import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        mobile: "",
      },
      allData: [
        {
          firstName: "Venkatesh",
          lastName: "Pathri",
          dateOfBirth: "02/03/2000",
          email: "venkateshpathri143@gmail.com",
          mobile: "+91 9949272139",
        },
      ],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let getdata = { ...this.state.data };
    getdata[e.target.name] = e.target.value;
    this.setState({ data: getdata });
  };
  addData = () => {
    let latestData = [...this.state.allData];
    latestData.push(this.state.data);
    this.setState({ allData: latestData });
    this.clearForm();
  };

  clearForm = () => {
    let newData = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      mobile: "",
    };
    this.setState({ data: newData });
  };

  deleteData = (dt)=>{
    let delData = this.state.allData.filter(( myData)=> myData.firstName !== dt.firstName)
    this.setState({allData:delData})
  }

  editData =(dt,i)=>{
    this.setState({data:dt,editIndex:i})
  }
  updateData = ()=>{
    let getSomeData = [...this.state.allData]
    getSomeData[this.state.editIndex]=this.state.data
    this.setState({allData:getSomeData})
  }

  render() {
    return (
      <>
        <div className="  border border-2  p-2">
          <form>
            <label>first name :</label>
            <input
              type="text"
              name="firstName"
              id=""
              value={this.state.data.firstName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label>Last name :</label>
            <input
              type="text"
              name="lastName"
              id=""
              value={this.state.data.lastName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label>date of birth :</label>
            <input
              type="date"
              name="dateOfBirth"
              id=""
              value={this.state.data.dateOfBirth}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label>email :</label>
            <input
              type="text"
              name="email"
              id=""
              value={this.state.data.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label>mobile :</label>
            <input
              type="tel"
              name="mobile"
              id=""
              value={this.state.data.mobile}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            {/* <button
              type="button"
              className="btn btn-primary"
              onClick={this.addData}
            >
              addData
            </button> */}
          </form>

          {this.state.editIndex !== null ? (
            <button type="button" className="btn btn-primary" onClick={this.updateData}>update Data</button>
          ):(
            <button
            type="button"
            className="btn btn-primary"
            onClick={this.addData}
          >
            addData
          </button>
          )}
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>dateOfBirth</th>
              <th>email</th>
              <th>mobile</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allData.map((dt, i) => (
              <tr key={i}>
                <td>{dt.firstName}</td>
                <td>{dt.lastName}</td>
                <td>{dt.dateOfBirth}</td>
                <td>{dt.email}</td>
                <td>{dt.mobile}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editData(dt, i);
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
                      this.deleteData(dt);
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