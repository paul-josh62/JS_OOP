console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

hobbies = [];

class person{
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobby){
    this.hobbies = this.hobbies.filter((currHobby) => {
      console.log(currHobby);
      if (currHobby == hobby){
        return false;
      }
      return true;
    });
  }
  greeting(){
    console.log("Hello fellow person!");
  }

}

const myPerson = new person("Hunter", 1, "house", ["chess", "rock climbing", "snowboarding", "paintball"]);
console.log(myPerson);
console.log(myPerson.hobbies);
myPerson.removeHobby("chess");
console.log(myPerson.hobbies);
myPerson.addHobby("disc golf");



// Exercise 2+3 Section
console.log("EXERCISE 2 + 3:\n==========\n");

class coder extends person{
  constructor(name, pets, residence, hobbies){
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting(){
    console.log("Hi! I'm a coder");
  }
}

const mycoder = new coder("Josh", 0, "House", "Disc Golf");
console.log(mycoder);
mycoder.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{
  result = 0;


  add(a, b){
    console.log("add used")
    if (b){
        this.result = a + b;
        return this.result;
      }
  }

  subtract(a, b){
    console.log("sub used")
    if (b){
        this.result = a - b;
        return this.result;
      }
  }

  multiply(a, b){
    if (b){
        this.result = a * b;
        return this.result;
      }
  }

  divide(a, b){
    if (b){
        this.result = a / b;
        return this.result;
      }
  }

  displayResult(){
    console.log(this.result);
  }
}

const myCalc = new Calculator();

console.log(myCalc);
myCalc.subtract(7,4);
console.log();
myCalc.displayResult();

