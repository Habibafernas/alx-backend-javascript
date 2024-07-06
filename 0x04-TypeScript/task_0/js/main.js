"use strict";
exports.__esModule = true;
var studentA = {
    firstName: "Harry",
    lastName: "Yoon",
    age: 22,
    location: "Seoul, South Korea"
};
var studentB = {
    firstName: "Anjali",
    lastName: "Prajapati",
    age: 22,
    location: "Lodz, Poland"
};
var studentsList = [
    studentA,
    studentB,
];
var styleSheet = "\n  html {\n    margin: 0;\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n  }\n  table {\n    border-collapse: collapse;\n  }\n  thead {\n    font-weight: bold;\n  }\n  td {\n    padding: 10px;\n    border: 1px solid gray;\n    cursor: pointer;\n  }\n  td:hover {\n    background: gainsboro;\n  }\n\n  td:nth-child(1) {\n    text-align: center;\n  }\n";
