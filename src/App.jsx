import './assets/styles/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Characters from './containers/Characters'
import Favorites from './containers/Favorites'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App