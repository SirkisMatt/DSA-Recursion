//Counting sheep

// const countingSheep = function(number) {
//     if (number === 0) {
//         return 'All sheep jump over the fence'
//     }

//     return number + ': Another sheep jumps over the fence' +  " " + countingSheep(number - 1)
// }

// console.log(countingSheep(3))


// //Power Calculator

// const powerCalculator = function(base, exponent) {
//     if (exponent < 0) {
//         return "Nope, not gonna work buddy"
//     }

//     return base ** exponent
// }

// console.log(powerCalculator(10,2))


// //Reverse String 

// const reverseString = function(str) {
//     return str.split(' ').reverse().toString()
// }

// console.log(reverseString('I want to be reversed'))

// //nth Triangulat Number

// const triangularNum = function(n) {
//     return (n * (n + 1)) / 2
// }

// console.log(triangularNum(6))

// //string splitter

// const stringSplitter = function(string) {
    
//     if (!string.includes('/')) {
//         return string
//     } else {
//         return string.split('/')
//     }
// }

// console.log(stringSplitter("02/20/2020"))

// //Fibonacci

// const fibonacci = function(n) {
//     if(n < 2) {
//         return n
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)  
//     }
// }

// let number = 6
// for(let i = 0; i <= number; i++) {
//     console.log(fibonacci(i));
// }

// //Factorial

// const factorial = function(n) {
//     if (n === 1) {
//         return n
//     } else {
//         return n * factorial(n - 1)
//     }
// }

// console.log(factorial(2))

// Maze

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];


//  function Path(maze) {
//     this.maze = maze;

//     this.traverse = function(column, row) {
//         if(this.maze[column][row] === 'e') {
//             console.log("we solved the maze!")
//             return ms.traverse(0, 0)
//         } else if (this.maze[column][row] === ' ') {
//             console.log(column,row);
//             this.maze[column][row] = 9;
//             if(column < this.maze.length - 1) {
//                 this.traverse(column + 1, row);
//             }
//             if(row < this.maze[column].length - 1) {
//                 this.traverse(column, row + 1)
//             }
//             if(column > 0) {
//                 this.traverse(column - 1)
//             }
//             if(row > 0) {
//                 this.traverse(column, row - 1)
//             }
//         }
//     }
// }

// let ms = new Path(maze)
// console.log(ms.traverse(0, 0))

//Anagrams 

let anagram = function(word) {
    return word.split('').splice(0,1)
}

console.log(anagram('east'))