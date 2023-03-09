// window.localStorage.clear();
// window.localStorage.setItem("selectedNum", "34");
let selectedNum = 0;

if (localStorage.selectedOption) {
  document
    .getElementById(`${localStorage.selectedOption}`)
    .setAttribute("selected", "selected");
}

if (localStorage.selectedNum) {
  selectedNum = parseInt(localStorage.selectedNum);
} else {
  selectedNum = 0;
}

for (let i = 1; i <= 48; i++) {
  if (localStorage.getItem(`seat${i}`)) {
    if (localStorage.getItem(`seat${i}`) == 1) {
      document.getElementById(`seat${i}`).classList.remove("NA");

      document.getElementById(`seat${i}`).classList.add("selected");
      // console.log(document.getElementById(`seat${i}`).classList.add("selected"));
    }
  }
}

// let i = 1;
// localStorage.setItem(`seat${i}`, 5478);
// console.log(localStorage.getItem("seat1") == 5478);

// let fff = "FALSE";
// localStorage.selectedNum = 1;
// // localStorage.clear();
// if (localStorage.selectedNum) {
//   fff = "TRUE";
// }
// console.log(localStorage.selectedNum);

// console.log(fff);

// console.log(window.localStorage.getItem("selectedNum"));
// console.log(window.localStorage.getItem("selectedOption"));

const movies = document.getElementById("movies");
// const movies = document.getElementsByTagName("select")[0];
// console.log(movies.options[0].dataset.price);
// console.log(movies[movies.selectedIndex].dataset.price);

movies.addEventListener("change", function () {
  localStorage.selectedOption = movies[movies.selectedIndex].id;
  updateMessage();
  //   console.log(movies[movies.selectedIndex].dataset.price);
});

const selectedNumInMessage = document.getElementById("selectedNum");
const totalPrice = document.getElementById("totalPrice");

const updateMessage = () => {
  selectedNumInMessage.innerText = `${selectedNum}`;
  totalPrice.innerText = `${
    selectedNum * movies[movies.selectedIndex].dataset.price
  }`;
  //   console.log(selectedNum * movies[movies.selectedIndex].dataset.price);
};
updateMessage();

const select = (e) => {
  //   console.log(Array.from(e.srcElement.classList).includes("occupied"));

  if (!Array.from(e.srcElement.classList).includes("occupied")) {
    if (Array.from(e.srcElement.classList).includes("NA")) {
      e.srcElement.classList.remove("NA");
      e.srcElement.classList.add("selected");
      // console.log(localStorage.seat1);
      localStorage.setItem(e.srcElement.id, 1);
      // console.log(localStorage.seat1);

      selectedNum += 1;
      localStorage.selectedNum = selectedNum;
    } else {
      e.srcElement.classList.remove("selected");
      e.srcElement.classList.add("NA");
      // console.log(localStorage.seat1);

      localStorage.setItem(e.srcElement.id, 0);
      // console.log(localStorage.seat1);

      selectedNum -= 1;
      localStorage.selectedNum = selectedNum;
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
