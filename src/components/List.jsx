import TodoItem from "./TodoItem";
import "./List.css";

// useState
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    // todos 배열에 filter 메서드 호출하여 결과값 반환
    // 모든 todo item을 순회하면서 연산 결과값이 참이 되는 값만 필터링
    // includes() : 인수로 전달한 값이 문자열에 들어있는지 찾아서 있으면 true, 없으면 false 반환
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  // component가 리렌더링될 때마다 호출
  // 결과를 filteredTodos 변수에 저장
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h5> 신지수 님의 Todo List </h5>
      {/* 검색어를 State로 보관해야 list가 리렌더링됨 */}
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="search"
        onChange={onChangeSearch}
      />

      <div className="TodoItemWrap">
        {/* todos 배열에 담긴 데이터를 list형태로 렌더링 */}
        {/* map() 메서드 활용하기 */}
        {/* 배열의 모든 요소에 대해서 콜백함수 수행 */}
        {/* 콜백함수의 반환값을 모아서 새로운 배열로 반환 */}
        {filteredTodos.map((todo) => {
          // 모든 component에 반드시 고유한 key를 전달해야 함
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
