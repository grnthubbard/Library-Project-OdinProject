const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  let newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}

addBookToLibrary("Cosmos", "Carl Sagan", "365", "No");
addBookToLibrary("Looking For Alaska", "John Green", "221", "Yes");

for (let item of myLibrary) {
    console.log(item);
}

const element = document.getElementById("addBook");
element.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("bookForm").style.display = "block";
}

const title = document.getElementById("title");

document.getElementById("submitBtn").addEventListener("submit", function(event){
    if(title = ""){
        
    }
    event.preventDefault()
});


