// functions used in data stack
// push, to add a data on top of a remaining data
// pop, to removing the top element  of the stack
// peek, for displaying the top element of the stack
// length or size, for determning the number of the elements in the stack


var letters = []; // this is my stack
var word = "racecar";

var rWord = "";

// to put letters of the word into the stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
    
}

for (let i = 0; i < word.length; i++) {
    rWord += letters.pop();
    
}
if (word === rWord) {
    console.log(word + "is a palindrom.");
}
else {
    console.log(word + "is not a palindrome");
}

// create a stack 
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack 
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    this.pop = function() {
        if (this.count === 0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function() {
        return this.count;
    }
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
myStack.push(6);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('NumbersPractice');
console.log(myStack.size())
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
