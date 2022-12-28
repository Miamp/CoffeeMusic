import Menu from '../common/Menu'
import Footer from '../common/Footer'

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  )
}
