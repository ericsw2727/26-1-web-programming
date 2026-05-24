import React, { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

// 처음 화면에 보여줄 예시 데이터입니다.
// todo 하나는 id, content, isDone 세 가지 값을 가집니다.
const initialTodos = [
  { id: 1, content: "React 컴포넌트 구조 복습하기", isDone: false },
  { id: 2, content: "props와 state 흐름 설명하기", isDone: true },
  { id: 3, content: "TODO 앱 완성하기", isDone: false },
];

function App() {
  // todos는 여러 컴포넌트가 함께 사용하는 데이터입니다.
  // 그래서 가장 위쪽 컴포넌트인 App에서 state로 관리합니다.
  const [todos, setTodos] = useState(initialTodos);

  // TodoForm에서 입력한 내용을 받아 새 todo를 추가합니다.
  // 자식 컴포넌트가 직접 todos를 바꾸는 대신, 부모 함수인 addTodo를 호출합니다.
  function addTodo(content) {
    // TODO 1:
    // 새 todo 객체를 만들어보세요.
    // 힌트: id는 Date.now(), content는 매개변수, isDone은 false
    const newTodo = {
      id: Date.now(),
      content: content,
      isDone: false,
    };

    // TODO 2:
    // 기존 배열을 직접 수정하지 않고 새 배열을 만들어 state를 갱신해보세요.
    // 힌트: setTodos((currentTodos) => [newTodo, ...currentTodos])
    setTodos((currentTodos) => [newTodo, ...currentTodos]);

    console.log("추가할 todo:", newTodo);
  }

  // 체크박스를 클릭했을 때 완료 상태를 반대로 바꿉니다.
  function toggleTodo(id) {
    // TODO 3:
    // map을 사용해서 id가 같은 todo의 isDone 값을 반대로 바꿔보세요.
    // 힌트:
    // setTodos((currentTodos) =>
    //   currentTodos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

    console.log("완료 상태를 바꿀 todo id:", id);
  }

  // 삭제 버튼을 클릭했을 때 해당 todo를 목록에서 제거합니다.
  function deleteTodo(id) {
    // TODO 4:
    // filter를 사용해서 id가 같은 todo를 목록에서 제거해보세요.
    // 힌트: setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))

    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );

    console.log("삭제할 todo id:", id);
  }

  // 화면 상단에 보여줄 요약 정보입니다.
  // todos state가 바뀌면 이 값들도 다시 계산되고 화면도 갱신됩니다.
  // TODO 5:
  // filter를 사용해서 완료된 할 일 개수를 계산해보세요.
  // 힌트: todos.filter((todo) => todo.isDone).length
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const totalCount = todos.length;

  return (
    <main className="page">
      <section className="todo-app" aria-labelledby="app-title">
        <header className="todo-header">
          <div>
            <p className="eyebrow">React Student Live</p>
            <h1 id="app-title">TODO 앱</h1>
          </div>
          <p className="todo-count">
            완료 {doneCount} / 전체 {totalCount}
          </p>
        </header>

        {/* TodoForm은 입력을 담당합니다. 새 할 일이 생기면 onAdd로 부모에게 알려줍니다. */}
        {/* TODO 6: TodoForm에 onAdd props로 addTodo 함수를 전달해보세요. */}
        <TodoForm onAdd={addTodo} />

        {/* TodoList는 목록 출력을 담당합니다. 데이터와 이벤트 함수를 props로 내려줍니다. */}
        {/* TODO 7: TodoList에 todos, onToggle, onDelete props를 올바르게 전달했는지 확인하세요. */}
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </section>
    </main>
  );
}

export default App;