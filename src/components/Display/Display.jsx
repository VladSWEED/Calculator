import React from 'react';
import { connect } from 'react-redux';
import '../../containers/Calculator.css';

const Display = (props) => (
  <div className="display" data-testid="display">{props.display}</div>
);

const mapStateToProps = (state) => ({ display: state.display });

export default connect(mapStateToProps)(Display);
