// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects(subjects) {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  springChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const allan = new Person({
  name: "Allan",
  location: "Texas",
  age: 56
});

const ben = new Person({
  name: "Ben",
  location: "New York",
  age: 78
});
const mary = new Instructor({
  name: "Mary",
  location: "New Jersey",
  age: 28,
  favLanguage: "Python",
  specialty: "Data science",
  catchPhrase: "Leave me alone"
});

const linda = new Instructor({
  name: "Linda",
  location: "New Jersey",
  age: 23,
  favLanguage: "JavaScript",
  specialty: "Backend",
  catchPhrase: "Shut up"
});

const zelda = new Student({
  name: "Zelda",
  location: "Florida",
  age: 40,
  previousBackground: "IT",
  className: "CS101",
  favSubjects: ["HTML", "CSS", "Java", "Python"]
});

const john = new Student({
  name: "John",
  location: "South Carolina",
  age: 18,
  previousBackground: "IT",
  className: "CS204",
  favSubjects: ["NodeJS", "C#", "Java", "Python"]
});

const frank = new ProjectManagers({
  name: "Frank",
  location: "Texas",
  age: 36,
  gradClassName: "CS2",
  favInstructor: "Linda",
  channel: "@frank",
  meetTime: "2:00PM"
});

const flynn = new ProjectManagers({
  name: "Flynn",
  location: "New York",
  age: 31,
  gradClassName: "CS2",
  favInstructor: "Mary",
  channel: "@flynn"
});

console.log(ben.age);
console.log(allan.location);
console.log(mary.demo("React"));
console.log(linda);
console.log(zelda.listsSubjects());
console.log(frank.standUp("@frankschannel", "2:00PM"));
console.log(zelda.PRAssignment("Java"));
console.log(flynn.debugsCode("Ramon", "C++"));
