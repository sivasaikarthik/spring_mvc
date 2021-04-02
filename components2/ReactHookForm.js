import React from 'react'
import { useForm } from "react-hook-form";

function ReactHookForm() {
    const {register, handleSubmit, watch, errors }= useForm();
    onsubmit=(data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
        <input type="text" placeholder="email" name="email" ref={register} />
        <input type="password" 
        placeholder="password" 
        name="passsword" 
        ref={register({required:true,minLength:8})} />
        {errors.password && <p>password requied</p>}
         <input type="submit"/>
         
    </form>
    )
}

export default ReactHookForm
