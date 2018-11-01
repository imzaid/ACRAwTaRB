import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/application-state';
import { IncrementProps } from 'src/components/Increment';
import IncrementComponent from 'src/components/Increment';
import { updateIncrementAction } from 'src/reducers';

type StateProps = Pick<IncrementProps, 'count'>;
type DispatchProps = Pick<IncrementProps, 'increment'>;

const mapStateToProps = (state: ApplicationState): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: () => dispatch(updateIncrementAction()),
});

const ConnectedIncrement = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncrementComponent);

export default ConnectedIncrement;
