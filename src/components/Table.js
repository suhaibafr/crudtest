import React, { useState, useEffect } from "react";
import style from "./table.css";
export default function Table() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters`)
      .then((response) => response.json())
      .then((charaters) => {
        setData(charaters);
      });
  }, []);
  console.log(data);
  return (
    <table className={style.table_style}>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Title</th>
      </thead>
      <tbody>
      {data?.map((item, index) => {
          return(
        <tr>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.title}</td>
        </tr>)
      })}</tbody>
    </table>
  );
}
