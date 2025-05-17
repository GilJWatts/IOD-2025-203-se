let news = [
  {
    id: 1,
    title: "Election Results",
    content: "Newly elected minister...",
  },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  {
    id: 3,
    title: "Tornado Warning",
    content: "Residents should prepare...",
  },
];

let nextId = news.length > 0 ? Math.max(...news.map((item) => item.id)) + 1 : 1;

const newsContainer = document.getElementById("news-container");
const template = document.getElementById("news-item-template");
const addNewsForm = document.getElementById("add-news-form");
const titleInput = document.getElementById("news-title-input");
const contentInput = document.getElementById("news-content-input");

function displayNews() {
  console.log("Updating news display...");
  newsContainer.innerHTML = "";
  if (news.length === 0) {
    newsContainer.innerHTML = "<p>No news available at the moment.</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  news.forEach((item) => {
    const newsElementClone = template.content.cloneNode(true);
    newsElementClone.querySelector(".news-title").textContent = item.title;
    newsElementClone.querySelector(".news-content").textContent = item.content;
    fragment.appendChild(newsElementClone);
  });
  newsContainer.appendChild(fragment);
}

addNewsForm.addEventListener("submit", function (event) {
  const newTitle = titleInput.value.trim();
  const newContent = contentInput.value.trim();

  if (newTitle === "" || newContent === "") {
    alert("Please fill in both title and content.");
    return;
  }

  const newNewsItem = {
    id: nextId++,
    title: newTitle,
    content: newContent,
  };

  news.unshift(newNewsItem);

  console.log("Added new item:", newNewsItem);
  console.log("Current news array:", news);

  titleInput.value = "";
  contentInput.value = "";

  displayNews();
});

displayNews();

const newsInterval = setInterval(displayNews, 5000);

setTimeout(() => {
  if (!news.find((item) => item.id === 99)) {
    console.log("Simulating external addition...");
    news.push({
      id: 99,
      title: "Weather Update",
      content: "Sunny skies expected...",
    });
  }
}, 12000);
