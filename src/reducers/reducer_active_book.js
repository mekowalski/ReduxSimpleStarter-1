//all reducers get 2 arguments: current state and action
//state argument is not application state, only the state this reducer is responsible for
//when state argument comes undefined, return null
export default function(state = null, action) {
  //state += 1 the first time the action is triggered then state would add 1, then goes up to 2, 3 etc
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
