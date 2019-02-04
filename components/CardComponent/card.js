//=================CARD EXPAND OVERVIEW FUnctionality=============

class Book {
    constructor(domElement) {
        this.domElement = domElement;
        //console.log(this.domElement);

        //Expand OVERVIEW BUTTONS
        this.expandButton = domElement.querySelector('.button-overview');
        this.closeButton = domElement.querySelector('.btn-close-about');

        //EXAPND REVIEW BUTTONS
        this.expandReview = domElement.querySelector('.button-reviews');
        this.closeReviews = domElement.querySelector('.review-close');


        this.about = domElement.querySelector('.card-about');

        this.expandButton.addEventListener('click', () => this.expand());
        this.closeButton.addEventListener('click', () => this.close())
        
        this.expandReview.addEventListener('click', () => this.expandReview());
        this.closeReviews.addEventListener('click', () => this.closeReviews());

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

    expandReview() {
        console.log('expand');
    }
    closeReviews() {
        console.log('close');
    }
}

const books = document.querySelectorAll('.card-holder');
books.forEach(item => {
    return new Book(item);
})