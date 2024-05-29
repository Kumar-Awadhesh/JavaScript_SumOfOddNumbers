//function to calculate product of all numbers.
function produtOfNumbers(array){
    let product=1;
    //iterating over array by built in function map to calculate product of all numbers in the array.
    let arr=array.map(el=>{
        //storing the product of all numbers in the variable product.
        product*=el
    })
    //return the product of all numbers to function.
    return(product)
}

//input taking of array.
const array=[1, 2, 3, 4, 5, 6]

//calling the function to print the product of all numbers
let arr=produtOfNumbers(array)
console.log(arr)