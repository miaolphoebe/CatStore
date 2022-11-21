import React, { Component } from "react";
import { createInventory } from "../store/inventory";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class CreateInventory extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quantity: "",
      price: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createInventory({ ...this.state });
    this.setState({ name: "", quantity: "", price: "" });
  }

  handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { name, quantity, price } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id="inventory-form-admin" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <TextField
          id="outlined-basic"
          style={{ marginLeft: "10px" }}
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label style={{ marginLeft: "10px" }} htmlFor="quantity">
          Quantity:
        </label>
        <TextField
          id="outlined-basic"
          style={{ marginLeft: "10px" }}
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />

        <label style={{ marginLeft: "10px" }} htmlFor="price">
          Price:
        </label>
        <TextField
          id="outlined-basic"
          style={{ marginLeft: "10px" }}
          name="price"
          value={price}
          onChange={handleChange}
        />

        <Button
          style={{ marginLeft: "15px" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createInventory: (inventory) => dispatch(createInventory(inventory, history)),
});

export default connect(null, mapDispatchToProps)(CreateInventory);
