
// it's fancy way to write the function in javascript

let arr = [11,11,222,22,6,66,3];
console.log(arr);

// new 'wonderfull! 
console.table(arr);

// step -1 normal function
function AddNum(value1,value2){
    return value1 + value2;
}

let result = AddNum(11,11);
console.log(result);

// step-2 we can convert into arrow functions 

// using map method we can understand arrow function
// we are using arrow keyword here =>

arr.map((items,index)=>{
    console.log(items , index);
})