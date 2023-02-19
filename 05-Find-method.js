// The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements.

let arr = [1,9,10,4,5,7];
console.log(arr);

// here i'm template literates
for(let i = 0; i<arr.length; i++){
    console.log(`${i} `);
}

// we are using find keyword to find out the first value according to our need 
// we want maximum we can find out the maximum 
// we want equal, min, etc:
const value = arr.find((items)=>{
    return items > 7;
})

console.log(value);

// task - 04 print the yes and no
let condition = 0;
const result = arr.find((items)=>{
    if(condition == 0){
        if(items > 0){
            return true;
        }
    }
})

console.log(result);