// alert();

// const load_all_products = () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       //   display_product(data);
//     })
//     .catch((error) => {
//       console.log("Error -->", error);
//     });
// };

const load_all_products = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    console.log(data);
    display_product(data);

    // --> try block end.....
  } catch (error) {
    console.log("Error -->", error);
  }
};

const display_product = (products) => {
  const product_Container = document.getElementById("product-container");

  product_Container.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">${product.title.slice(1, 50)}</h5>
                <p class="card-text">${product.description.slice(1, 100)}</p>
                <h5 class="card-title">Price: $${product.price}</h5>
                <button onclick="loadSingleProduct(${
                  product.id
                })" class="btn btn-primary">Details</button>
                <button class="btn btn-primary">Add to Cart</button>
            </div>

        </div>
    `;

    product_Container.appendChild(div);
  });
  // console.log(products);
};

load_all_products();
