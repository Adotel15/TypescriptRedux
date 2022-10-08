
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className = 'app'>
      
      <Header />

      <div>
        <Outlet /> 
      </div>   

    </div>
  )
}

export default Layout
