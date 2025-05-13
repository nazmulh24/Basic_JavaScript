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
    display_product(data);
  } catch (error) {
    console.log("Error -->", error);
  }
};

const display_product = (products) => {
  const product_Container = document.getElementById("product-container");

  product_Container.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${product.image}" class="card-img" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title.slice(0, 40)}</h5>
            <p class="card-text">${product.description.slice(0, 50)}</p>
            <h4 class="card-title">Price: $${product.price}</h4>
            <button onclick="loadSingleProduct('${
              product.id
            }')" class="btn btn-primary">Details</button>
            <button onclick="handleAddToCard('${product.title}', '${
      product.price
    }')" class="btn btn-primary">Add to Cart</button>
        </div>
    `;

    product_Container.appendChild(div);
  });

  console.log(products);
};

const loadSingleProduct = (id) => {
  console.log(id);

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

const handleAddToCard = (name, price) => {
  /////////////////////////////

  const cart_Count = document.getElementById("cartCount").innerText;

  let Converted_Count = parseInt(cart_Count) || 0; // Ensure it's a number
  Converted_Count++;
  document.getElementById("cartCount").innerText = Converted_Count;

  /////////////////////////////

  //   console.log(name, price);

  const cart_Container = document.getElementById("cart-container");
  //   cart_Container.innerHTML = "";

  const div = document.createElement("div");
  div.classList.add("cart");
  div.innerHTML = `
        <div class="cart-body">
            <p c>${name.slice(0, 30)}</p>
            <h4 class="price">${price}</h4>
            <hr >
        </div>
    `;

  cart_Container.appendChild(div);

  updateTotal();
};

const updateTotal = () => {
  const allPrice = document.getElementsByClassName("price");

  let count = 0;
  for (const element of allPrice) {
    count = count + parseFloat(element.innerText);
  }

  document.getElementById("total").innerText = count.toFixed(2);
};

load_all_products();
