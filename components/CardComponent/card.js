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
        this.contentR = domElement.querySelector('.review-content');

        //SUBMIT REVIEW BUTTON
        this.submitReview = domElement.querySelector('#submitBtn');

        this.about = domElement.querySelector('.card-about');

        this.expandButton.addEventListener('click', () => this.expand());
        this.closeButton.addEventListener('click', () => this.close())

        this.expandReview.addEventListener('click', () => this.expandRev());
        this.closeReviews.addEventListener('click', () => this.closeRev());

        this.submitReview.addEventListener('click', () => this.submitRev());
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
        // ======== TODO for later ===============
        // books.forEach(item=>{
        //     const contentRev=item.querySelector('.review-Content');
        //     contentRev.classList.add('review-open')

        // })
        const content = this.domElement.querySelector('.review-content');
        //console.log(content);
        content.classList.toggle('review-open');
    }
    closeRev() {
        //console.log('close');
        this.contentR.classList.toggle('review-open');
    }

    submitRev() {
        console.log('Submited');
        const nameField = this.domElement.querySelector('#title');
        const subject = this.domElement.querySelector('#articleText');
        const reviewDiv = this.domElement.querySelector('.articleForm');

        const newDiv = document.createElement('div');
        newDiv.className = 'review-text';
        //newDiv.textContent = text;
        reviewDiv.appendChild(newDiv)

        const newSpan=document.createElement('span');
        newSpan.textContent="From:";
        newSpan.className='rev-h2';

        const newName = document.createElement('h2');
        //newName.appendChild(newSpan);

        newName.className = 'rev-h2';
        newName.textContent = nameField.value;
        const newSUbject = document.createElement('p');
        newSUbject.classList = 'rev-text';
        newSUbject.textContent = subject.value;

        nameField.value='';
        subject.value='';

        newDiv.appendChild(newName);
        newDiv.appendChild(newSUbject);

    }
}

const books = document.querySelectorAll('.card-holder2');
books.forEach(item => {
    return new Book(item);
})

