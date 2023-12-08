const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const counterElem = document.querySelector("#h2");

incrementBtn.addEventListener("click", () => {
  setInterval(() => {
    let val = parseInt(counterElem.innerText);
    val === 20 ? val-- : val++;
    counterElem.innerText = val;
  }, 1000);
});
decrementBtn.addEventListener("click", () => {
  let val = parseInt(counterElem.innerText);
  val--;
  counterElem.innerText = val;
});
