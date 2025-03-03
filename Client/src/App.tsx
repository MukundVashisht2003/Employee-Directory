import { Route, Routes } from 'react-router-dom'
import './App.css'
import Read from './Operations/Read/Read'
import Create from './Operations/Create/Create'
import Update from './Operations/Update/Update'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </>
  )
}

export default App
