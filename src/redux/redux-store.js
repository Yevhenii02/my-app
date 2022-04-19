import { combineReducers, createStore } from "redux";
import contentReducer from './content-reducer';
import dialogReducer from './dialog-reducer';
import navReducer from './nav-reducer';

let reducers = combineReducers({
	content: contentReducer,
	dialogsBlock: dialogReducer,
	nav: navReducer,
});

let store = createStore(reducers);

console.log(store);

export default store;