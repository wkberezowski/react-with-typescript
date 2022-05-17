let age: number;

age = 12;

let userName: string;

let isInstructor: boolean;

isInstructor = true;

// array types and object types

let hobbies: string[];

hobbies = ['dupa'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

let people: Person[];

// type inference

let course: string | number = 'react - the guide';

course = 12341;

// functions & types

function add(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('')
