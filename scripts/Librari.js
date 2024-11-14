import { Book } from './Book';


export class Librari {
    constructor() {
        this.books = [];
    }


addBook(book) {
    this.books.push(book)
    this.displayBooks()
}
   removeBook(index) {
    this.books.splice(index,1)
    this.displayBooks
   }

editBook(title,author, index){
    this.books.splice(index,1, new Book(title, author))
}





displayBooks() {
    const bookList = document.querySelector('#book-List');
    bookList.textContent = '';

    this.books.forEach((book, index) =>{
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item')

        const bookContent = document.createElement('span')
        bookContent.textContent ='${book, title} от ${book.author}'
        
        const removeBookBtn = document.createElement('button')
        removeBookBtn.textContent='remove'
        removeBookBtn.addEventListener ( 'click', ()=>{ 
            this.removeBook(index)
        })
        bookItem.append(bookContent, removeBookBtn)
        bookList.append(bookItem)
        })
    }
}

