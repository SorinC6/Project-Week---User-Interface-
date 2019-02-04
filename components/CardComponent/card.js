//=================CARD EXPAND OVERVIEW FUnctionality=============

class Book {
    constructor(domElement) {
        this.domElement = domElement;
        //console.log(this.domElement);

        this.expandButton = domElement.querySelector('.button-overview');
        this.closeButton = domElement.querySelector('.btn-close-about');

        this.about = domElement.querySelector('.card-about');

        this.expandButton.addEventListener('click', () => this.expand());
        this.closeButton.addEventListener('click', () => this.close())
    }

    expand() {

        books.forEach(item => {
            //console.log(item);
            const cardA = item.querySelector('.card-about');
            //console.log(cardA);
            cardA.classList.add('card-about-close');

        })
        //console.log(books);
        const card = this.domElement.querySelector('.card-about');

        card.classList.toggle('card-about-close');
        //console.log('click');
    }
    close() {
        this.about.classList.toggle('card-about-close');
    }
}

const books = document.querySelectorAll('.card-holder');
books.forEach(item => {
    return new Book(item);
})