import Header from './components/Header/Header'
import { Outlet} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Modal from './components/Modal/Modal'

function App() {

  return (
    <>
      <Header/>
      <Layout>
        <Outlet/>
      </Layout>
      <Modal/>

    </>
  )
}

export default App
