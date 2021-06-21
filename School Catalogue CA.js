class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents; 
    }
    
    get name(){
      return this._name;
    }
    
    get level(){
      return this._level;
    }
  
    get numberOfStudents(){
      return this._numberOfStudents;
    }
  
    set numberOfStudents(number){
      if(typeof number === 'number'){
      this._numberOfStudents = number;
        }else{
          console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let Teachers = [substituteTeachers];
      let randomNum = Math.floor(Math.random() * substituteTeachers.length);
      return Teachers[randomNum];
    }
  
  };