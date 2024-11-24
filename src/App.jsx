import './App.css'
import Router from './router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "number-brm"
function App() {

  return (
    <>
    <Router/>
    <ToastContainer/>
    </>
  )
}

export default App