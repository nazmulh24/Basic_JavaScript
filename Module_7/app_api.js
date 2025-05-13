// alert();

//   fetch("https://jsonplaceholder.typicode.com/users");
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const userList = document.getElementById("user-list");
//     data.forEach((user) => {
//       const li = document.createElement("li");
//       li.textContent = `${user.name} (${user.email})`;
//       userList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
// // const userList = document.getElementById("user-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    display_data(data);
  })
  .catch((err) => {
    console.log(err);
  });

const display_data = (userData) => {
  const container = document.getElementById("userData-Container");

  userData.forEach((user) => {
    // console.log(user);

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    userDiv.innerHTML = `
        <h2>name</h2>
        <h4>title</h4>
        <p>Description</p>
        <button>Details</button>
      `;

    container.appendChild(userDiv);
    // console.log(userDiv);
  });
};
