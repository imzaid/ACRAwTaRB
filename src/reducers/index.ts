import { defaultState } from '../application-state';
import { ApplicationState } from '../application-state';

import { IncrementAction, UpdateGreetingAction } from '../action-creators';
import * as ActionTypes from '../action-types';

type Action = UpdateGreetingAction | IncrementAction;

const ACTION_HANDLERS = {
  [ActionTypes.UPDATE_GREETING]: (state: ApplicationState = defaultState, action: UpdateGreetingAction) => ({
    ...state,
    greeting: action.greeting,
  }),
  [ActionTypes.INCREMENT]: (state: ApplicationState = defaultState, action: IncrementAction) => ({
    ...state,
    count: state.count + 1,
  }),
};

const updateStateReducer = (state: ApplicationState = defaultState, action: Action) => {
  const handler: any = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default updateStateReducer;
