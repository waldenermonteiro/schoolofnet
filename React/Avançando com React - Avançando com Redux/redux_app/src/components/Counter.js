import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { total } = this.props;
    return (
      <div>
        <div>
          <button type="button" onClick={() => this.props.dispatch({ type: 'INCREMENT' })}>
            +
          </button>
          <h5>{total}</h5>
          <button type="button" onClick={() => this.props.dispatch({ type: 'DECREMENT' })}>
            -
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ counterReducer: { total } }) => ({
  total,
});
export default connect(mapStateToProps)(Counter);
