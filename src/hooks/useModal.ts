import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as modalActions } from '../store/ducks/modal';
import { IReduxStore } from '../utils/interfaces/IReduxStore';

export const useModal = (): {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
} => {
  const { isOpenModal } = useSelector((state: IReduxStore) => state.modal);
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(modalActions.open());
  }, [dispatch]);
  const closeModal = useCallback(() => {
    dispatch(modalActions.close());
  }, [dispatch]);

  return { isOpenModal, openModal, closeModal };
};
