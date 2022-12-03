// edit-student.component.js– Bertanggung jawab untuk memperbarui data siswa
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  //submit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          props.match.params.id,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("student successfully update");
          //arahkan ke student-list
          props.history.push("/student-list");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  //loaddata from server
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/update-student/" + props.match.params.id
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  }, []);

  //return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

//export component
export default EditStudent;
