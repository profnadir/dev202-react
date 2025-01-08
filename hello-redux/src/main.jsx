import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {combineReducers, legacy_createStore as createStore} from 'redux'
import reducer from './store/reducer.js'
import {Provider} from 'react-redux'
import AppH from './AppH.jsx'
import { articleReducer } from './store/articlesReducer.js'

const rootReducer = combineReducers({
  reducer,
  articleReducer
})

const store = createStore(rootReducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppH />
    </Provider>
  </StrictMode>,
)
