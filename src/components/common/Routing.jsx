import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import App from '../App'

export default function Routing () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace />} />
          <Route path='/home' element={<App />} />
        </Routes>
      </Layout>
    </>
  )
}
