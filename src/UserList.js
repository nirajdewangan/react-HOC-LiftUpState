import React from 'react';
import withApiCall from './withApiCall';

class UserList extends React.Component {
  render() {
    const { name, hitUrl, data, isLoading } = this.props;
    return (
      <>
        <h2>
          User List {name} {hitUrl}
        </h2>
        <table width="100%" border="1" cellspacing="0" cellpadding="0">
          <tr>
            <th> Username</th>
            <th> Email</th>
            <th> Phone</th>
          </tr>

          {!isLoading ? (
            Object.keys(data).map((key) => {
              return (
                <tr>
                  <td>{data[key].username}</td>
                  <td>{data[key].email}</td>
                  <td>{data[key].phone}</td>
                </tr>
              );
            })
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <h3>Loading...</h3>
          )}
        </table>
      </>
    );
  }
}

export default withApiCall(UserList, 'users');
