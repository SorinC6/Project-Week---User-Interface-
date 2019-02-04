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
        
        this.expandReview.addEventListener('click', () => this.expandRev());
        this.closeReviews.addEventListener('click', () => this.closeRev());

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

    expandRev() {
        console.log('expand');
        // books.forEach(item=>{
        //     const contentRev=item.querySelector('.review-Content');
        //     contentRev.classList.add('review-open')

        // })
        const content=this.domElement.querySelector('.review-content');
        console.log(content);
        content.classList.toggle('review-open');
    }
    closeRev() {
        console.log('close');
    }
}

const books = document.querySelectorAll('.card-holder2');
books.forEach(item => {
    return new Book(item);
})