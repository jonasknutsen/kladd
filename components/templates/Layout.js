import Footer from 'components/templates/Footer'
import Header from 'components/templates/Header'

function Layout(props) {
  return (
    <div className='h-full flex flex-col'>
      <Header />
        <main className='flex-1'>
          {props.children}
        </main>
      <Footer />
      <style global jsx>{`
        #__next {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default Layout
