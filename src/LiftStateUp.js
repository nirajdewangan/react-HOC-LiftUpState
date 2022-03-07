import React, { Component } from 'react';

//Two ways to bind the event in React js
//globalChange={(e) => this.globalChange(e)}
//globalChange={this.globalChange.bind(this)}

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
          globalChange={(e) => this.globalChange(e)}
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
