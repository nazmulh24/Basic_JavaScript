// alert();

// document.getElementsByTagName("h1");

// console.log(document.getElementsByTagName("h1"));

// const target = document.getElementsByClassName("title");
// // console.log(target);
// console.log(target[0]);

const target = document.getElementById("title");
// console.log(target);

target.style.color = "red";
target.style.backgroundColor = "yellow";

const all_box = document.getElementsByClassName("box");
// console.log(all_box);

for (let i = 0; i < all_box.length; i++) {
  const element = all_box[i];
  //   console.log(element);
  element.style.backgroundColor = "green";
  element.style.color = "white";

  if (element.innerText == "Box_3") {
    element.style.backgroundColor = "skyblue";
  }
}

//
//-------> Adding Event Listener
//
// const handleSearch = (event) => {
//   console.log("Hello Nazmul...");
// };

document.getElementById("btn1").addEventListener("click", (event) => {
  //   console.log("Hello Nazmul...");

  const inputValue = document.getElementById("searchBox").value;
  //   console.log(inputValue);

  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.innerText = inputValue;
  //   console.log(p);
  p.classList.add("child"); //--> All p tag er nam child...

  container.appendChild(p);

  document.getElementById("searchBox").value = "";

  const all_comments = document.getElementsByClassName("child");
  for (const element of all_comments) {
    element.addEventListener("click", (e) => {
      //   console.log(e.target.parentNode);
      e.target.parentNode.removeChild(element);
    });
  }

  //
});
