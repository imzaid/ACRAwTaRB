import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import * as Actions from 'src/action-creators/index';
import { ApplicationState } from 'src/application-state';
import GreetingComponent from 'src/components/Greeting';

import { GreetingProps } from 'src/components/Greeting';
import { updateGreetingAction } from 'src/reducers';

type StateProps = Pick<GreetingProps, 'greeting'>;
type DispatchProps = Pick<GreetingProps, 'updateGreeting'>;

const mapStateToProps = (state: ApplicationState): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  updateGreeting: (greeting: string) => dispatch(updateGreetingAction({ greeting })),
});

const ConnectedGreeting = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GreetingComponent);

export default ConnectedGreeting;
