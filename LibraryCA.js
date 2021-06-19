class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    };
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
     return this._ratings;
    }
  
    set isCheckedOut(checkedOut){
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum  = this._ratings.reduce((firstNum, secondNub) => firstNum + secondNub, 0);
      let lengthRatings = this._ratings.length;
      return `'${this._title}' have average rating: ${ratingsSum / lengthRatings}`;
  
    }
  
    addRating(myRating) {
      this._ratings.push(myRating);
    }
  };
  class Book extends Media{
    constructor(autor, title, pages){
      super(title);
      this._autor = autor;
      this._pages = pages;
    }
  
    get autor(){
      return this._autor;
    }
  
    get pages(){
      return this._pages;
    }
  };
  
  class Movie extends Media{
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime; 
    }
  };
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4, 5, 5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  