import { createActions, createReducer } from 'reduxsauce';
import { IModalState, IModalActionsCreators, ModalTypes } from './types';

export const { Creators, Types } = createActions<
  Record<ModalTypes, ModalTypes>,
  IModalActionsCreators
>({
  open: [],
  close: [],
});

const INITIAL_STATE: IModalState = {
  isOpenModal: false,
};

const open = () => ({
  isOpenModal: true,
});

const close = () => ({
  isOpenModal: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close,
});
