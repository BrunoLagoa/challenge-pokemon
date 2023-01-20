import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as modalActions } from '../store/ducks/modal';
import { IReduxStore } from '../utils/interfaces/IReduxStore';

export const useModal = () => {
  const { openModal } = useSelector((state: IReduxStore) => state.modal);

  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(modalActions.openModal(false));
  }, []);

  return {
    openModal,
    closeModal,
  };
};
