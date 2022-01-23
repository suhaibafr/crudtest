import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "../redux/action/StudentAction";
import { useHistory } from "react-router";
export default function StudentList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [editData, setEditData] = useState();
  const [editId, setEditId] = useState(-1);

  // getting data from store
  const studentsData = useSelector((state) => state.students);
  console.log(studentsData);
  //function to delete single data//
  const DeleteData = (id) => {
    dispatch(action.Delete(id));
    console.log("delete");
  };

  //function to edit single data//
  const Edit = (id, data) => {
    setEditId(id);
    setEditData(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  //function to update store
  const UpdateData = () => {
    console.log("update", editData);
    dispatch(action.Update(editData));
    setEditData();
    setEditId(-1);
  };

  // showing user list
  const listItem = studentsData?.map((eachStudent, index) => {
    if (editId === eachStudent.id) {
      return (
        <tr key={index}>
          <th scope="row">{index}</th>
          <td>
            <input value={editData.name} onChange={handleChange} name="name" />
          </td>
          <td>
            <input
              value={editData.email}
              onChange={handleChange}
              name="email"
            />
          </td>
          <td>
            <input value={editData.age} onChange={handleChange} name="age" />
          </td>
          <td>
            <input
              value={editData.rollNo}
              onChange={handleChange}
              name="rollNo"
            />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => UpdateData(eachStudent.id)}
            >
              Done
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={index}>
          <th scope="row">{index}</th>
          <td>{eachStudent.name}</td>
          <td>{eachStudent.email}</td>
          <td>{eachStudent.age}</td>
          <td>{eachStudent.rollNo}</td>
          <td>
            <button
              className="btn btn-primary mgnrgt"
              onClick={() => Edit(eachStudent.id, eachStudent)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => DeleteData(eachStudent.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
  });

  return (
    <div className="container px-2 ">
      <div className="heading-style py-3">
        <h1 className="">Student List</h1>
        <button
          className="btn btn-light p-2"
          onClick={() => {
            history.push("/form");
          }}
        >
          Back
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Reg.no</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{listItem}</tbody>
      </table>
    </div>
  );
}
