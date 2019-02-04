class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      // this.tabElement;
      this.tabElement = tabElement;
  
      // Get the `data-tab` value from this.tabElement and store it here
      // this.tabData = ; 
      this.tabData = this.tabElement.dataset.tab; 
  
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
      
  
      // Check to see if this.tabData is equal to 'all'
    
      if(this.tabData === "all") {
        // If `all` is true, select all cards regardless of their data attribute values
        // this.cards = ;
        this.cards = document.querySelectorAll('.card');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        // this.cards = ;
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      }
      
  
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      // this.cards = Array.from(this.cards).map();
      this.cards = Array.from(this.cards).map(item => new TabCard(item));
  
      // Add a click event that invokes this.selectTab
      // this.tabElement.addEventListener();
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      // const tabs = document.querySelectorAll();
      const tabs = document.querySelectorAll('.tab');
  
      // Iterate through the NodeList removing the .active-tab class from each element
      // tabs.forEach()
      tabs.forEach(item => item.classList.remove('active-tab'));
  
      // Select all of the elements with the .card class on them
      // const cards = ;
      const cards = document.querySelectorAll('.card');
  
      // Iterate through the NodeList setting the display style each one to 'none'
      // cards.forEach()
      cards.forEach(item => item.style.display = 'none');
  
      // Add a class of ".active-tab" to this.tabElement
      // this.tabElement;
      this.tabElement.classList.add('active-tab');
  
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      // this.cards.forEach(card => card.selectCard());
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      // this.cardElement;
      this.cardElement = cardElement;
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      // this.cardElement;
      this.cardElement.style.display = "flex";
      TweenMax.from(this.cardElement,2,{scale:0,ease: Bounce.easeOut});
    }
  
  }
  
  // First step! Create a reference to all ".tab" classes.
  // let tabs = document.querySelectorAll();
  let tabs = document.querySelectorAll('.tab');
  
  // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
  // tabs = Array.from(tabs).map() 
  tabs.forEach(item => {return new TabLink(item)})  
  
  
  