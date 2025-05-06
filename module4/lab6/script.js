document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");
  const cardTemplate = document.getElementById("post-card-template");
  const loadingIndicator = document.getElementById("loading-indicator");

  const DEFAULT_LIMIT = 10;
  const API_URL = `https://jsonplaceholder.typicode.com/posts?_limit=${DEFAULT_LIMIT}`;

  function displayPosts(posts) {
    postsContainer.innerHTML = "";

    if (!posts || posts.length === 0) {
      postsContainer.innerHTML =
        '<p class="text-center text-muted">No posts found.</p>';
      return;
    }

    const fragment = document.createDocumentFragment();

    posts.forEach((post) => {
      const cardClone = cardTemplate.content.cloneNode(true);

      cardClone.querySelector(".card-title").textContent = post.title;

      const postBody =
        post.body.length > 150
          ? post.body.substring(0, 150) + "..."
          : post.body;
      cardClone.querySelector(".card-text").textContent = postBody;

      fragment.appendChild(cardClone);
    });

    postsContainer.appendChild(fragment);
  }

  async function fetchPosts() {
    loadingIndicator.style.display = "block";

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const posts = await response.json();

      displayPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);

      postsContainer.innerHTML = `<div class="col-12"><p class="text-center text-danger">Failed to load posts. Error: ${error.message}</p></div>`;
    } finally {
      setTimeout(() => {
        if (loadingIndicator) {
          loadingIndicator.style.display = "none";
        }
      }, 0);
    }
  }

  fetchPosts();
});
