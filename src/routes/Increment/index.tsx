import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as ActionCreators from 'src/action-creators/index';
import { ApplicationState } from 'src/application-state';
import { IncrementProps } from 'src/components/Increment';
import IncrementComponent from 'src/components/Increment';

type StateProps = Pick<IncrementProps, 'count'>;
type DispatchProps = Pick<IncrementProps, 'increment'>;

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    increment: () => dispatch(ActionCreators.increment()),
  };
}

const ConnectedIncrement = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncrementComponent);

export default ConnectedIncrement;
