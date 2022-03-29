import React from 'react'
import type { ProductType } from '../type/Products';

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number) => void
}

const List = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
     <a href="/admin/product/add">Thêm mới</a>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Price</th>
          </tr>
          {props.products.map((item, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <button   onClick={() => props.onRemove(item._id)}>Remove</button>
            </tr>
          })}


        </tbody>


      </table>
    </div>
  )
}

export default List;