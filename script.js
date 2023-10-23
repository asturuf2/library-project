const myLibrary = [];

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

const cardContainer = document.querySelector(".card-grid")  
const openModal = document.querySelector(".button")
const modal = document.querySelector("#modal")

openModal.addEventListener("click", () => {
    modal.showModal();
})

//retrieve data from form and add to myLibrary

const form = document.querySelector(".new-book-form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let index = myLibrary.length
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
    //create book
        const cardGrid = document.createElement("div")
        const cardTitle = document.createElement("div")
        const cardAuthor = document.createElement("div")
        const cardPages = document.createElement("div")
        const buttonStatus = document.createElement("button")
        const buttonGrid = document.createElement("div")
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
        buttonGrid.appendChild(buttonRemove)
        buttonGrid.appendChild(buttonStatus)
    //adds new book info to div
        cardTitle.innerText = title
        cardAuthor.innerText = author
        cardPages.innerText = pages + " Pages"
        buttonStatus.innerText = "Not read"
        buttonStatus.style.backgroundColor = "red"
        buttonRemove.innerText = "remove"
    //addevent listener that removes card from dom to the buttonRemove
        buttonRemove.addEventListener("click", () => {
            cardGrid.remove();
        })
    //addeventlistener allows user to change read status 
        buttonStatus.addEventListener("click", () => {
            if (buttonStatus.innerText == "Not read"){
                buttonStatus.innerText = "Read"
                buttonStatus.style.backgroundColor = "green"
            } else {
                buttonStatus.innerText = "Not read"
                buttonStatus.style.backgroundColor = "red"
            }
                
        })

})


