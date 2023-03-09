const movies = document.getElementById("movies");
// const movies = document.getElementsByTagName("select")[0];
// console.log(movies.options[0].dataset.price);
// console.log(movies.selectedIndex.dataset.price);
movies.addEventListener("change", function () {
  updateMessage();
  //   console.log(movies[movies.selectedIndex].dataset.price);
});

let selectedNum = 0;

const selectedNumInMessage = document.getElementById("selectedNum");
const totalPrice = document.getElementById("totalPrice");
const updateMessage = () => {
  selectedNumInMessage.innerText = `${selectedNum}`;
  totalPrice.innerText = `${
    selectedNum * movies[movies.selectedIndex].dataset.price
  }`;
  //   console.log(selectedNum * movies[movies.selectedIndex].dataset.price);
};

const select = (e) => {
  //   console.log(Array.from(e.srcElement.classList).includes("occupied"));

  if (!Array.from(e.srcElement.classList).includes("occupied")) {
    if (Array.from(e.srcElement.classList).includes("NA")) {
      e.srcElement.classList.remove("NA");
      e.srcElement.classList.add("selected");
      selectedNum += 1;
    } else {
      e.srcElement.classList.remove("selected");
      e.srcElement.classList.add("NA");
      selectedNum -= 1;
    }
  }

  updateMessage();
  //   console.log(selectedNum);
};

for (let i = 1; i <= 48; i++) {
  document.getElementById(`seat${i}`).addEventListener("click", select);
}

// console.log(
//   Array.from(document.getElementsByClassName("seat")[41].classList).includes(
//     "occupied"
//   ),
//   Array.from(document.getElementsByClassName("seat"))
// );
