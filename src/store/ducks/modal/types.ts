import { Action, ActionCreatorsMapObject } from 'redux';

export interface IModalState {
  isOpenModal: boolean;
}

export interface IModalActions {
  open: () => Action<void>;
  close: () => Action<void>;
}

export type ModalTypes = 'OPEN' | 'CLOSE';

export interface IModalActionsCreators
  extends IModalActions,
    ActionCreatorsMapObject {}
