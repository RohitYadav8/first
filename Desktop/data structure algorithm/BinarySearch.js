function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(arr[middle]===target){
            return middle;

        }
        else if(arr[middle]
            
            
            
            <target){
            left=middle+1;
        }
        else{
            right=middle-1;
        }
    }
    return -1;
}
const arr=[3,7,12,18,25,31,42,56]
const target=42;
console.log(binarySearch(arr,target));


/*

Bubble sort: 
comapre adjacent elements and swap if they are in wrong order
time complexity o(n/2)
space complexity 0(1);

insertion sort:
build the sorted array one item at a time by repeatedly taking the next item and inserting it 
into the correct position in the sorted array
time complexity 0(n/2);
space complexity 0(1);

selection sort:
divide the array into two parts sorted and unsorted 
find the minimum element from unsorted array and swap it
with the first element of unsorted array 
time complexity 0(n/2);
space complexity 0(1);


merge sort :
divide the array into two havles until we reach single element
then merge the halves in soarted manner 
time complexity 0(nlogn);
space complexity 0(n);


*/

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Node add karna
  append(data) {
    const newNode = new Node(data);

    // Agar list empty hai
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Last node tak jana
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    // Last node ke baad new node add karna
    current.next = newNode;
  }

  // Linked List print karna
  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Linked List banana
const list = new LinkedList();

// Data add karna
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

// Print karna
list.print();