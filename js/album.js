let albumRow = document.querySelector(".albums-row");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

let page = 1;
let limit = 10;

function getCardAlbum({ title, id }) {
  return `
    <div class="col-6 mb-3">
      <div class="card">
        <div class="card-body">
        <img style="width: 100%;" src="https://content.presentermedia.com/files/clipart/00022000/22653/guy_in_tie_pointing_down_800_wht.jpg" alt="">

          <h5 class="card-title">${title}</h5>
          <a href="photo.html" onclick="saveId(${id})" class="btn btn-primary">Go photo</a>
        </div>
      </div>
    </div>
  `;
}

function saveId(id) {
  localStorage.setItem("album", id);
}

async function getData() {
  let postId = localStorage.getItem("users");
  albumRow.innerHTML = "...loading";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postId}/albums`
  );
  let data = await res.json();
  albumRow.innerHTML = "";
  data.forEach((album) => {
    albumRow.innerHTML += getCardAlbum(album);
  });
}

getData();
