import { connect } from "react-redux";

const TestRedux = ({ counter, dispatch }) => {
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div className="flex">
      <button onClick={decrement} className="action">
        -1
      </button>
      <h1>{counter}</h1>
      <button onClick={increment} className="action">
        +1
      </button>
    </div>
  );
};

export default connect((state) => ({ counter: state.count }))(TestRedux);
