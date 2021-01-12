import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'


const initialState = {};
const composeEnhancers = (typeof window !== 'undefined' 
  && window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__) || compose;

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
  applyMiddleware(...middleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__&&
      // window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default store;
