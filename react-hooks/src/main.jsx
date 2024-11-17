import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import CounterComponent from './CounterComponent.jsx'
// import ToggleButton from './ToggleButton.jsx'
// import FormInput from './FormInput.jsx'
// import FetchingData from './FetchingData.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
