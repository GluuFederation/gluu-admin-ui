import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import oidcReducer from '../../redux/reducers/OIDCReducer'
// import { configureTestStore } from '../../../../app/redux/store'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

function render(
  ui,
  {
    preloadedState,
    store = /* configureTestStore({...preloadedState, token: 'mock_token'}), */     createStore(oidcReducer, {...preloadedState, token: 'mock_token'}, applyMiddleware(...middleware)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }