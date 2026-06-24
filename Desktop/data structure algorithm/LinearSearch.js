let arr=[4,9,1,0,2]
function LinearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
if(arr[i]===target){
    return i;
}
    }
    return -1;
}
console.log(LinearSearch(arr,2));

/*
Linear Search:
checks every element one by one from start to end 
work on unsorted array
slow for large array
  

Binary Search :
divide the array in half each time compares with middle element 
work only on sorted array 
very fast for large array 
*/
