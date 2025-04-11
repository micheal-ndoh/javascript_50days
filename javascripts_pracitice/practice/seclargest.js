// JavaScript program to find the second largest element in the array
// using one traversal

// function to find the second largest element in the array
function getSecondLargest(arr) {
    const n = arr.length;

    let largest = -1,
        secondLargest = -1;

    // finding the second largest element
    for (let i = 0; i < n; i++) {

        // If arr[i] > largest, update second largest with
        // largest and largest with arr[i]
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        // If arr[i] < largest and arr[i] > second largest, 
        // update second largest with arr[i]
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));