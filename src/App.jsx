import { Route, Routes } from 'react-router-dom'
import './App.css'
import DataComponent from './components/DataComponent'
import FormComponent from './components/FormComponent'

function App() {

  return (
    <div>
      <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/data/" element={<DataComponent />} />
          </Routes>
    </div>
  )
}

export default App
