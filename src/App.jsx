import { useState } from 'react'
import './App.css'
import Input from './components/kit/Input/Input'
import Textarea from './components/kit/Textarea/Textarea'
import Button from './components/kit/Button/Button'
import Task from './components/kit/Task/Task'
import { useFormik } from 'formik'
import * as Yup from "yup";

function App() {
  const formStyle = {
    display: "flex",
    width: "344px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
  }

  const taskContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "344px",
    marginTop: "30px",
    gap: "10px"
  }

  const validationScheme = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .max(30, "Max length 30 symbols")
  });

  const initValues = {
    title: "",
    description: ""
  }



  const formik = useFormik({
    initialValues: initValues,
    // onSubmit: addTask,
    validationSchema: validationScheme,
  });

  return (
    <>
      <form style={formStyle} onSubmit={formik.handleSubmit}>
        <Input 
          placeholder="Title"
          name="title"
          id="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title ? (
          <p style={{color: "rgb(147, 59, 59)", textAlign: "start", width: "90%", margin: "0"}}>{formik.errors.title}</p>
        ) : null}
        <Textarea placeholder="Description"/>
        <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
          <Button>Add</Button>
        </div>
      </form>

      <div style={taskContainerStyle}>
        <Task />
      </div>
    </>
  )
}

export default App
