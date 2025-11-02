import React from 'react'
import { useForm } from 'react-hook-form'
export const FormDemo3 = () => {
         const{register,handleSubmit,formState:{errors}}=useForm()
        const submitHandler = (data)=>{
            console.log("data...",data)
        }
        const validationSchema  = {
        genderValidator:{
            required:{
                value:true,
                message:"PLease select a gender"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>        <div>
          <label>GENDER</label>
          MALE:{" "}
          <input type="radio" {...register("gender",validationSchema.genderValidator)} value="male"></input>{" "}
          <br></br>
          FEMALE:{" "}
          <input type="radio" {...register("gender",validationSchema.genderValidator)} value="female"></input>
           {errors.gender?.message}
        </div>
            <div>
                <input type='submit'></input>
            </div>
            </form>

    </div>
  )
}
