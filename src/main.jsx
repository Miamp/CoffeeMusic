import { createRoot } from 'react-dom/client'
/* Styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/* Components */
import App from './components/layouts/App'
// import { SearchAll } from './pages/SearchAll'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <SearchAll /> */}
  </>
)
