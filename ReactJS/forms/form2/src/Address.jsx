import React, { Component } from "react";

export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      allAddressDetails: [
        {
          street: "R&R Colouny Cheerlavancha",
          city: "Rajanna Siricilla",
          state: "telangana",
          zipcode: "505302",
          country: "india",
        },
      ],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let newAddress = { ...this.state.address };
    newAddress[e.target.name] = e.target.value;
    this.setState({ address: newAddress });
  };
  addAddress = () => {
    console.log("calling add address....!!!");
    let latestAddress = [...this.state.allAddressDetails];
    latestAddress.push(this.state.address);
    this.setState({ allAddressDetails: latestAddress });
    this.clearForm();
  };
  clearForm = () => {
    let presentAddress = {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    };
    this.setState({ address: presentAddress });
  };

  deleteAddress = (adrs) => {
    console.log("calling deleteaddress");
    let totalAddressDetails = this.state.allAddressDetails.filter(
      (myAdrs) => myAdrs.street !== adrs.street
    );
    this.setState({ allAddressDetails: totalAddressDetails });
  };
  editAddress = (adrs, i) => {
    this.setState({ address: adrs, editIndex: i });
    console.log("callingg editadress");
  };
  updateAddress = () => {
    console.log("callingg updateaddress")
    let latestadd = [...this.state.allAddressDetails];
    // console.log(latestadd)
    latestadd[this.state.editIndex] = this.state.address;

    this.setState({ allAddressDetails: latestadd });
  };

  render() {
    return (
      <>
        <div className="container border border-2  my-3 ">
          <label htmlFor=""> street : </label>
          <input
            type="text"
            className="mt-3"
            name="street"
            id=""
            value={this.state.address.street}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor=""> city : </label>
          <input
            type="text"
            name="city"
            id=""
            value={this.state.address.city}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor=""> state : </label>
          <input
            type="text"
            name="state"
            id=""
            value={this.state.address.state}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor=""> zipcode : </label>
          <input
            type="text"
            name="zipcode"
            id=""
            value={this.state.address.zipcode}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor=""> country : </label>
          <input
            type="text"
            name="country"
            id=""
            value={this.state.address.country}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br /> <br />
          {/* <button type='button' className='btn btn-secondary mb-3' onClick={this.addAddress}>addAddress</button> */}
          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={this.updateAddress}
            >
              updateAddress
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={this.addAddress}
            >
              addAddress
            </button>
          )}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>street</th>
                <th>city</th>
                <th>state</th>
                <th>zipcode</th>
                <th>country</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allAddressDetails.map((adrs, i) => (
                <tr key={i}>
                  <td>{adrs.street}</td>
                  <td>{adrs.city}</td>
                  <td>{adrs.state}</td>
                  <td>{adrs.zipcode}</td>
                  <td>{adrs.country}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editAddress(adrs, i);
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
                        this.deleteAddress(adrs);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}