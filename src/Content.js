import React from "react";
import { BiSolidTrash } from "react-icons/bi";

const Content = ({ tasks, handleTick, handleDelete }) => {
  return (
    <main>
      {tasks.length ? (
        <ul>
          {tasks.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleTick(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleTick(item.id)}
              >
                {item.task}
              </label>
              <BiSolidTrash
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red", background: "black" }}>Your Task is Empty</p>
      )}
    </main>
  );
};

export default Content;
