export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}

//first point review: REDUX IS IN CHARGE OF MANAGING THE APPLICATION STATE
//STATE IS A SINGLE PLAIN JAVASCRIPT OBJECT
//application state is different than component state

//second point review:  APPLICATION STATE IS FROMED BY REDUCERS
//reducers get tied together wit combineReducers method inside of reducers/index
//for each key, assign one reducer responsible for creating a piece of state

//third point review: REDUCERS ARE IN CHARGE OF CHANGING APPLICATION STATE OVER TIME USING ACTIONS
//whenever action is dispatched it flows through all different reducer in application

//final point review: ACTION AND ACTION CREATOR
//action creators are simple functions that return an action
//action is plain JavaScript object, with type defined


//if i don't understand the action cycle yet, don't worry, i will over time.  this is challenging and i
//will get this.  be kind to the brain, it's taking in so much knowledge.
//redux is a cycle
