import "./Editor.css";

// useState
import { useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  //console.log(content);

  const onChangeContent = (e) => {
    setContent(e.target.value);
    // console.log(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      alert("새로운 Todo를 입력하세요");
      return;
    } else {
      // content 값을 새로운 Todo 항목으로 onCreate 함수에 전달하여 List에 추가
      onCreate({ content });
      // 빈 문자열로 초기화
      setContent("");
    }
  };

  // 엔터 눌렀을 때 버튼 실행
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        value={content}
        type="text"
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}> 추가 </button>
    </div>
  );
};

export default Editor;
