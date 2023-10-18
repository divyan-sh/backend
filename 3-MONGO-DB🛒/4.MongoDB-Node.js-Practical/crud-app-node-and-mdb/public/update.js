//# UpdateOne - UpdateMany - UpdateAll
const updateCheckboxes = document.getElementsByName("update-options");
let updateAll = false;
updateCheckboxes.forEach((cb) => {
  cb.addEventListener("click", (e) => {
    if (cb.checked) {
      if (e.target.id == "update-one") {
        document.querySelectorAll(".for-update-options").forEach((elm) => {
          elm.innerHTML = `<input
              class="form-check-input"
              type="radio"
              name="playlist-select"
            />`;
        });
      }
      if (e.target.id == "update-many") {
        document.querySelectorAll(".for-update-options").forEach((elm) => {
          elm.innerHTML = `<input
              class="form-check-input playlist-select-cb"
              type="checkbox"
            />`;
        });
      }
      if (e.target.id == "update-all") {
        updateAll = true;
        document.querySelectorAll(".for-update-options").forEach((elm) => {
          elm.innerHTML = `<input
              class="form-check-input playlist-select-cb"
              type="checkbox"
              checked
            />`;
        });
      }
    }
  });
});

//# Extracting the Updated Values from the form..
const updatePlaylistBtn = document.querySelector(".update-btn");
const allInputs = document.querySelectorAll(".updated-inp");
const levelsCheckBox = document.getElementsByName("levels");

const updatePlaylist = (e) => {
  e.preventDefault();
  const updateOneCheckBox = document.getElementsByName("playlist-select");
  const updateManyCheckBox = document.querySelectorAll(".playlist-select-cb");
  let updateQuery = {
    multipleId: [],
    updateAll,
    formData: {},
  };
  updateOneCheckBox.forEach((elm) => {
    if (elm.checked) {
      updateQuery.uniqueId = elm.parentElement.id;
    }
  });

  updateManyCheckBox.forEach((elm) => {
    if (elm.checked) {
      updateQuery.multipleId.push(elm.parentElement.id);
    }
  });

  allInputs.forEach((inp) => {
    if (inp.value !== "") {
      updateQuery.formData = {
        ...updateQuery.formData,
        [inp.name]: inp.value,
      };
    }
  });
  // Fetching Value from radio Button..
  levelsCheckBox.forEach((elem) => {
    if (elem.checked) updateQuery.formData.level = elem.value;
  });

  if (
    updateQuery.formData.author == undefined &&
    updateQuery.formData.title == undefined &&
    updateQuery.formData.courseType == undefined &&
    updateQuery.formData.videos == undefined &&
    updateQuery.formData.link == undefined &&
    updateQuery.formData.rating == undefined &&
    updateQuery.formData.level == undefined
  ) {
    alert("Please Fill Up At Least One Field");
  } else {
    fetch(`http://localhost:8000/update-playlist`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updateQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`${data.result.nModified} document updated successfully :)`);
        document.getElementById("search-form").reset();
        document.getElementById("create-form").reset();
        updateCheckboxes.forEach((elm) => {
          elm.checked = false;
        });
        updateOneCheckBox.forEach((elm) => {
          elm.checked = false;
        });

        updateManyCheckBox.forEach((elm) => {
          elm.checked = false;
        });
        document.querySelector(".result-text").innerText = "";
        document.querySelector(".all-playlists").innerHTML = "";
      })
      .catch((err) => {
        alert(err.msg);
      });
  }
};

updatePlaylistBtn.addEventListener("click", updatePlaylist);
