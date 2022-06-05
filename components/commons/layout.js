// import Navbar from './navbar'
// import Footer from './footer'
import Navbar from './navbar/navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}