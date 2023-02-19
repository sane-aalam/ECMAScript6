

// Warning! If array or object, the reference is kept constant. If the constant is a reference to an object, you can still modify the content, but never change the variable.

const ELMA = 1111.2;
console.log(ELMA);

// you can't change the varialbe name
ELMA = "Warning!";
console.log(ELMA); // error

const ELMA = 111; // it provides error - you ara not able to declare same name variable
console.log(ELMA);