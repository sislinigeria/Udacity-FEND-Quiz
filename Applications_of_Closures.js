/*
To recap, we've seen two common and powerful applications of closures:
* Passing arguments implicitly.
* At function declaration, storing a snapshot of scope.

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/
function expandArray(){
    const myArray = [1, 1, 1];
    
    return function(){
        myArray.push(1);
        
        return myArray;
    };
}
const callArray = expandArray();
console.log(callArray());