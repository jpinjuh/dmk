// React
import React, { Component } from "react";

// MUI
import { Typography, Button } from "@material-ui/core";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    console.log("Component is mounted");
  }

  handleIncrement(number) {
    this.setState({ number: number + 1 });
  }

  render() {
    const { number } = this.state;
    return (
      <>
        <Typography>Counter: {number}</Typography>
        <Button variant="outlined" onClick={() => this.handleIncrement(number)}>
          Increment
        </Button>
      </>
    );
  }
}

export default ClassComponent;
