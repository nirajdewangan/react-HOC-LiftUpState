import React from 'react';

//To share a common functionality between components
//A pattern where a function takes a Component as an argument and returns a New Component

//const NewComponent = higherOrderComponent(OriginalComponent)

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="Niraj" />;
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
