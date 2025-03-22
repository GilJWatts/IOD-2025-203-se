// Create a JSON object for a book
let book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  description:
    "A comedic science fiction series created by Douglas Adams that has become a popular culture phenomenon.",
  author: "Douglas Adams",
  pages: 224,
};

// Print object property values individually
console.log("Title: " + book.title);
console.log("Description: " + book.description);
console.log("Author: " + book.author);
console.log("Pages: " + book.pages);

// Print the whole book object
console.log("Book object: ", book);

// Update the description of the book
book.description =
  "In this wildly inventive and funny science fiction story, Arthur Dent is rescued from Earth's destruction by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy.";

console.log("Updated Description: " + book.description);

// Extension: Create an array of 5 book objects
let books = [
  {
    title: "Pride and Prejudice",
    description: "A romantic novel by Jane Austen, first published in 1813.",
    author: "Jane Austen",
    pages: 432,
  },
  {
    title: "1984",
    description: "A dystopian novel by George Orwell published in 1949.",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "The Lord of the Rings",
    description:
      "An epic high-fantasy novel written by English author J. R. R. Tolkien.",
    author: "J. R. R. Tolkien",
    pages: 1216,
  },
  {
    title: "The Little Prince",
    description:
      "A novella by French aristocrat, writer, poet, and pioneering aviator Antoine de Saint-Exupéry.",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "A fantasy novel written by British author J. K. Rowling. It is the first novel in the Harry Potter series.",
    author: "J. K. Rowling",
    pages: 309,
  },
];

//Print the array of books.
console.log("Array of Books:", books);
//Iterate through the array and print each book's title.
for (let i = 0; i < books.length; i++) {
  console.log("Book " + (i + 1) + " title: " + books[i].title);
}
