import { createReducer } from './createReducer';
import { User } from '../modal/user.interface';

export const user = createReducer<User | null>(null, 'SET_USER'); 