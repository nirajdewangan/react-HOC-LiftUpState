import React from 'react';

const withApiCall = (OriginalComponent, apiSelect = 'users') => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: true,
      };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/'+apiSelect)
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json, isLoading: false });
        });
    }

    render() {
      return (
        <OriginalComponent
          name="Niraj"
          data={this.state.data}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default withApiCall;
