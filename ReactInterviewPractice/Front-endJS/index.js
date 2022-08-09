const numArray = [23, 56, 76, 78, 90, 100];

const consoleArray = numArray.map((numbers => {
    return numbers * 2;
}))

const returnForEach = ((numbers, i) => {

    numbers[i] = numbers + 10;
    return numbers * 10;
})
console.log(consoleArray, returnForEach, numArray);

document.querySelector("#students")
    .addEventListener('click', (data) => {
        console.log(data)
        if (data.target == "LI") {
            window.location.href += "#" + data.target.id;
        }

    })

// Flattening an array
let Employees = [
    ["Emmanuel", "Markus"],
    ["Daniel", "Jeffery"],
    ["Myles", "Kulbalski"],
    ["Jack", "Kamara", ["Essatu", "Chissu","Amedamu"], "Tewodros"],
    ["Biruk", "Solomon"]
];
console.log(Employees)
let numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, [8, 9], 10]
]
let flattenedArray = [].concat(...Employees);

// js custom flattening function
var customflattedfunction = numbers.flat(2);
console.log(flattenedArray, customflattedfunction);

function conditionalCustomFlatArray (Employees, depth = 2) {
    var result = [];
    Employees.forEach((Employee) => {
        if (Array.isArray(Employee) && depth > 1) {
            result.push(...customflattedfunction(Employee, depth -1))
        } else 
            result.push(Employee);

    });
    return result;
}
console.log(conditionalCustomFlatArray);
conditionalCustomFlatArray();
