
import { useEffect, useState } from 'react'
import { Routes ,Route} from 'react-router-dom'
import { list } from './api/product';
import List from './commpents/List';
import Websitelayout from './pages/layout/Websitelayout'
import { ProductType } from './type/Products';

function App() {
  const [products ,setProducts ] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className="App">
       <Routes>
              <Route path='/' element={<Websitelayout/>} />
              <Route path='/admin' element={<List products={products}/>} />
              
       </Routes>
    </div>
  )
}

export default App
