import { IPokemonState } from '../../store/ducks/pokemon/types';
import { IModalState } from '../../store/ducks/modal/types';

export interface IReduxStore {
  pokemon: IPokemonState;
  modal: IModalState;
}
