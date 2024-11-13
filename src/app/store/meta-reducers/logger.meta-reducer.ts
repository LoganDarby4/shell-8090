import { Action, ActionReducer } from '@ngrx/store';

export function logger(reducer: ActionReducer<Action>): ActionReducer<Action> {
  return (state, action) => {
    console.group(action.type);
    console.log('Previous State:', state);
    console.log('Action:', action);
    
    const nextState = reducer(state, action);
    
    console.log('Next State:', nextState);
    console.groupEnd();
    
    return nextState;
  };
}