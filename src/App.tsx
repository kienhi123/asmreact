import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { add, list, remove, update } from './api/product';
import Add from './commpents/Add';
import Edit from './commpents/Edit';
import List from './commpents/List';
import Adminlayout from './pages/layout/Adminlayout';
import Websitelayout from './pages/layout/Websitelayout';
// import Websitelayout from './pages/layout/Websitelayout'
import { ProductType } from './type/Products';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);
  // xóa
  const onHandleremove = async (id: number) => {
    remove(id)
    setProducts(products.filter(item => item._id !== id));
  }
  // thêm

  const onHandlerAdd = async (product: any) => {
    const { data } = await add(product)
    setProducts([...products, data]);
  }
  // sửa
  const onHandlerUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {

    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Websitelayout />} />
        <Route path='/add' element={<Add name='kien' onAdd={onHandlerAdd} />} />
        <Route path='/products/:id/edit' element={<Edit onUpdate={onHandlerUpdate} />} />


        <Route path='admin' element={<Adminlayout />}>
          <Route path="product">
          <Route index element={<List products={products} onRemove={onHandleremove} />} />

          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
