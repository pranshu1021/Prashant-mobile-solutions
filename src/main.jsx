
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import "./i18n";
import Scrolltotop from './components/Scrolltotop.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Scrolltotop />
    <App />
  </BrowserRouter>,
)