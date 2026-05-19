import React, { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(content) {
    // TODO:
    // 새 todo 객체를 만들고 setTodos를 사용해 목록 앞쪽에 추가해보세요.
    const newTodo = {
      id: Date.now(),
      content,
      isDone: false,
    };

    setTodos([newTodo, ...todos]);
  }

  function toggleTodo(id) {
    // TODO:
    // map을 사용해서 id가 같은 todo의 isDone 값을 반대로 바꿔보세요.
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function deleteTodo(id) {
    // TODO:
    // filter를 사용해서 id가 같은 todo를 목록에서 제거해보세요.
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="page">
      <section className="card">
        <h1>React TODO Starter</h1>

        <section>
          <h2>10주차 과제 답변</h2>

          <h3>1. 각 컴포넌트 역할</h3>

          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>컴포넌트</th>
                <th>역할</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>App</td>
                <td>
                  전체 TODO state와 추가, 완료, 삭제 함수를 관리한다.
                </td>
              </tr>

              <tr>
                <td>TodoForm</td>
                <td>할 일을 입력받고 추가 버튼을 처리한다.</td>
              </tr>

              <tr>
                <td>TodoList</td>
                <td>TODO 배열을 목록으로 출력한다.</td>
              </tr>

              <tr>
                <td>TodoItem</td>
                <td>체크박스와 삭제 버튼을 처리한다.</td>
              </tr>
            </tbody>
          </table>

          <h3>2. TODO 앱에 왜 컴포넌트 분리가 필요한가</h3>

          <p>
            입력, 목록, 개별 항목의 역할을 나누면 코드가 보기 쉬워지고
            수정과 관리가 편해진다.
          </p>

          <h3>3. 가장 상위에서 관리해야 할 값</h3>

          <p>가장 상위에서 관리해야 할 값은 todos 배열이다.</p>

          <h3>4. todos를 왜 상위 컴포넌트가 들고 있어야 하는가</h3>

          <p>
            todos는 추가, 완료, 삭제 기능에서 모두 사용되는 전체 데이터이기
            때문에 App 컴포넌트에서 관리해야 한다.
          </p>

          <h3>5. 추가, 완료, 삭제 함수 정리</h3>

          <ul>
            <li>추가: addTodo()</li>
            <li>완료 변경: toggleTodo()</li>
            <li>삭제: deleteTodo()</li>
          </ul>

          <h3>6. starter의 TODO 주석에서 완성해야 하는 로직</h3>

          <p>
            addTodo에서는 새 TODO 객체를 만들고 배열 앞에 추가한다.
            toggleTodo에서는 map을 사용해 선택한 항목의 isDone 값을 반대로
            바꾼다. deleteTodo에서는 filter를 사용해 선택한 항목을 제거한다.
          </p>
        </section>

        <hr />

        <TodoForm onAdd={addTodo} />

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