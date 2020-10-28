import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//REDUCERS
import comicsReducer from './comicsDuck'

const rootReducer = combineReducers({
   comics: comicsReducer
 });

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export default function Store() {
   const store = createStore(
     rootReducer,
     composeEnhancers(applyMiddleware(thunk))
   );
   return store;
 }