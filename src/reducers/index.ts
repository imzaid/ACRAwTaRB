import * as T from 'src/types';
import * as C from 'src/constants';
import { defaultState } from '../application-state';
import { ApplicationState } from '../application-state';
import { createAction, handleAction, handleActions } from 'redux-actions';

export const updateGreetingAction = createAction(
  C.UPDATE_GREETING,
  (payload: { greeting: string }) => {
    return payload.greeting;
  }
);
export const updateIncrementAction = createAction(
  C.INCREMENT
);

const updateGreetingHandler = handleAction(
  C.UPDATE_GREETING,
  (state: ApplicationState = defaultState, action: T.UpdateGreetingAction) => {
    return {
      ...state,
      greeting: action.payload,
    };
  },
  defaultState,
);

const updateIncrementHandler = handleAction(
  C.INCREMENT,
  (state: ApplicationState = defaultState, action: T.IncrementAction) => ({
    ...state,
    count: state.count + 1,
  }),
  defaultState,
);

const updateStateReducer = handleActions(
  new Map([
    [updateGreetingAction, updateGreetingHandler],
    [updateIncrementAction, updateIncrementHandler],
  ]) as any,
  defaultState
);

export default updateStateReducer;
