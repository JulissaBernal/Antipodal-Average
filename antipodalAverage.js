// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
 
// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
let array=[1,2,3,7,5,22,6];

const antipodalAve=()=>{
    let firstPart=array.splice(0,array.length/2);
let secondPart=array.splice((array.length/2)-1,array.length);

let shortArray=[];
for(let i=0; i<firstPart.length; i++){
     shortArray[i]=(firstPart[i]+secondPart[secondPart.length-(i+1)])/2;
}
console.log(shortArray)
}

if(array.length % 2 === 0){
   antipodalAve(array);
    
}else{
    array.splice(Math.floor(array.length/2),1);
    antipodalAve(array);
}