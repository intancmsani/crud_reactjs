// create-student.component.js– Bertanggung jawab untuk menciptakan siswa baru
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const CreateStudent = () => {
  const [formValus, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  //submit handler
  const onSubmit = (studentObject) => {
    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("student successfully created");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  //return student form
  return (
    <StudentForm
      initialValues={formValus}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Student
    </StudentForm>
  );
};

//export createstudent component
export default CreateStudent;
