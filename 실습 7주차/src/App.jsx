import React, { useState } from "react";

function FoodCard(props) {
  return (
    <div>
      <h2>{props.food}</h2>
      <p>가격: {props.price}</p>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState(
    "React 실습을 시작해보세요."
  );

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1>React Playground</h1>

        <p>{message}</p>

        <button
          style={styles.button}
          onClick={() => {
            setMessage("React 성공");
          }}
        >
          문장 바꾸기
        </button>
      </section>

      <section style={styles.card}>
        <h1>1. React가 필요한 이유</h1>

        <p>
          웹페이지가 복잡해질수록 HTML, CSS, JavaScript만으로 관리하기 어렵다.
        </p>

        <p>
          React는 컴포넌트와 state를 사용하여 화면을 효율적으로 관리할 수 있게 도와준다.
        </p>
      </section>

      <section style={styles.card}>
        <h1>2. 컴포넌트의 장점</h1>

        <p>
          반복되는 UI를 컴포넌트로 만들면 재사용이 가능하고 유지보수가 쉬워진다.
        </p>
      </section>

      <section style={styles.card}>
        <h1>3. counter 예제 작동 방식</h1>

        <p>
          버튼 클릭 → state 변경 → React 재렌더링 → 화면 업데이트
        </p>
      </section>

      <section style={styles.card}>
        <h1>4. props 예시 추가</h1>

        <FoodCard
          food="피자"
          price="20000원"
        />

        <FoodCard
          food="햄버거"
          price="8000원"
        />
      </section>

      <section style={styles.card}>
        <h1>5. state는 왜 필요한지 설명</h1>

        <p>
          counter 예제에서는 숫자가 계속 바뀌어야 하기 때문에 state가 필요하다.
        </p>

        <p>
          setCount()가 실행되면 숫자 값이 변경되고, React가 화면을 다시 렌더링하여 새로운 숫자를 보여준다.
        </p>
      </section>

      <section style={styles.card}>
        <h1>
          6. 바깥에서 받는 값과 내부에서 바뀌는 값 구분
        </h1>

        <p>
          props는 부모 컴포넌트가 전달하는 값이다.
        </p>

        <p>
          state는 컴포넌트 내부에서 변경되는 값이다.
        </p>

        <p>
          예를 들어 FoodCard의 food와 price는 props이고, counter의 count 값은 state이다.
        </p>
      </section>

      <section style={styles.card}>
        <h1>
          7. 배열 데이터를 목록으로 출력하는 구조 설명
        </h1>

        <p>
          React에서는 배열 데이터를 map() 함수로 반복하면서 화면에 출력한다.
        </p>

        <p>
          배열의 데이터를 하나씩 꺼내서 li 같은 태그를 반복 생성하여 목록 형태로 보여준다.
        </p>
      </section>

      <section style={styles.card}>
        <h1>
          8. key가 없으면 왜 불편한가
        </h1>

        <p>
          React는 화면이 바뀔 때 어떤 항목이 변경되었는지 비교하면서 업데이트한다.
        </p>

        <p>
          key가 없으면 어떤 항목이 수정되었는지 구분하기 어려워서 비효율적으로 렌더링될 수 있다.
        </p>
      </section>

      <section style={styles.card}>
        <h1>
          9. TODO 앱에서 이벤트와 목록 렌더링 사용
        </h1>

        <p>
          버튼 이벤트는 할 일을 추가하거나 삭제할 때 사용된다.
        </p>

        <p>
          목록 렌더링은 저장된 TODO 데이터를 화면에 반복 출력할 때 사용된다.
        </p>

        <p>
          사용자가 버튼을 누르면 state가 변경되고, React가 목록을 다시 렌더링하여 화면을 업데이트한다.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    backgroundColor: "#ecfeff",
    fontFamily: "Arial, sans-serif",

    padding: "30px",
  },

  card: {
    width: "700px",
    minHeight: "180px",
    padding: "32px",
    marginBottom: "24px",

    borderRadius: "20px",
    backgroundColor: "#ffffff",
    textAlign: "left",

    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
  },

  button: {
    border: "none",
    borderRadius: "12px",
    padding: "12px 18px",
    backgroundColor: "#0f766e",
    color: "#ffffff",
    cursor: "pointer",
  },
};

export default App;