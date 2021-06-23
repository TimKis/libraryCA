class School{
    constructor(name, level, numberOfStudents, averageTestScores){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._averageTestScores = averageTestScores;
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
    
    get averageTestScores(){
      return this._averageTestScores;
    }
  
    set numberOfStudents(number){
      if(typeof number === 'number'){
      this._numberOfStudents = number;
        }else{
          console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    set averageTestScores(scoreTest){
      if(typeof scoreTest === 'number'){
     this._averageTestScores = scoreTest;
        }else{
          console.log('Invalid input: averageTestScores must be set to a Number.');
        }
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let randomNum = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomNum];
    }
  
  };

  class PrimarySchool extends School{
    constructor(name, numberOfStudent, averageTestScores, pickupPolicy){
      super(name, 'primary', numberOfStudent, averageTestScores);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  };
  
  class HighSchool extends School{
    constructor(name, numberOfStudent, sportsTeams, averageTestScores){
      super(name, "high", numberOfStudent, averageTestScores);
      this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams(){
      return this._sportsTeams;
    }
  };
  
  class MiddleSchool extends School{
    constructor(name, numberOfStudent, averageTestScores){
      super(name, "middle", numberOfStudent, averageTestScores);
    }
  };
  
  let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 7.5);
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 6.5);
  console.log(alSmith.sportsTeams);
  console.log(alSmith.averageTestScores);
  
  let frBob = new MiddleSchool('Frog M. Bob', 250, 7.5);
  frBob.quickFacts();
  console.log(frBob.averageTestScores);
  frBob.averageTestScores = 8;
  console.log(frBob.averageTestScores);