import React from "react";
import { useForm } from "react-hook-form";

export default function ContactMe() {
  const { handleSubmit, register,formState:{errors} } = useForm();
  const onSubmit = (formdata) => {
    console.log(formdata);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <h2>Please fill out the following : </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstname",{required:true})} placeholder="firstname" type="text" />
        {errors.firstname?.type==='required' && "this field is required"}
        <br />
        <input {...register("lastname",{required:true})} placeholder="lastname" type="text" />
        <br />
        <input {...register("email")} placeholder="email" type="email" />
        <br />
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//Using react hook form
//we dont need e.preventDefault()

//we dont need ref hook
