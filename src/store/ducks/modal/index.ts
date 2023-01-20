import { createActions, createReducer } from 'reduxsauce';
import { IModalState, IModalActionsCreators, ModalTypes } from './types';

export const { Creators, Types } = createActions<
  Record<ModalTypes, ModalTypes>,
  IModalActionsCreators
>({
  openModal: ['payload'],
});

const INITIAL_STATE: IModalState = {
  openModal: false,
};

const openModal = (state = INITIAL_STATE, action: { payload: boolean }) => ({
  ...state,
  openModal: action.payload,
});

export default createReducer(INITIAL_STATE, {
  [Types.OPEN_MODAL]: openModal,
});
