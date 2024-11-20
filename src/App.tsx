import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import GlobalStyle from './styles'
import Rotas from './routes'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
