import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
  const middleware = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}







// const initialState = {};

// const middleware = [thunk];
// const store = createStore(
//   rootReducer,
//   initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__&&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;
