import Header from './components/Header/Header'
import { Outlet} from 'react-router-dom'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <>
      <Header/>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  )
}

export default App
