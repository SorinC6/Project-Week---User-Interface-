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


        const newName = document.createElement('h2');
        newName.className = 'rev-h2';
        newName.textContent = nameField.value;
        const newSUbject = document.createElement('p');
        newSUbject.classList = 'rev-text';
        newSUbject.textContent = subject.value;

        nameField.value='';
        subject.value='';

        newDiv.appendChild(newName);
        newDiv.appendChild(newSUbject);


        // let newDiv = createDiv('div', 'review-text');
        // let newTitle = createEl('h2', "rev-h2", nameField.value);
        // let newDate = createEl('h5', 'rev-data', '..th Jan 2019');
        // let newText = createEl('p', "rev-text", subject.value);

        // newDiv.appendChild(newTitle);
        // newDiv.appendChild(newDate);
        // newDiv.appendChild(newText);

        // const formBody=this.domElement.querySelector('.articleForm');

        // formBody.appendChild(newDiv);
    }
}

const books = document.querySelectorAll('.card-holder2');
books.forEach(item => {
    return new Book(item);
})



// const queSel = selector => document.querySelector(selector);
// const headerField = queSel('#title');
// const articleField = queSel('#articleText');
// const reviewDiv = queSel('.button-review');

// // Function to create review and return new Book class
// const createBook = () => {

//   const createDiv = (element, classname = "", text = "") => {
//     const newDiv = document.createElement(element);
//     newDiv.className = classname;
//     newDiv.textContent = text;
//     reviewDiv.appendChild(newDiv)
//     return newDiv
//   }

//   const createEl = (element, classname = "", text = "") => {
//     const newEl = document.createElement(element);
//     newEl.className = classname;
//     newEl.textContent = text;
//     newDiv.appendChild(newEl)
//   }

//   let newDiv = createDiv('div', 'review-text');
//   let newTitle = createEl('h2', "rev-h2", headerField.value);
//   let newDate = createEl('h5', 'date', '30th Jan 2019');
//   let newText = createEl('p', "", articleField.value);

// // reset the text inside textfield after clicking Submit
//   headerField.value = '';
//   articleField.value = '';
//   const parent=
//   //return new Book(newDiv);
// }


// // Add functionality to Submit button to createArticle
// const theButton = queSel('#submitBtn');
// theButton.addEventListener('click', createBook);
