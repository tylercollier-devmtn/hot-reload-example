import { createStore } from 'redux';
import reducer from './reducer';

// See: https://github.com/facebook/create-react-app/issues/2317#issuecomment-303081658
const configureStore = () => {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducer", () => {
        store.replaceReducer(reducer)
      })
    }
  }

  return store
}

export default configureStore
