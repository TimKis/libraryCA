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
  }
  
  const Billy = new Media('Billy Movie');
  console.log(Billy);
  Billy.addRating(4)
  Billy.addRating(3)
  Billy.addRating(5)
  Billy.addRating(6)
  console.log(Billy.ratings);
  console.log(Billy.getAverageRating());
  console.log(Billy);
  