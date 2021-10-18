import { createStore } from "redux";

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

const store = createStore((state = { count: 0 }, action) => {
  //Replacing the if statement with a case statement
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

//this allows for us to see changes in as they occur to the state in store.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Incrementing the count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//   type: "INCREMENT",
// });

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
