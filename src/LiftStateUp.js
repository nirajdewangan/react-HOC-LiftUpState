import React, { Component } from 'react';

class LiftStateUp extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  globalChange(item) {
    this.setState({ data: item });
  }

  render() {
    return (
      <>
        <Child
          val={this.state.data}
          globalChange={this.globalChange.bind(this)}
        />
        <br />
        <Child val={this.state.data} />
      </>
    );
  }
}

class Child extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <input
          value={this.props.val}
          onChange={(e) => {
            this.props.globalChange(e.target.value);
          }}
        />
      </>
    );
  }
}

export default LiftStateUp;
