import React from 'react';

//To share a common functionality between components
//A pattern where a function takes a Component as an argument and returns a New Component

//const NewComponent = higherOrderComponent(OriginalComponent)

const withCounter = (OriginalComponent, incrementNumber = 1) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
