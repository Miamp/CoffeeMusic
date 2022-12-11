import Footer from '../common/Footer'
import Menu from '../common/Menu'

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  )
}
