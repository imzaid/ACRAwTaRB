import * as ActionTypes from '../action-types/index';

export type UpdateGreetingAction = {
  type: ActionTypes.UPDATE_GREETING,
  greeting: string,
};

export type IncrementAction = {
  type: ActionTypes.INCREMENT,
};

export type updateGreeting = typeof updateGreeting;
export type increment = typeof increment;

export const updateGreeting = (greeting: string): UpdateGreetingAction => (
  { type: ActionTypes.UPDATE_GREETING, greeting, }
);
export const increment = (): IncrementAction => (
  { type: ActionTypes.INCREMENT, }
);
