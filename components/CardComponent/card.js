//=================CARD EXPAND OVERVIEW FUnctionality=============

class Book {
    constructor(domElement) {
        this.domElement = domElement;
        //console.log(this.domElement);

        //Expand OVERVIEW BUTTONS
        this.expandButton = domElement.querySelector('.button-overview');
        this.closeButton = domElement.querySelector('.btn-close-about');


        // Get the modal
        this.modal = domElement.querySelector('#myModal');
        //console.log(this.modal);
        this.span = domElement.querySelector('.close');


        //DeleteCardButton
        this.deteleCard = this.domElement.querySelector('.close-card-button');
        this.domElement.addEventListener('mouseover', () => {
            this.deteleCard.style.display = "block";
        })
        this.domElement.addEventListener('mouseout', () => {
            this.deteleCard.style.display = "none";

        })
        //console.log(this.deteleCard);

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

        this.deteleCard.addEventListener('click', () => this.deleteCardFunc())

    }

    expand() {

        // books.forEach(item => {
        //     const cardA = item.querySelector('.card-about');
        //     cardA.classList.add('card-about-close');

        // })
        // const card = this.domElement.querySelector('.card-about');

        // card.classList.toggle('card-about-close');

        this.modal.style.display = "block";

        
        this.span.addEventListener('click', () => {
            this.modal.style.display = 'none';
        })

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.modal.style.display = "none";
            }
        }


    }
    close() {
        this.about.classList.toggle('card-about-close');
    }

    expandRev() {
        //console.log('expand');
        // ======== TODO for later ===============
        // books.forEach(item=>{
        //     const contentRev=item.querySelector('.review-Content');
        //     contentRev.classList.add('review-open')

        // })
        const reviewCont=this.domElement.querySelector('.review-content')
        TweenMax.from(reviewCont,2,{ top:'-20%' , ease: Elastic.easeOut })
        //TweenMax.from(".review-content", 1, {scale:2.4,x:150}, 0);
        const content = this.domElement.querySelector('.review-content');
        //console.log(content);
        content.classList.toggle('review-open');
    }
    closeRev() {
        //console.log('close');
        this.contentR.classList.toggle('review-open');
    }

    submitRev() {
        //console.log('Submited');
        const nameField = this.domElement.querySelector('#title');
        const subject = this.domElement.querySelector('#articleText');
        const reviewDiv = this.domElement.querySelector('.articleForm');

        const newDiv = document.createElement('div');
        newDiv.className = 'review-text';
        //newDiv.textContent = text;
        reviewDiv.appendChild(newDiv)

        const newSpan = document.createElement('span');
        newSpan.textContent = "From:";
        newSpan.className = 'rev-h2';

        const newName = document.createElement('h2');
        //newName.appendChild(newSpan);

        newName.className = 'rev-h2';
        newName.textContent = nameField.value;
        const newSUbject = document.createElement('p');
        newSUbject.classList = 'rev-text';
        newSUbject.textContent = subject.value;

        nameField.value = '';
        subject.value = '';

        newDiv.appendChild(newName);
        newDiv.appendChild(newSUbject);

    }
    deleteCardFunc() {
        console.log('detelecard');
        this.domElement.style.display = 'none';
    }
}

const books = document.querySelectorAll('.card-holder2');
books.forEach(item => {
    return new Book(item);
})


class Books {
    constructor() {
        this.books = document.querySelectorAll('.card-holder');

        const wish = document.querySelectorAll('.wishlist');

        wish.forEach(wishlist => {
            wishlist.children[0].addEventListener('click', addToFavorites);
            wishlist.children[1].addEventListener('click', addToFavorites);
            function addToFavorites() {
                wishlist.children[0].classList.toggle('card-about-close');
                wishlist.children[1].classList.toggle('card-about-close');
            }
        })

        let num=0;
        this.books.forEach((item,index) => {
            item.title = item.querySelector('.content-two').children[0].textContent;
            item.author = item.querySelector('.content-two').children[1].textContent;

            //===========STARS RATING====================\\
            const stars = item.querySelectorAll('.rate');
            stars.forEach(starHolder => {
                //starHolder.className = 'rate' + index;
                for (let nr = 1; nr <= 5; nr++) {
                    const star = document.createElement('input');
                    star.readOnly = true;
                    star.id = num + nr;
                    star.name = nr;
                    star.value = "★ ";
                    star.style.maxWidth="32px"
                    star.addEventListener('click', function () {
                        //debugger;
                        for (let i = 0; i < starHolder.children.length; i++) {
                            let idStea = starHolder.children[i].id;
                            bookStars(star);
                            if (star.id >= idStea) {
                                starHolder.children[i].classList.add('full-star');
                            } else {
                                starHolder.children[i].classList.remove('full-star');
                            }

                        };
                    });

                    starHolder.appendChild(star);
                }
                num = num + 5;
                //console.log(starHolder);
            });

            function bookStars(stele) {
                item.stars = stele.name;

                const rating = item.querySelector('#ratings');
                rating.value = '★'.repeat(stele.name);
                rating.style.color = 'yellow';
            }
            //console.log(stars);

        })
    }
}

const allBooks = new Books();
//console.log(allBooks)

const dataList = document.querySelector('#booksName');

allBooks.books.forEach(item => {
    //console.log(item);
    const option = document.createElement('option');
    option.value = item.title + ' ' + item.author;
    dataList.append(option);
    //if()
})

function showBooks() {
    const chosenBook = document.querySelector('#search');
    const chosenBookDescription = chosenBook.value;

    allBooks.books.forEach(book => {
        //console.log(book.title+' '+book.author+' INPUT VALUE:'+chosenBookDescription);
        const bookCompleteDescription = book.title + ' ' + book.author;
        if (book.title.includes(chosenBookDescription) || book.author.includes(chosenBookDescription) || bookCompleteDescription.includes(chosenBookDescription)) {
            book.classList.remove('card-about-close');
        } else {
            book.classList.add('card-about-close');
        }
    })
}



//===============================GASP ANIMATION CREATE TIMELINE FOR LOAD PAGE======

TweenMax.from('.nav-content',4,{opacity:0});
TweenMax.from('#headerImg',6,{opacity:0})
TweenMax.from('.search-content',3,{scale:0,opacity:0});
//TweenMax.from('.card-holder',3,{x:-200,rotation:-160,scale:0,zIndex:0})

const buttonOverview=document.querySelectorAll(' .button-overview').forEach(item=>{
    item.addEventListener('mouseover',function(){
        TweenMax.to(item,1,{width:'60px'})
        item.textContent='INFO';
    })
    item.addEventListener('mouseout',function(){
        TweenMax.to(item,1,{width:'20px'})
        item.textContent='I N F O'
    })
})






