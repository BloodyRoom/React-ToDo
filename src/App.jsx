import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/kit/Input/Input'
import Textarea from './components/kit/Textarea/Textarea'
import Button from './components/kit/Button/Button'
import Task from './components/kit/Task/Task'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useAction } from "./hooks/useAction";
import { useSelector } from 'react-redux'

function App() {
  const { tasks } = useSelector((state) => state.task); 
  const { loadTasks, createTasks } = useAction();

  useEffect(() => {
    loadTasks();
  }, []);

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

  const addTask = (values) => {
    createTasks({title: values.title.trim(), description: values.description.trim()});
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
    onSubmit: addTask,
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
        <Textarea 
          name="description"
          id="description"
          placeholder="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
          onBlur={formik.handleBlur}
        />
        <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
          <Button>Add</Button>
        </div>
      </form>

      <div style={taskContainerStyle}>
        {
          tasks.map((task) => (
            <Task key={task.id} title={task.title} description={task.description} />
          ))
        }
      </div>
    </>
  )
}

export default App
