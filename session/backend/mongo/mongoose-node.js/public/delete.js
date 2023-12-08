//# DeleteOne - DeleteMany - DeleteAll
const deleteCheckboxes = document.getElementsByName("delete-options");
let deleteAll = false;
deleteCheckboxes.forEach((cb) => {
  cb.addEventListener("click", (e) => {
    if (cb.checked) {
      if (e.target.id == "delete-one") {
        document.querySelectorAll(".for-update-options").forEach((elm) => {
          elm.innerHTML = `<input
              class="form-check-input"
              type="radio"
              name="playlist-select"
            />`;
        });
      }
      if (e.target.id == "delete-many") {
        document.querySelectorAll(".for-update-options").forEach((elm) => {
          elm.innerHTML = `<input
              class="form-check-input playlist-select-cb"
              type="checkbox"
            />`;
        });
      }
      if (e.target.id == "delete-all") {
        deleteAll = true;
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

//# Delete Btn Action Listener
const deletePlaylistBtn = document.getElementById("delete-btn");

const deletePlaylist = (e) => {
  let deleteQuery = {
    multipleId: [],
    deleteAll,
  };
  const deleteOneCheckBox = document.getElementsByName("playlist-select");
  const deleteManyCheckBox = document.querySelectorAll(".playlist-select-cb");

  deleteOneCheckBox.forEach((elm) => {
    if (elm.checked) {
      deleteQuery.uniqueId = elm.parentElement.id;
    }
  });

  deleteManyCheckBox.forEach((elm) => {
    if (elm.checked) {
      deleteQuery.multipleId.push(elm.parentElement.id);
    }
  });

  if (deleteQuery.uniqueId || deleteQuery.multipleId.length > 0) {
    fetch(`http://localhost:8000/delete-playlist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(deleteQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`${data.result.deletedCount} document Deleted successfully :)`);
        document.getElementById("search-form").reset();
        deleteCheckboxes.forEach((elm) => {
          elm.checked = false;
        });
        deleteOneCheckBox.forEach((elm) => {
          elm.checked = false;
        });

        deleteManyCheckBox.forEach((elm) => {
          elm.checked = false;
        });
        document.querySelector(".result-text").innerText = "";
        document.querySelector(".all-playlists").innerHTML = "";
      })
      .catch((err) => {
        alert(err.msg);
      });
  } else alert("Please select at lease one playlist to delete");
};

deletePlaylistBtn.addEventListener("click", deletePlaylist);
