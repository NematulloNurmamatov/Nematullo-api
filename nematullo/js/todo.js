let todoRow = document.querySelector(".todo-row");

function getCardTodo({ title, completed }) {
  return `
    <div class="mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text" >
          ${completed ? `<img src="./images/check.svg" alt="">` : `<img src="./images/close.svg" alt="">`
    }
          </p>
        </div>
      </div>
    </div>
  `;
}

async function getData() {
  let postId = localStorage.getItem("todo");
  todoRow.innerHTML = "...loading";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postId}/todos`
  );
  let data = await res.json();
  console.log(data);
  todoRow.innerHTML = "";
  data.forEach((todo) => {
    todoRow.innerHTML += getCardTodo(todo);
  });
}

getData();
