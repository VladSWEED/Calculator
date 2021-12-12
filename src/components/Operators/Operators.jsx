import { connect } from 'react-redux';
import '../../containers/Calculator.css';
import { clear, operator } from '../../stores/actions/actions';
import Button from '../Button/Button';

const Operators = (props) => {
  const operators = ['/', '*', '+', '-'];
  const createOperators = () => {
    return operators.map((el) => (
      <Button
        className="primary"
        key={el}
        value={el}
        onClick={() => props.operator(el, props.display)}
      />
    ));
  };
  return (
    <div className="operators" data-testid="operators">
      {createOperators()}
      <Button className="primary" value="CE" onClick={props.clear} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clear()),
  operator: (el, display) => dispatch(operator(el, display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Operators);
