import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/* Components */
import Routing from './components/common/Routing'
// import App from './components/App'
// import { SearchAll } from './pages/SearchAll'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routing />
      {/* <App /> */}
      {/* <SearchAll /> */}
    </BrowserRouter>
  </>
)
