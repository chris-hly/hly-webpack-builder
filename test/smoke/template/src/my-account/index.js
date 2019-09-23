import React from 'react';
import ReactDOM from 'react-dom';

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chris: 'hello',

    };
  }

  render() {
    const { chris } = this.state;
    return (
      <div>{chris}</div>
    );
  }
}

export default MyAccount;

ReactDOM.render(
  <MyAccount />,
  document.getElementById('root'),
);
