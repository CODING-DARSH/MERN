import React from 'react'
import { useForm } from 'react-hook-form'
export const FormsDemo6 = () => {
             const{register,handleSubmit,formState:{errors}}=useForm()
            const submitHandler = (data)=>{
                console.log("data...",data)
            }
        const validationSchema  = {
        hobbyValidator:{
            required:{
                value:true,
                message:"Check box hobbies "
            },

      validate: (value) =>{
       return  value && value.length>=2 || "Please select at least 2 hobbies"
    }   
        }
    }
  return (
            <div style={{textAlign:"center"}}>
        <h1>Form Demo 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Sports</label>
                <input type='checkbox' {...register("hobbies",validationSchema.hobbyValidator,value="Sports")}></input>
                <label>Music</label>
                <input type='checkbox' {...register("hobbies",validationSchema.hobbyValidator),value="Sports"}></input>
                <label>Dance</label>
                <input type='checkbox' {...register("hobbies",validationSchema.hobbyValidator)}></input>
                {errors.hobbies?.message}

            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}

