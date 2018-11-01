export type INCREMENT = 'INCREMENT';
export type UPDATE_GREETING = 'UPDATE_GREETING';

export type IncrementAction = { type: INCREMENT };
export type UpdateGreetingAction = {
  type: UPDATE_GREETING,
  payload: string
};
