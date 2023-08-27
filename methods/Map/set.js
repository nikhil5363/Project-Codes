// Set Methods
// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set
// How to Create a Set
// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables
// The new Set() Method
// Pass an Array to the new Set() constructor:


// const l = new Set();
// l.add('Nikhil');
// l.add('Kumar');
// l.add('Mahto')

// console.log(l,typeof l)
// console.log(l.has('Nikhil'))

// console.log(l instanceof Set)


// l.clear()
// console.log(l,typeof l)


//WeakSet // Store the Object Cannot Iterate 
let w =new  WeakSet();
w.add({'Nikhil':1});
w.add({'Nikhil':1});
console.log(w);




