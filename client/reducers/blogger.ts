import { createReducer } from './createReducer';
import { User } from '../modal/user.interface';

export const blogger = createReducer<User | null>(null, 'SET_BLOGGER'); 
