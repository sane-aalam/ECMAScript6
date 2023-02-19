// The findIndex() method returns the value of the  element index.

// it's same to find method in javascript

let arr = [10,9,10,4,5,7];
console.log(arr);

// okay we can use linear search to find out the element but we have find and findindex predefine method , so no need to write whole code 


// we are using find keyword to find out the first value according to our need 
// we want maximum we can find outz the maximum 
// we want equal, min, etc:

const value = arr.findIndex((items)=>{
    return items > 9;
    // it provides index 0 element is greater to 9 
})

console.log(value);

// task - 04 print the yes and no
let condition = 0;
const result = arr.findIndex((items)=>{
    if(condition == 0){
        if(items > 1110){
            return 1;
        }else{
            return 0;
        }
    }
})

console.log(result);