import { createStore } from 'redux';

import { reducer } from './reducer'

//creating store for the redux
export const store = createStore(reducer)
