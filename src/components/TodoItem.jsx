import "./TodoItem.css";

import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        // input이기 때문에 Change 이벤트 핸들러 사용
        onChange={onChangeCheckbox}
      />
      <div className="content"> {content} </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}> 삭제 </button>
    </div>
  );
};

export default memo(TodoItem);
