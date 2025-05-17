// The news data array
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

const newsContainer = document.getElementById("news-container");
const template = document.getElementById("news-item-template");

function displayNews() {
  console.log("Updating news display...");
  newsContainer.innerHTML = "";
  if (news.length === 0) {
    newsContainer.innerHTML = "<p>No news available at the moment.</p>";
    return;
  }
  news.forEach((item) => {
    const newsElementClone = template.content.cloneNode(true);
    newsElementClone.querySelector(".news-title").textContent = item.title;
    newsElementClone.querySelector(".news-content").textContent = item.content;
    newsContainer.appendChild(newsElementClone);
  });
}
displayNews();
setInterval(displayNews, 5000);
setTimeout(() => {
  console.log("Adding new news item to the array...");
  news.push({
    id: 4,
    title: "Tech Breakthrough",
    content: "New discovery announced...",
  });
}, 10000);
setTimeout(() => {
  console.log("Removing the first news item from the array...");
  news.shift();
}, 15000);
