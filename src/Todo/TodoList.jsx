import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reducers/TodoSlice";
import { todoDeleteAlert } from "./TodoDel";
import { todoEdit } from "./TodoEdit";
import "./TodoList.css";

const TodoList = () => {
  const { value } = useSelector((state) => state.todo);
  const dispatch = useDispatch()

  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Task Name</th>
          <th>
            Edit
          </th>
          <th>
            Remove
          </th>
        </tr>
      </thead>
      <tbody>
        {value.map((val, i) => (
          <tr key={i.toString()}>
            <td>{i}</td>
            <td>{val}</td>
            <td>
              <button onClick={()=>todoEdit(i,val)} className="edit"><span class="material-symbols-outlined">edit</span>Edit</button>
            </td>
            <td>
              <button onClick={()=>todoDeleteAlert(i)} className="del"><span class="material-symbols-outlined">delete</span>Del</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
