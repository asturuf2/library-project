const myLibrary = [];

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

const hobbit = new Book(
    "The Hobbit",
    "J. R. R. Tolkein",
    "304"
)

const jade = new Book(
    "Jade City",
    "Fonda Lee",
    "632"
)

myLibrary.push(hobbit)
myLibrary.push(jade)

const cardContainer = document.querySelector(".card-grid")

//loop that goes through myLibrary and creates div for each

const createBookCardLoop = () => {
    //before the loop runs, remove all cards from dom
    
    myLibrary.forEach((e) => {
        const cardGrid = document.createElement("div")
        const cardTitle = document.createElement("div")
        const cardAuthor = document.createElement("div")
        const cardPages = document.createElement("div")
        const buttonGrid = document.createElement("div")
        const buttonStatus = document.createElement("button")
        const buttonRemove = document.createElement("button")
    //add classes to the elements for styling 
        cardGrid.classList.add("card-style-container")
        cardTitle.classList.add("card-style")
        cardAuthor.classList.add("card-style")
        cardPages.classList.add("card-style")
        buttonGrid.classList.add("button-style-container")
        buttonStatus.classList.add("button-style")
        buttonRemove.classList.add("button-style")
    //append card elements 
        cardContainer.appendChild(cardGrid)
        cardGrid.appendChild(cardTitle)
        cardGrid.appendChild(cardAuthor)
        cardGrid.appendChild(cardPages)
        cardGrid.appendChild(buttonGrid)
        buttonGrid.appendChild(buttonStatus)
        buttonGrid.appendChild(buttonRemove)

    //adds the content of the selected book from myLibrary to the display div
        cardTitle.innerText = e.title
        cardAuthor.innerText = e.author
        cardPages.innerText = e.pages + " Pages"
        buttonStatus.innerText = "status"
        buttonRemove.innerText = "remove"
    })
}

createBookCardLoop()

const openModal = document.querySelector(".button")
const modal = document.querySelector("#modal")

openModal.addEventListener("click", () => {
    modal.showModal();
})


//retrieve data from form and add to myLibrary

const form = document.querySelector(".new-book-form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#form-title").value
    const author = document.querySelector("#form-author").value
    const pages = document.querySelector("#form-pages").value
        const book = new Book(
            title,
            author,
            pages 
        )
    myLibrary.push(book)
    form.reset()
    modal.close()
})
