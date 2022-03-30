import React from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate } from "react-router-dom";

type Input = {
  name:string,
  price:number
}

type AddProps = {
  name:string,
  onAdd:(products:Input)=>void
}

const Add = (props: AddProps) => {
  
  const {register,handleSubmit,formState:{errors}} = useForm<Input>();
  const navigate = useNavigate()

  const onSubmit :SubmitHandler<Input> = (dataInput) =>{
    props.onAdd(dataInput)
    navigate('/admin')

  }
  // Call API
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
       <input type="text" {...register('name',{required:true})} />
         {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
         <input type="number" {...register('price')} />

          <button>Thêm mới</button>
         
         
        </form>


    </div>
  )
}

export default Add