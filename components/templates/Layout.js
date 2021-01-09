import Footer from 'components/templates/Footer'
import Header from 'components/templates/Header'

function Layout(props) {
  return (
    <>
      <Header />
        <main>
          {props.children}
        </main>
      <Footer />    
    </>
  )
}

export default Layout