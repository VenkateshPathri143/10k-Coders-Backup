import React, { Component } from "react";


export class Empolyee extends Component {
  constructor() {
          super()
    this.state = {
      data: {
        username: "",
        password: "",
        email: "",
        date: "",
        month: "",
        year: "",
        weight: "",
        height: "",
      },
      arraydata: [
        {
          username: "Venkatesh",
          password: "Venky212345",
          email: "venkateshpathri143@gimal.com",
          date: "02",
          month: "03",
          year: "2000",

          weight: "65kg",
          height: "5.6feet",
        },
      ],
      index:null,
    };
  }
  handelchange=(e)=>{
      let newdata={...this.state.data}
       newdata[e.target.name]=e.target.value;
       this.setState({data:newdata})
  }
  adduser=()=>{
   let newarraydata=[...this.state.arraydata]
   newarraydata.push(this.state.data)
   this.setState({arraydata:newarraydata})
   this.clearform()
}
clearform=()=>{
    let empty={
        username: "",
        password: "",
        email: "",
        date: "",
        month: "",
        year: "",
        weight: "",
        height: "",
    }
    this.setState({data:empty})
}
edituser=(val,ind)=>{
    this.setState({data:val, index:ind})
  }
  updateuser=()=>{
    var updateuser=[...this.state.arraydata]
    updateuser[this.state.index]=this.state.data
    this.setState({arraydata:updateuser , index:null})
    this.clearform()
  }
  deleteuser=(val,ind)=>{
    let deleteuser = this.state.arraydata.filter((val,i)=> i !== ind)
    this.setState({arraydata:deleteuser})
}
  render() {
    let {
      username,
      password,
      email,
      date,
      month,
      year,
      weight,
      height,
    } = this.state.data;
    return (
      <div>
        <div className="content">
          <label>UserName :</label>
          <br />
          <input
            type={"text"}
            name="username"
            value={username}
            onChange={(e) => {
              this.handelchange(e);
            }}
          />
          <label>Password :</label>
          <br />
          <input
            type={"password"}
            name="password"
            value={password}
            onChange={(e) => {
              this.handelchange(e);
            }}
          />
          <label>Email :</label>
          <br />
          <input
            type={"email"}
            name="email"
            value={email}
            onChange={(e) => {
              this.handelchange(e);
            }}
          />
          <label>Date Of Birth :</label>
          <br />
          <select
            name="date"
            value={date}
            onChange={(e) => {
              this.handelchange(e);
            }}
          >
            <option>Date</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
          <select
            name="month"
            value={month}
            onChange={(e) => {
              this.handelchange(e);
            }}
          >
            <option>Month</option>
            <option>11</option>
            <option>12</option>
            <option>03</option>
            <option>04</option>
          </select>
          <select
            name="year"
            value={year}
            onChange={(e) => {
              this.handelchange(e);
            }}
          >
            <option>Year</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
          </select>
          <br />
          <label>Weight/Height :</label>
          <br />
          <select
            name="weight"
            value={weight}
            onChange={(e) => {
              this.handelchange(e);
            }}
          >
            <option>Weight</option>
            <option>55kg</option>
            <option>60kg</option>
            <option>70kg</option>
            <option>80kg</option>
          </select>
          <select
            name="height"
            value={height}
            onChange={(e) => {
              this.handelchange(e);
            }}
          >
            <option>Height</option>
            <option>6feet</option>
            <option>5.5feet</option>
            <option>5feet</option>
            <option>4.5feet</option>
          </select><br/>

          {this.state.index==null ? <button className="btn btn-primary mt-3" onClick={this.adduser}>submit</button>:
              <button className="btn btn-primary mt-3" onClick={this.updateuser}>update</button>
              }
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody></tbody>
          {this.state.arraydata.map((val, ind) => (
            <tr key={ind}>
              <td>{val.username}</td>
              <td>{val.password}</td>
              <td>{val.email}</td>
              <td>`{val.date + "/" + val.month + "/" + val.year}</td>
              <td>{val.weight}</td>
              <td>{val.height}</td>
              <td><button className="btn btn-warning" onClick={()=>{this.edituser(val,ind)}}>Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{this.deleteuser(val,ind)}}>Delete</button></td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

