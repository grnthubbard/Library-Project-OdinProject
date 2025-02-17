const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}
//Function to add a book to the library array
function addBookToLibrary(title, author, pages, readStatus) {
  let newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  return newBook;
}
//Sample pushes
addBookToLibrary("Cosmos", "Carl Sagan", "365", "No");
addBookToLibrary("Looking For Alaska", "John Green", "221", "Yes");
//Log the samples
for (let item of myLibrary) {
    console.log(item);
}

//Add a listener so when I click on the buttom, it displays the form ("display:block");
const element = document.getElementById("addBook");
element.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("bookForm").style.display = "block";
}

document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Page will no longer refresh when I press submit.

    //Instead, we need to get the input values
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();
    const readStatus = document.getElementById("readStatus").value.trim();

    //Make sure you validate the input (no blanks)
    if (title === "" || author ==="" || pages === "") {
        alert("Please fill out all the fields.");
        return;
    }
    const newBook = addBookToLibrary(title, author, pages, readStatus);

    const libraryDisplay = document.createElement("h2");
    libraryDisplay.textContent = `Title: ${newBook.title}, Author: ${newBook.author}, Pages: ${newBook.pages}, Read: ${newBook.readStatus}`;
    const container = document.getElementById("libraryContainer");
    container.appendChild(libraryDisplay);
});



