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
          <a href="${data.flags.png}"><img style="width: 100%; height: 200px; margin-bottom: 20px;" src="${data.flags.png}" alt=""></a>          
          <h3 style="margin-bottom: 30px; class="card-text"> ${data.name.common} </h3>
          <h5 style="margin-bottom: 15px; class="card-text"> sepellin: ${data.capital} </h5>
          <h5 style="margin-bottom: 15px; class="card-text"> Area: ${data.area} </h5>
          <h5 style="margin-bottom: 15px; class="card-text"> Region: ${data.region} </h5>
          <h5 style="margin-bottom: 15px; class="card-text"> Population: ${data.population} </h5>
          <p class="card-text nonee"> Cars: ${data.car.signs} </p>
          <p class="card-text nonee"> Population: ${data.translations.ara.official} </p>
          <p class="card-text nonee"> Status: ${data.status} </p>
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
  let res = await fetch(`https://restcountries.com/v3.1/all`);
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
