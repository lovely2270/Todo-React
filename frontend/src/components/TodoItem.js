import React from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import "./TodoItem.css";
import DatePick from "./DatePick";

//할일 하나
const TodoItem = ({ todo, onToggle, onRemove, onEdit, onSettingDate }) => {
  //현재 todo에 저장되었는 text
  const showText = todo.text;

  return (
    <div key={todo.id} className="listItem">
      <div>
        <DatePick todo={todo} onSettingDate={onSettingDate} />
      </div>

      {/* css를 위해 경우 나누기 */}
      {todo.checked ? (
        // todo가 완료되었으면
        <div className="todoItemChecked">{showText}</div>
      ) : (
        // todo가 아직 완료되지 않았으면
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
