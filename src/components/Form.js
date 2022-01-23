import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "../redux/action/StudentAction";
import { RandomNumber } from "../helper/RandomNumber";
export default function Form() {
  const dispatch = useDispatch();
  const [studentObj, setStudentObj] = useState({
    name: "",
    rollNo: "",
    email: "",
    age: "",
  });
  //function to set object
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentObj({
      ...studentObj,
      [name]: value,
    });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    studentObj.id = RandomNumber();
    dispatch(action.Add(studentObj));
    handleReset();
  };
  //function to empty all inputs
  const handleReset = () => {
    setStudentObj({ name: "", rollNo: "", email: "", age: "" });

    console.log("here");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <form className="py-5">
            <div className="mb-3">
              <label for="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="name"
                placeholder={"Enter Your Full Name"}
                value={studentObj.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="RollNumber" className="form-label">
                Roll Number
              </label>
              <input
                type="Number"
                className="form-control"
                id="RollNumber"
                name="rollNo"
                placeholder={"Enter Roll Number"}
                value={studentObj.rollNo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder={"Enter Email"}
                value={studentObj.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Age
              </label>
              <input
                type="Number"
                className="form-control"
                id="age"
                name="age"
                placeholder={"Enter student age"}
                value={studentObj.age}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleAdd}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
