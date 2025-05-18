import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'

function App() {
  

  return (
    <Navbar>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
      </Routes>
    </Navbar>
  )
}

export default App
