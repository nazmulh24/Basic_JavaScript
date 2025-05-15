async function searchMeals() {
  const query = document.getElementById("searchInput").value;
  if (!query) return;

  const api_by_name = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const res = await fetch(api_by_name);
  const data = await res.json();
  const meals = data.meals;

  console.log(meals);

  const mealList = document.getElementById("mealContainer");
  mealList.innerHTML = "";

  if (!meals) {
    mealList.innerHTML = '<p class="no-results">Sorry, No meals found !!!</p>';
    return;
  }

  meals.forEach((meal) => {
    const mealCard = document.createElement("div");

    mealCard.className = "meal-card";
    mealCard.id = meal.idMeal;

    mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="This is -> ${meal.strMeal}" />
        <h4>${meal.strMeal} . ${meal.strArea}</h4>
      `;

    mealCard.addEventListener("click", () => showMealDetails(meal.idMeal));
    mealList.appendChild(mealCard);
  });
}

document.getElementById("searchInput").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    searchMeals();
  }
});

async function showMealDetails(id) {
  const mealDetails = document.getElementById("mealDetails");

  const api_by_id = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  const res = await fetch(api_by_id);
  const data = await res.json();
  const meal = data.meals[0];

  console.log(meal);

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim() !== "") {
      ingredients.push(`${measure} ${ing}`);
    }
  }

  mealDetails.innerHTML = `
      <div class="mx-auto mb-4 p-3 shadow-sm bg-white rounded">
        <img src="${
          meal.strMealThumb
        }" class="img-fluid rounded mb-3" alt="This is -> ${meal.strMeal}">
        <h2 class="text-center">${meal.strMeal}</h2>
        <p><strong>Category :</strong> ${meal.strCategory}</p>
        <p><strong>Area :</strong> ${meal.strArea}</p>
        <h5>Ingredients :</h5>
        <ul class="list-group list-group-flush mb-3 custom-bullets">
          ${ingredients
            .map((ing) => `<li class="list-group-item">${ing}</li>`)
            .join("")}
        </ul>
        <div class="text-center">
          <a href="${
            meal.strYoutube
          }" target="_blank" class="btn btn-danger">Watch on YouTube</a>
        </div>
      </div>
    `;

  mealDetails.scrollIntoView({ behavior: "smooth", block: "start" });
}
