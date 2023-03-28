import './assets/styles/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Characters from './containers/Characters'
import Favorites from './containers/Favorites'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App