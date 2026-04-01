function selectionSort(arr) {

    let minIndex
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }

    }

    return arr
}

const tArr = [911, 520, 888, 666, 555, 2323, 1];
console.log("排序前:", tArr);
console.log("排序后:", selectionSort(tArr));