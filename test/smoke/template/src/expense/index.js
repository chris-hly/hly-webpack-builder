import React from 'react';
import ReactDOM from 'react-dom';
import green from '../images/logo.png';
import './index.scss';

class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null,
    };
  }

    imgClick = () => {
        import('./test/test')
          .then((res) => {
            this.setState({ Text: res.default });
          });
    }

    render() {
      const { Text } = this.state;
      return (
            <figure className="expense">
                {
                    Text ? <Text /> : null
                }
                <img className="expense__img" onClick={this.imgClick} src={green} alt="green" />
                <figcaption className="expense__desc"> hello word gray</figcaption>
            </figure>
      );
    }
}

ReactDOM.render(
    <Expense />,
    document.getElementById('root'),
);
