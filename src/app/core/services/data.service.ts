import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pointResult:number = 0;
  timeResult:string = '';

  gridTimeResult:number=0;

  gamelist: any[] = [
    {
      name: "Quiz Game",
      img: "../../../assets/quiz-pre.png",
      link: "/quiz"
    },
    {
      name: "color grid",
      img: "../../../assets/colorgrid-pre.png",
      link: "/colorgrid"
    },
    {
      name: "coming soon...",
      img: "../../../assets/placeholder.png"
    },
    {
      name: "coming soon...",
      img: "../../../assets/placeholder.png"
    },
    {
      name: "coming soon...",
      img: "../../../assets/placeholder.png"
    }
  ]

  quizData = [
    {
      question: "What is JavaScript?",
      answers: [
        { text: "A markup language", correct: false },
        { text: "A programming language", correct: true },
        { text: "A database management system", correct: false },
        { text: "A design framework", correct: false }
      ]
    },
    {
      question: "How do you declare a variable in JavaScript?",
      answers: [
        { text: "let myVar;", correct: true },
        { text: "variable myVar;", correct: false },
        { text: "declare myVar;", correct: false },
        { text: "myVar = 5;", correct: false }
      ]
    },
    {
      question: "How do you round the number 7.25 to the nearest integer?",
      answers: [
        { text: "Math.round(7.25)", correct: true },
        { text: "Math.rnd(7.25)", correct: false },
        { text: "round(7.25)", correct: false },
        { text: "rnd(7.25)", correct: false }
      ]
    },
    {
      question: "Which keyword is used to declare a function?",
      answers: [
        { text: "function", correct: true },
        { text: "method", correct: false },
        { text: "func", correct: false },
        { text: "def", correct: false }
      ]
    },
    {
      question: "What does 'typeof' operator return in JavaScript?",
      answers: [
        { text: "Number", correct: false },
        { text: "String", correct: false },
        { text: "Object", correct: false },
        { text: "All of the above", correct: true }
      ]
    },
    {
      question: "How do you comment in JavaScript?",
      answers: [
        { text: "// Comment", correct: true },
        { text: "<!-- Comment -->", correct: false },
        { text: "/! Comment !/", correct: false },
        { text: "# Comment", correct: false }
      ]
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      answers: [
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "=", correct: false },
        { text: "!==", correct: false }
      ]
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      answers: [
        { text: "The current function", correct: false },
        { text: "The global object", correct: false },
        { text: "The current object", correct: true },
        { text: "The parent object", correct: false }
      ]
    },
    {
      question: "Which method is used to add an element to the end of an array in JavaScript?",
      answers: [
        { text: "push()", correct: true },
        { text: "add()", correct: false },
        { text: "append()", correct: false },
        { text: "insert()", correct: false }
      ]
    },
    {
      question: "What is an example of a falsy value in JavaScript?",
      answers: [
        { text: "0", correct: true },
        { text: "1", correct: false },
        { text: "' '", correct: false },
        { text: "true", correct: false }
      ]
    },
    {
      question: "Which method is used to remove the last element from an array in JavaScript?",
      answers: [
        { text: "pop()", correct: true },
        { text: "remove()", correct: false },
        { text: "delete()", correct: false },
        { text: "splice()", correct: false }
      ]
    },
    {
      question: "How do you convert a string to lowercase in JavaScript?",
      answers: [
        { text: "toLowerCase()", correct: true },
        { text: "lowerCase()", correct: false },
        { text: "toLower()", correct: false },
        { text: "caseLower()", correct: false }
      ]
    },
    {
      question: "What does the '&&' operator do in JavaScript?",
      answers: [
        { text: "Logical OR", correct: false },
        { text: "Logical AND", correct: true },
        { text: "Bitwise OR", correct: false },
        { text: "Bitwise AND", correct: false }
      ]
    },
    {
      question: "Which method is used to join elements of an array into a string in JavaScript?",
      answers: [
        { text: "concat()", correct: false },
        { text: "join()", correct: true },
        { text: "merge()", correct: false },
        { text: "combine()", correct: false }
      ]
    },
    {
      question: "How do you create a new object in JavaScript?",
      answers: [
        { text: "Object.create()", correct: true },
        { text: "new Object()", correct: false },
        { text: "new {}", correct: false },
        { text: "createObject()", correct: false }
      ]
    },
    {
      question: "What is the purpose of 'setTimeout()' function in JavaScript?",
      answers: [
        { text: "To wait for user input", correct: false },
        { text: "To execute a function after a delay", correct: true },
        { text: "To repeat a function at intervals", correct: false },
        { text: "To check for variable type", correct: false }
      ]
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      answers: [
        { text: "<script src='script.js'>", correct: true },
        { text: "<script href='script.js'>", correct: false },
        { text: "<script ref='script.js'>", correct: false },
        { text: "<script name='script.js'>", correct: false }
      ]
    },
    {
      question: "What does the 'NaN' stand for in JavaScript?",
      answers: [
        { text: "Not a Name", correct: false },
        { text: "Not a Number", correct: true },
        { text: "Not a Null", correct: false },
        { text: "Not a Nullify", correct: false }
      ]
    },
    {
      question: "How do you access the length of an array in JavaScript?",
      answers: [
        { text: "array.length", correct: true },
        { text: "array.length()", correct: false },
        { text: "array.count", correct: false },
        { text: "array.size", correct: false }
      ]
    },
    {
      question: "Which method is used to sort elements of an array in JavaScript?",
      answers: [
        { text: "sort()", correct: true },
        { text: "order()", correct: false },
        { text: "arrange()", correct: false },
        { text: "group()", correct: false }
      ]
    }
  ];



  constructor() { }
}
