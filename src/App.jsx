import { useState } from 'react'
import './App.css'
import Input from './components/kit/Input/Input'
import Textarea from './components/kit/Textarea/Textarea'
import Button from './components/kit/Button/Button'
import Task from './components/kit/Task/Task'
import { useFormik } from 'formik'
import * as Yup from "yup";


function App() {
  const [tasks, setTasks] = useState([]);
  
  const generateID = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (tasks.find((task) => {
      if (task.id === result) {
        return true;
      }
      return false;
    })) {
      generateID(length++);
    }

    return result;
  }

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
    console.log(values);
    setTasks([...tasks, {id: generateID(), title: values.title.trim(), description: values.description.trim()}]);
    console.log(tasks);
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
