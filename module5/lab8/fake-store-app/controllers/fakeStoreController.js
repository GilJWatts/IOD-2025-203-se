const axios = require("axios");

const FAKE_STORE_API_BASE_URL = "https://fakestoreapi.com";

const getAllProducts = async (req, res) => {
  try {
    const response = await axios.get(`${FAKE_STORE_API_BASE_URL}/products`);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching all products from Fake Store API:",
      error.message
    );
    res.status(500).json({ error: "Failed to fetch products." });
  }
};

const getProductCategories = async (req, res) => {
  try {
    const response = await axios.get(
      `${FAKE_STORE_API_BASE_URL}/products/categories`
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching product categories from Fake Store API:",
      error.message
    );
    res.status(500).json({ error: "Failed to fetch product categories." });
  }
};

const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const response = await axios.get(
      `${FAKE_STORE_API_BASE_URL}/products/category/${category}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      `Error fetching products for category ${category}:`,
      error.message
    );
    res
      .status(500)
      .json({ error: `Failed to fetch products for category ${category}.` });
  }
};

module.exports = {
  getAllProducts,
  getProductCategories,
  getProductsByCategory,
};
