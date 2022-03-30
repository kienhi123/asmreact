import React , {useEffect} from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import {useParams, useNavigate } from "react-router-dom";
import { read } from '../api/product';
import { ProductType } from '../type/Products';

type Input = {
  name:string,
  price:number
}

type EditProps = {
  onUpdate:(products:ProductType)=>void
}

const Edit= (props:EditProps) => {
  
  const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
   const {id}= useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getProducts= async()=>{
          const {data}= await read(id);
          reset(data);
      }
      getProducts();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdate(data)
    navigate('/admin')

  }
  // Call API
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
           <input type="text"  {...register('name')}  placeholder='Tên sản phẩm'/>
           <input type="text"  {...register('price')}  placeholder='Tên sản phẩm'/>

          <button>Update</button>
         
         
        </form>


    </div>
  )
}

export default Edit;

