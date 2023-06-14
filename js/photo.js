let photoRow = document.querySelector(".photo-row");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

let page = 1;
let limit = 10;

function getCardPhoto({ title, url, thumbnailUrl }) {
  return `
    <div class="col-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="img11">
            <img class="img13 mb-3" src="${thumbnailUrl}" alt="">
            <img class="img12 mb-2" src="${url}" alt="">
            <h5 class="card-title">${title}</h5>
          </div>
        </div>
      </div>
    </div>
  `;
}

function saveId(id) {
  localStorage.setItem("photo", id);
}

async function getData() {
  let postId = localStorage.getItem("album");
  photoRow.innerHTML = "...loading";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${postId}/photos`
  );
  let data = await res.json();
  photoRow.innerHTML = "";
  data.forEach((photo) => {
    photoRow.innerHTML += getCardPhoto(photo);
  });
}

getData();
