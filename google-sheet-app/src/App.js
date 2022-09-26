import { Button, TextField } from "@mui/material";
import axios from "axios";

import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit ,formState: { errors }} = useForm();
  const submitFormToGoogle = (data) => {
    const { name, age, salary, hobby } = data;
    console.log("Submitted");
    const tableData = {
      name,
      age,
      salary,
      hobby,
    };
    console.log(tableData);
    axios
      .post(
        "https://sheet.best/api/sheets/63a9d949-fd12-43f6-8685-d90b818bd7bc",
        tableData
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="App">
      <h1>Google Sheet Form</h1>
      <form onSubmit={handleSubmit(submitFormToGoogle)}>
        <TextField name="name" error={errors.name} helperText={errors.name&&"The Name is Required"} {...register('name',{ required: true })} label="Name" />
        <br />
        <TextField name="age" error={errors.age} helperText={errors.age && "The Age is required"} {...register('age',{ required: true })} label="Age" />
        <br />
        <TextField name="salary" error={errors.salary} helperText={errors.salary && "The salary is required"}{...register('salary',{ required: true })} label="Salary" />
        <br />
        <TextField name="hobby" error={errors.hobby} helperText={errors.hobby && "The hobby is required"} {...register('hobby',{ required: true })} label="Hobby" />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
