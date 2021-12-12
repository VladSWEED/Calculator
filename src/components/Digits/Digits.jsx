import React from 'react';
import { connect } from 'react-redux';
import '../../containers/Calculator.css';
import { digit, dot, equal} from '../../stores/actions/actions';
import Button from '../Button/Button';

const Digits = (props) => {
  const createDigits = () => {
    const digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return digits.map((el) => (
      <Button
        key={el}
        value={el}
        onClick={() => props.digit(el, props.display)}
      />
    ));
  };
  return (
    <div className="digits" data-testid="digits">
      {createDigits()}
      <Button id="dot" value={'.'} onClick={props.dot} />
      <Button value={'='} onClick={() => props.equal(props.display)} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
  };
};

const mapDispatchToProps = (dispatch) => ({
  equal: (value) => dispatch(equal(value)),
  digit: (value, prev) => dispatch(digit(value, prev)),
  dot: () => dispatch(dot()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Digits);
