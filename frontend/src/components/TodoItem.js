import React from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import "./TodoItem.css";
import DatePick from "./DatePick";

//할일 하나
const TodoItem = ({ todo, onToggle, onRemove, onEdit, onSettingDate }) => {
  const showText = todo.text;

  return (
    <div
      key={todo.id}
      className="listItem"
      // onDoubleClick={() => onEdit(todo.id)}
    >
      <div>
        <DatePick todo={todo} onSettingDate={onSettingDate} />
      </div>
      {todo.checked ? (
        <div className="todoItemChecked">{showText}</div>
      ) : (
        <div className="todoItem">{showText}</div>
      )}
      <div className="btnsDiv">
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>
                <IoMdCheckmark
                  size="30"
                  className="checkBtn"
                  onClick={() => onToggle(todo.id)}
                />
              </td>
              <td>
                <BiEditAlt
                  size="30"
                  className="editBtn"
                  onClick={() => onEdit(todo.id)}
                  //onClick={onEditClick}
                />
              </td>
              <td>
                <IoMdClose
                  size="30"
                  className="deleteBtn"
                  onClick={() => onRemove(todo.id)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoItem;
