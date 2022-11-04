class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.0);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const simone = new Employee("Simone", "SoftWare Lead", 150000);
const ali = new Employee("Ali", "SoftWare Lead", 150000);
const florida = new Employee("Florida", "Designer", 150000);
const david = new Employee("David", "Designer", 150000);
const brian = new Employee("Brian", "Designer", 150000);
const karla = new Employee("Karla", "Retail Lead", 100000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);


console.log(craig.boss);
console.log(karla.boss)
console.log(ada.numberOfSubordinates);
console.log(arvinder.numberOfSubordinates);
console.log(phil.numberOfSubordinates);
console.log(brian.numberOfPeopleToCEO);
console.log(ali.numberOfPeopleToCEO);
