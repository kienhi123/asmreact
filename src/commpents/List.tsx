import React from 'react'
import type { ProductType } from '../type/Products';
import {Link} from 'react-router-dom'
type ProductManagerRemove = {
  products: ProductType[];
  onRemove: (id: number) => void
}

const List = (props: ProductManagerRemove) => {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
     <a href="/add">Thêm mới</a>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Price</th>
            <th scope="col">Chức năng</th>
          </tr>
          {props.products.map((item, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <button  onClick={() => props.onRemove(item._id)}>Remove</button>
              <Link to={`/products/${item._id}/edit`}>Edit</Link> <br />

            </tr>
          })}


        </tbody>


      </table>
    </div>
  )
}

export default List;