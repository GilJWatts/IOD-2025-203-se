document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  const categorySelect = document.getElementById("category-select");
  const cardTemplate = document.getElementById("product-card-template");
  const loadingIndicator = document.getElementById("loading-indicator");

  const API_BASE_URL = "https://fakestoreapi.com";
  let allProducts = [];

  // --- Function to display products ---
  function displayProducts(productsToDisplay) {
    productContainer.innerHTML = "";
    if (productsToDisplay.length === 0) {
      productContainer.innerHTML =
        '<p class="col-12 text-center text-muted">No products found matching your selection.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();
    productsToDisplay.forEach((product) => {
      const cardClone = cardTemplate.content.cloneNode(true);

      cardClone.querySelector(".product-image").src = product.image;
      cardClone.querySelector(".product-image").alt = product.title;
      cardClone.querySelector(".product-title").textContent = product.title;
      cardClone.querySelector(".product-description").textContent =
        product.description;
      cardClone.querySelector(
        ".product-price"
      ).textContent = `$${product.price.toFixed(2)}`;

      fragment.appendChild(cardClone);
    });
    productContainer.appendChild(fragment);
  }

  // --- Function to populate category dropdown ---
  function populateCategoryDropdown(categories) {
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;

      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categorySelect.appendChild(option);
    });
  }

  // --- Function to fetch data (products and categories) ---
  async function fetchData() {
    loadingIndicator.style.display = "block";
    productContainer.innerHTML = "";

    try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/products/categories`),
        fetch(`${API_BASE_URL}/products`),
      ]);

      if (!categoriesResponse.ok)
        throw new Error(
          `Failed to fetch categories: ${categoriesResponse.status}`
        );
      if (!productsResponse.ok)
        throw new Error(`Failed to fetch products: ${productsResponse.status}`);

      const categories = await categoriesResponse.json();
      allProducts = await productsResponse.json(); // Store all products

      // Hide loading indicator
      loadingIndicator.style.display = "none";

      // Populate dropdown and display all products initially
      populateCategoryDropdown(categories);
      displayProducts(allProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
      loadingIndicator.style.display = "none";
      productContainer.innerHTML = `<p class="col-12 text-center text-danger">Failed to load data. ${error.message}</p>`;
    }
  }

  categorySelect.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "all") {
      displayProducts(allProducts); // Show all products
    } else {
      // Filter products based on the selected category
      const filteredProducts = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      displayProducts(filteredProducts);
    }
  });

  fetchData();
});
