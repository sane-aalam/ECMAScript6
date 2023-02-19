
// The var keyword allows you to declare a variable with global scope.

var value = 11;
console.log(value);

var condition = true;
if(condition == true){
    // i am able to change the value using var keyword
    // i am able to declare the same name variable
    var value =  1224.3;
}

console.log(value);


// Now - we can use LET KEYWORD

let newValue = 1112;

if(condition == true){
    let newValue  = 555.1121;
    console.log(newValue)
}
console.log(newValue);