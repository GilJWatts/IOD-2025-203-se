import { useState } from "react";
import SingleCat from "./SingleCat";

const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/1280px-TheCheethcat.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/1280px-Mountain_Lion_in_Glacier_National_Park.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/1280px-Standing_jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/1280px-African_leopard_male_%28cropped%29.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1280px-Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1280px-Irbis4.JPG",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1280px-Walking_tiger_female.jpg",
  },
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  const handleSort = () => {
    let sortedCats = [...cats];
    sortedCats.sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverse = () => {
    let reversedCats = [...cats];
    reversedCats.reverse();
    setCats(reversedCats);
  };

  const handleFilter = () => {
    let filteredCats = initialCats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCats(filteredCats);
  };

  const handleReset = () => {
    setCats(initialCats);
  };

  const catItems = cats.map((cat) => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  return (
    <div className="BigCats componentBox">
      <h2>Big Cats</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleSort} style={{ marginRight: "0.5rem" }}>
          Sort Alphabetically
        </button>
        <button onClick={handleReverse} style={{ marginRight: "0.5rem" }}>
          Reverse List
        </button>
        <button onClick={handleFilter} style={{ marginRight: "0.5rem" }}>
          Filter Panthera
        </button>
        <button onClick={handleReset}>Reset List</button>
      </div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>{catItems}</ul>
    </div>
  );
}

export default BigCats;
