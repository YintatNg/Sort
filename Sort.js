var arr = [5,1,2,4,8];

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
console.log("bubble sort");
console.log(bubbleSort(arr));
document.write("<p class='bubbleSort'>bubble Sort</p>");
document.write("<div class='Sort'><p>Input before bubble sort: " + arr + "</p>");
document.write("<p>Input after bubble sort: " + arr + "</p></div>");




var selection_arr = [64,25,11,67,12];

function selectionSort(selection_arr) {
    var n = selection_arr.length;
    for (var i = 0; i < n - 1; i++) {
        var min_index = i;
        for (var j = i + 1; j < n; j++) {
            if (selection_arr[j] < selection_arr[min_index]) {
                min_index = j;
            }
            // Swap
            var temp = selection_arr[min_index];
            selection_arr[min_index] = selection_arr[i];
            selection_arr[i] = temp;
        }
    }
    return selection_arr;
}

console.log("selection sort");
console.log(selectionSort(selection_arr));
document.write("<p class='selectionSort'>selection Sort</p>");
document.write("<div class='Sort'><p>Input before selection Sort: " + selection_arr + "</p>");
document.write("<p>Input after selection Sort: " + selection_arr + "</p></div>");


var insertionSort_arr = [5, 16, 9, 0, 12];

function insertionSort(insertionSort_arr) {
    var n = insertionSort_arr.length;
    for (var i = 0; i < n; i++) {
        var key = insertionSort_arr[i];
        var j = i - 1;

        /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
        of their current position */

        while (j >= 0 && insertionSort_arr[j] > key) {
            insertionSort_arr[j+1] = insertionSort_arr[j];
            j = j - 1;
        }
        insertionSort_arr[j+1] = key;

    }
    return insertionSort_arr;
}

console.log("Insertion Sort");
console.log(insertionSort(insertionSort_arr));
document.write("<p class='insertionSort'>insertion Sort</p>");
document.write("<div class='Sort'><p>Input before insertion Sort: " + insertionSort_arr + "</p>");
document.write("<p>Input after insertion Sort: " + insertionSort_arr + "</p></div>");


var mergeSort_arr = [6, 5, 3, 1, 8, 7, 2, 4];

// Split the array into halves and merge them recursively 
function mergeSort(mergeSort_arr) {
    if (mergeSort_arr.length === 1) {
        // return once we hit an array with a single item
        return mergeSort_arr;
    }

    const middle = Math.floor(mergeSort_arr.length / 2);
    const left = mergeSort_arr.slice(0, middle);
    const right = mergeSort_arr.slice(middle);

    return mergeSort(
        mergeSort(left), mergeSort(right)
    )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.index) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
console.log("Merge Sort");
console.log(mergeSort(mergeSort_arr));
document.write("<p class='mergeSort'>insertion Sort</p>");
document.write("<div class='Sort'><p>Input before merge Sort: " + mergeSort_arr + "</p>");
document.write("<p>Input after merge Sort: " + mergeSort_arr + "</p></div>");

