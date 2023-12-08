//$ JS for Create DOC...
const allInputs = document.querySelectorAll(".form-control");
const levelsCheckBox = document.getElementsByName("levels");
const createPlaylistBtn = document.querySelector(".Add-btn");

const createPlaylist = (e) => {
  e.preventDefault();
  let formData = {};
  allInputs.forEach((inp) => {
    formData = {
      ...formData,
      [inp.name]: inp.value,
    };
  });
  // Fetching Value from radio Button..
  levelsCheckBox.forEach((elem) => {
    if (elem.checked) formData.level = elem.value;
  });
  if (
    formData.author == "" ||
    formData.title == "" ||
    formData.courseType == "" ||
    formData.videos == "" ||
    formData.link == "" ||
    formData.rating == "" ||
    formData.level == ""
  )
    alert("Fill The Form CompleteLy");
  else {
    fetch(`http://localhost:8000/create-playlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        document.getElementById("create-form").reset();
      })
      .catch((err) => {
        alert(err.message);
      });
  }
};

// Adding Event Listeners-->
createPlaylistBtn.addEventListener("click", createPlaylist);
