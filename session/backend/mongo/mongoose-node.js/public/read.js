//$ JS for Read Docs..

let html;
let formData;
let operator;
let showAlert;
let elem;
const allCheckBoxes = document.querySelectorAll(".read-cb");
const searchPlaylistBtn = document.querySelector("#search-btn");

//- CheckBox Event making fields enabled on click..
allCheckBoxes.forEach((cb) => {
  cb.addEventListener("click", (e) => {
    if (cb.checked) {
      document.querySelector(`#${e.target.id} ~ input`).disabled = false;
      if (e.target.id == "search-by-videos-count")
        document.querySelector(`#${e.target.id} ~ select`).disabled = false;
      if (e.target.id == "search-by-rating")
        document.querySelector(`#${e.target.id} ~ select`).disabled = false;
    } else {
      document.querySelector(`#${e.target.id} ~ input`).disabled = true;
      if (e.target.id == "search-by-videos-count")
        document.querySelector(`#${e.target.id} ~ select`).disabled = true;
      if (e.target.id == "search-by-rating")
        document.querySelector(`#${e.target.id} ~ select`).disabled = true;
    }
  });
});

const searchPlaylist = (e) => {
  e.preventDefault();
  html = ``;
  formData = {};
  operator = [];
  showAlert = true;
  allCheckBoxes.forEach((cb) => {
    if (cb.checked) {
      elem = document.querySelector(`#${cb.id} ~ input`);
      if (elem.value == "") {
        showAlert = true;
      } else {
        showAlert = false;
        formData = {
          ...formData,
          [elem.name]: elem.value,
        };

        if (cb.id == "search-by-videos-count") {
          operator[0] = document.querySelector(`#number-query`).value;
        }
        if (cb.id == "search-by-rating") {
          operator[1] = document.querySelector(`#rating-query`).value;
        }
      }
    }
  });
  if (showAlert) {
    alert("Please Fill Up Selected Field");
    showAlert = false;
  } else {
    fetch(`http://localhost:8000/search-playlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        formData,
        operator,
      }),
    })
      .then((response) => response.json())
      .then(({ playlist, err }) => {
        if (err) {
          document.querySelector(".result-text").innerText = `${err.msg}`;
        }
        if (playlist.length == 0) {
          document.querySelector(".result-text").innerText =
            "Oops! No Data Found Please Check your search query -_-";
          document.querySelector(".all-playlists").innerHTML = "";
        } else {
          document.querySelector(
            ".result-text"
          ).innerText = `${playlist.length} results found..`;
          playlist.forEach((dt) => {
            html += `<div class="d-flex align-items-center justify-content-between">
            <div class="for-update-options" id="${dt._id}"></div>
            <div class="card mt-2 mb-2">
                <h5 class="card-header">${dt.author}</h5>
                <div class="card-body">
                  <h5 class="card-title">${dt.title}</h5>
                  <ul class="card-text">
                    <li>Course Type: ${dt.courseType}</li>
                    <li>Videos: ${dt.videos}</li>
                    <li>Level: ${dt.level}</li>
                    <li>Rating: ${dt.rating}/5</li>
                  </ul>
                  <a href="${dt.link}" target="_blank" class="btn btn-dark">Go to Playlist</a>
                </div>
            </div>
            </div>`;
          });
          document.querySelector(".all-playlists").innerHTML = html;
        }

        document.getElementById("search-form").reset();
        document.querySelectorAll(".read-inp").forEach((elm) => {
          elm.disabled = true;
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }
};

searchPlaylistBtn.addEventListener("click", searchPlaylist);
