import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './context/index.jsx'
import { reducer, initialState } from './context/reducer.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </BrowserRouter>
)
