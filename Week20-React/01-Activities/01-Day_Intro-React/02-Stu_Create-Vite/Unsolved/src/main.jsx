// main.jsx is our starting point

import ReactDOM from 'react-dom/client' // bringing in react dom from client side
// used for createRoot func to render app
import App from './App.jsx' // bring in app component that we want to render

ReactDOM.createRoot(document.getElementById('root')).render(
  <App /> // render app component
)
