import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addAmount } from './redux/counterSlice';

function App() {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.counterReducer.amount);

  const dispatch = useDispatch();

  return (
      <div className="app">
        <div className="text-center">
          <h1>React JS boilerplate</h1>
          <h6>
            By{' '}
            <a href="https://github.com/gyanendraknojiya" target="_blank" without rel="noreferrer">
              Gyanendra Knojiya
            </a>
          </h6>
          <div className="display-2 my-3">{amount}</div>
          <div className="my-4">
            <button className="btn btn-success" onClick={() => dispatch(increment())}>
              + Increment
            </button>
            <button className="btn btn-danger ms-2" onClick={() => dispatch(decrement())}>
              + Decrement
            </button>
          </div>
          <div>
            <input
                type="number"
                className="form-control"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <div className="text-center">
              <button
                  className="btn btn-primary  mt-2"
                  onClick={() => {
                    dispatch(addAmount(value));
                    setValue(0);
                  }}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
export default App;