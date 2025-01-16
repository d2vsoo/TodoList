import "./App.css";

// component
import Header from "./components/Header";
import TodayDate from "./components/TodayDate";
import Editor from "./components/Editor";
import List from "./components/List";

// hook
import { useState, useRef, useReducer, useCallback } from "react";

function App() {
  // Todo List (배열)
  const DayList = [
    {
      // 예시
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
    {
      // 예시
      id: 1,
      isDone: false,
      content: "Vue.js 공부하기",
      date: new Date().getTime(),
    },
  ];

  // reducer 함수
  function reducer(state, action) {
    switch (action.type) {
      case "CREATE":
        return [action.data, ...state];
      case "UPDATE":
        return state.map((item) =>
          item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
        );
      case "DELETE":
        return state.filter((item) => item.id !== action.targetId);
      default:
        return state;
    }
  }

  // Todos에 DayList 담기
  // setTodos는 Todos 상태변화 함수
  // const [todos, setTodos] = useState(DayList);
  const [todos, dispatch] = useReducer(reducer, DayList);

  // useRef로 id 생성하기
  const isRef = useRef(2);

  // 새로운 List 추가하기
  /*
  const onCreate = ({ content }) => {
     const newList = {
      id: isRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newList, ...todos]); 

    // dispatch
    dispatch({
      type: "CREATE",
      data: {
        id: isRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };
  */

  const onCreate = useCallback(({ content }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: isRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  /* const onUpdate = (targetId) => {
    // todos State의 값 중 targetId와 일치하는 id의 체크박스 변경하기
    
    // todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열을 인수로 넣기
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      }) 
    ); 

    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }; */

  // 코드 단축하기
  /* setTodos(
    todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    )
  ); */

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  /*const onDelete = (targetId) => {
    
    // 인수 : targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
    

    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }; */

  // useCallback
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodayDate />
      {/* onCreate를 Editor에 props로 전달*/}
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
