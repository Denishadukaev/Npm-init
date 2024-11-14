import "../index.css"
import { Book } from "./Book";
import { Librari,} from "./Librari";

const bookForm = document.querySelector("#book-form");

const Librari = new Librari();
 
bookForm.addEventListener("submit", (evevnt)=>{
    event.preventDefault();

    const title = document.querySelector("#title");
    const author = document.querySelector("author");

    const book = new Book(title,value,author.value);
    Librari.addBook(book)
    title.value =''
    author.value =''
})



