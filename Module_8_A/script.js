const API_SEARCH = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const API_LOOKUP = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cartList = document.getElementById("cartList");
const counter = document.getElementById("counter");

const cart = {};

function updateCartUI() {
  cartList.innerHTML = "";

  const total = Object.keys(cart).length;
  counter.textContent = total;

  let index = 1;
  for (const drinkName in cart) {
    const drinkImg = cart[drinkName].img;

    const row = document.createElement("div");
    row.className = "row align-items-center mb-2 border-bottom pb-1 px-1";

    row.innerHTML = `
        <div class="col-2 ps-4">${index++}</div>
        <div class="col-4 ps-3">
          <img src="${drinkImg}" alt="img" class="rounded-circle border" style="width:30px; height:30px; object-fit:cover;">
        </div>
        <div class="col-5 text-truncate">${drinkName}</div>
      `;

    cartList.appendChild(row);
  }
}

function createDrinkCard(drink) {
  const col = document.createElement("div");
  col.className = "col";

  const card = document.createElement("div");
  card.className = "card h-100 custom-shadow";

  const shortInstructions = drink.strInstructions
    ? drink.strInstructions.substring(0, 25) +
      (drink.strInstructions.length > 15 ? "..." : "")
    : "No instructions";

  card.innerHTML = `
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title fw-bold fs-5">${drink.strDrink}</h5>
      <p class="fw-semibold mb-1">Category: ${drink.strCategory}</p>
      <p class="mb-3">${shortInstructions}</p>
      <div class="d-flex gap-2 mt-auto">
        <button class="btn btn-success btn-sm flex-grow-1 add-to-group-btn">Add to Group</button>
        <button class="btn btn-info btn-sm flex-grow-1 details-btn" data-id="${drink.idDrink}">Details</button>
      </div>
    </div>
  `;

  col.appendChild(card);
  cardContainer.appendChild(col);

  const addBtn = card.querySelector(".add-to-group-btn");
  if (cart[drink.strDrink]) {
    addBtn.textContent = "Already Added";
    addBtn.classList.remove("btn-success");
    addBtn.classList.add("btn-danger");
    addBtn.disabled = true;
  }

  addBtn.addEventListener("click", () => {
    const currentCount = Object.keys(cart).length;
    if (currentCount >= 7) {
      alert("You have reached the maximum limit of 7 drinks in the cart !!");
      return;
    }

    if (!cart[drink.strDrink]) {
      cart[drink.strDrink] = {
        count: 1,
        img: drink.strDrinkThumb,
      };
      updateCartUI();

      addBtn.textContent = "Already Added";
      addBtn.classList.remove("btn-success");
      addBtn.classList.add("btn-danger");
      addBtn.disabled = true;
    }
  });

  const detailsBtn = card.querySelector(".details-btn");
  detailsBtn.addEventListener("click", async (e) => {
    const drinkId = e.target.getAttribute("data-id");
    const modalBody = document.getElementById("modalBody");

    try {
      const res = await fetch(API_LOOKUP + drinkId);
      const data = await res.json();
      const d = data.drinks[0];

      modalBody.innerHTML = `
        <div class="row">
          <div class="col-md-5">
            <img src="${d.strDrinkThumb}" alt="${
        d.strDrink
      }" class="img-fluid rounded">
          </div>
          <div class="col-md-7">
            <h4 class="fw-bold">${d.strDrink}</h4>
            <p><strong>Category:</strong> ${d.strCategory}</p>
            <p><strong>Type:</strong> ${d.strAlcoholic}</p>
            <p><strong>Glass:</strong> ${d.strGlass}</p>
            <p><strong>Instructions:</strong> ${d.strInstructions}</p>
            <p><strong>Ingredients:</strong> ${[
              d.strIngredient1,
              d.strIngredient2,
              d.strIngredient3,
            ]
              .filter(Boolean)
              .join(", ")}</p>
          </div>
        </div>
      `;

      const modal = new bootstrap.Modal(document.getElementById("drinkModal"));
      modal.show();
    } catch (error) {
      modalBody.innerHTML = `<p class="text-danger">Failed to load drink details.</p>`;
    }
  });
}

async function loadDrinks(query) {
  try {
    const response = await fetch(API_SEARCH + query);
    const data = await response.json();

    cardContainer.innerHTML = "";

    if (data.drinks) {
      data.drinks.forEach(createDrinkCard);
    } else {
      cardContainer.innerHTML = `
        <div class="col-12 text-center">
          <p class="fw-semibold fs-5" style="color: gray;">No drinks found.</p>
        </div>
      `;
    }
  } catch (error) {
    cardContainer.innerHTML = `
      <div class="col-12 text-center">
        <p class="text-danger">Failed to fetch drinks.</p>
      </div>
    `;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadDrinks("a");
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) loadDrinks(query);
  }
});

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) loadDrinks(query);
});
