import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as Actions from 'src/action-creators/index';
import { ApplicationState } from 'src/application-state';
import GreetingComponent from 'src/components/Greeting';

import { GreetingProps } from 'src/components/Greeting';

type StateProps = Pick<GreetingProps, 'greeting'>;
type DispatchProps = Pick<GreetingProps, 'updateGreeting'>;

const mapStateToProps = (state: ApplicationState): StateProps => ({
  greeting: state.greeting
});

const mapDispatchToProps = (dispatch: Dispatch<Function>): DispatchProps => ({
  updateGreeting: (newGreeting: string) => {
    dispatch(Actions.updateGreeting(newGreeting));
  },
});

const ConnectedGreeting = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GreetingComponent);

export default ConnectedGreeting;
