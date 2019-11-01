import { Dispatch } from 'react-redux';

export interface DispatchProps<State> {
  dispatch: Dispatch<State>;
}
