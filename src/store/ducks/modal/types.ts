import { Action, ActionCreatorsMapObject } from 'redux';

export interface IModalState {
  openModal: boolean;
}

export interface IModalActions {
  openModal: (payload: boolean) => Action<void>;
}

export type ModalTypes = 'OPEN_MODAL';

export interface IModalActionsCreators
  extends IModalActions,
    ActionCreatorsMapObject {}
