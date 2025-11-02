import React from 'react'
import { useForm } from 'react-hook-form'
export const FormsDemo4 = () => {
         const{register,handleSubmit,formState:{errors}}=useForm()
        const submitHandler = (data)=>{
            console.log("data...",data)
        }
        const validationSchema  = {
        numberValidator:{
            required:{
                value:true,
                message:"Phone number is requried"
            },

            minLength:{
                value:10,
                message:"You should enter 10 numbers atleast"
            },
            maxLength:{
                value:10,
                message:"Max number should be 10 only"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Phone Number</label>
                <input type='tel'{...register("number",validationSchema.numberValidator)}></input>
                {errors.number?.message}
            </div>

            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
