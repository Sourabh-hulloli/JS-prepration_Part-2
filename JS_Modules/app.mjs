import { firstName as fName } from "./utils/names.js"; // importing and giving alias name, we have to use the alias name in below program.
import { age } from "./utils/age.js"; // importing witout alias name
import Person, { Person2 } from "./utils/Person.js"; // showing red but code is not wrong.

console.log(fName, age);

const person = new Person("Tom", "Hardy", 22);
person.info();
console.log(person);
