const loadButton = document.querySelector("#load-button");
const postList = document.querySelector("#post-list");

async function loadPosts() {
  postList.innerHTML = "<p>데이터를 불러오는 중입니다...</p>";

  // TODO:
  // fetch를 사용해서 아래 주소로 요청을 보내보세요.
  // https://koreandummyjson.vercel.app/posts

  const response = await fetch("https://koreandummyjson.vercel.app/api/posts");
  
  // TODO:
  // response.json()을 사용해서 JSON 데이터를 꺼내보세요.

  const data = await response.json();

  // TODO:
  // data.posts 배열에서 5개만 골라서 화면에 출력해보세요.
  // 힌트: map, join을 활용하면 카드 문자열을 만들 수 있습니다.

  const postCards = data.posts
    .slice(0, 7)
    .map(function (post) {
      return `
        <article class="post-card">
          <h2>${post.title}</h2>
          <!-- <p>${post.content}</p> -->
        </article>
      `;
    })
    .join("");

  postList.innerHTML = postCards;
}

loadButton.addEventListener("click", loadPosts);
