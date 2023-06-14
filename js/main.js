let usersRow = document.querySelector(".users-row");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

function getCardUsers(data) {
  return `
    <div class="col-4 mb-2 nematullo">
      <div class="card">
        <div class="card-body">
          <h2 class="card-name">${data.name}</h2>
          <h3 class="card-text">
          ${data.username}
          </h3>
          <span class="card-email">${data.email}</span> <br>
          <div class="card-address mt-2">
          <li>${data.address.street}</li>
          <li>${data.address.suite}</li>
          <li>${data.address.city}</li>
          <li>${data.address.zipcode}</li>
          </div>
          <div class="card-location mt-2">
          <span>${data.address.geo.lat}</span>
          <span>${data.address.geo.lng}</span>
          </div>
          <div class="card-common">
            <span class="card-phone">${data.phone}</span>
            <a class="card-link">${data.website}</a>
          </div>
          <div class="card-company mt-2">
            <h4>${data.company.name}</h4>
            <p>${data.company.catchPhrase}</p>
            <span>${data.company.bs}</span>
          </div>
          <div class="card-links">
            <a href="todo.html" onclick="saveId(${data.id})" class="btn btn-info">Go todo</a>
            <a href="posts.html" onclick="saveId(${data.id})" class="btn btn-info">Go posts</a>
            <a href="album.html" onclick="saveId(${data.id})" class="btn btn-info">Go albom</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function saveId(id) {
  localStorage.setItem("users", id);
}

async function getData() {
  // usersRow.innerHTML = "...loading";
  let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let data = await res.json();
  usersRow.innerHTML = "";
  data.forEach((users) => {
    usersRow.innerHTML += getCardUsers(users);
  });
}

getData();

// function getPagination() {
//   let pagination_numbers = "";
//   Array(10)
//     .fill(1)
//     .forEach((item, index) => {
//       pagination_numbers += `<li class="page-item ${
//         page == index + 1 ? "active" : ""
//       }" onclick="getPage(${index + 1})">
//         <span class="page-link">
//           ${index + 1}
//         </span>
//       </li>`;
//     });

//   pagination.innerHTML = `
//     <li onclick="getPage('-')" class="page-item ${
//       page == 1 ? "disabled" : ""
//     }"><button class="page-link" href="#">Previous</button></li>
//     ${pagination_numbers}
//     <li onclick="getPage('+')" class="page-item ${
//       page == 10 ? "disabled" : ""
//     }"><button class="page-link" href="#">Next</button></li>
//   `;
// }

// getPagination();

// function getPage(p) {
//   if (p == "+") {
//     page++;
//   } else if (p == "-") {
//     page--;
//   } else {
//     page = p;
//   }
//   if (page <= 10) {
//     getData();
//     getPagination();
//   }
// }
