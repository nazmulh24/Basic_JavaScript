//___API ---> https://openapi.programming-hero.com/api/course/curriculum

document.addEventListener("DOMContentLoaded", () => {
  const api_url = "https://openapi.programming-hero.com/api/course/curriculum";

  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
      const dataa = data.data;

      console.log(dataa);

      const curriculumContainer = document.getElementById(
        "curriculum-container"
      );

      curriculumContainer.previousElementSibling
        .querySelector(".badge")
        .remove();

      dataa.forEach((milstone) => {
        const milstonElement = document.createElement("div");

        milstonElement.className = "milston-element p-4 mb-3";
        milstonElement.id = "milston-element";

        const milstonHeader = document.createElement("div");
        milstonHeader.className = "milston-header";
        milstonHeader.id = "";

        milstonHeader.innerHTML = `
            <input type="checkbox" class="me-2" />
            <h5>${milstone.name}</h5>
            <i class="bi bi-chevron-right ms-auto" id="chevron-${milstone._id}"></i>
        `;

        const moduleContainer = document.createElement("div");
        moduleContainer.className = "module-container d-none ";
        moduleContainer.id = "";

        if (milstone.modules) {
          milstone.modules.forEach((module) => {
            const moduleElement = document.createElement("div");

            moduleElement.className =
              "module-element border-bottom border-secondary py-2";
            moduleElement.id = "";

            moduleElement.textContent = module.name;

            moduleContainer.appendChild(moduleElement);
          });
        }

        milstonHeader.addEventListener("click", () => {
          const allModules =
            curriculumContainer.querySelectorAll(".module-container");
          console.log(allModules);

          allModules.forEach((m) => {
            if (m !== moduleContainer) {
              m.classList.add("d-none");

              const chevronIcon2 = m.previousElementSibling.querySelector("i");

              chevronIcon2.classList.remove("bi-chevron-down");
              chevronIcon2.classList.add("bi-chevron-right");
            }
          });

          moduleContainer.classList.toggle("d-none");
          const chevronIcon = milstonHeader.querySelector("i");

          chevronIcon.classList.toggle("bi-chevron-right");
          chevronIcon.classList.toggle("bi-chevron-down");

          const mainContent = document.querySelector(".main-content");

          mainContent.innerHTML = "";

          const imageElement = document.createElement("img");
          imageElement.src = `${milstone.image}`;
          imageElement.alt = "Image";
          imageElement.className = "milston-image img-fluid rounded-4";

          //   const titleElement = `
          //     <h5">${milstone.name}</h5>`;
          //   mainContent.innerHTML += titleElement;

          const titleElement = document.createElement("h5");
          titleElement.textContent = `${milstone.name}`;
          titleElement.className = "mt-2 ps-2";

          mainContent.appendChild(imageElement);
          mainContent.appendChild(titleElement);
        });

        milstonElement.appendChild(milstonHeader);
        milstonElement.appendChild(moduleContainer);

        curriculumContainer.appendChild(milstonElement);
      }); //--> end of forEach
    }) //--> end of then
    .catch((error) => console.error("Error fetching data -->", error));
});
