import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chris: 'hello',
    };
  }

  render() {
    const { chris } = this.state;
    return (
      <div>
        动态import {chris}
      </div>
    );
  }
}

export default Test;
