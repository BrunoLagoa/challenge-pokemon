import React from 'react';
import { useModal } from './useModal';
import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('useModal', () => {
  it('should return initial value isOpenModal, openModal and closeModal', () => {
    const mockStore = configureStore();
    const store = mockStore({ modal: { isOpenModal: false } });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useModal(), { wrapper });

    expect(result.current.isOpenModal).toBe(false);
    expect(result.current.openModal).toBeInstanceOf(Function);
    expect(result.current.closeModal).toBeInstanceOf(Function);
  });
});
