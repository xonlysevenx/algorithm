/**
 * 基础快排
 */
function quickSort(arr) {

    //1.递归出口
    if (arr.length <= 1) {
        return arr
    }

    //2.准备基准及空桶
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex]

    const left = []
    const right = []
    const equal = []

    //3.核心划分
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            equal.push(arr[i])
        }
    }

    //4.合并返回
    return [...quickSort(left), ...equal, ...quickSort(right)]

}




/**
 * 进阶快排
 */

//主控函数
function quickSortPlus(arr, start = 0, end = arr.length - 1) {

    //1.递归出口
    if (start >= end) {
        return arr
    }

    //2.初次划界取基准值索引
    let pivotIndex = partition(arr, start, end)

    //3.左右递归排序
    quickSortPlus(arr, start, pivotIndex - 1)
    quickSortPlus(arr, pivotIndex + 1, end)

    //4.返回
    return arr
}


//核心划界
function partition(arr, start, end) {

    //1.选取区间最后数为基准
    let pivot = arr[end]

    //2.放置哨兵
    let i = start - 1

    //3.进行探索者协同
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    //4.放置基准
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]


    //5.返回基准
    return i + 1;

}








const arr = [911, 520, 888, 666, 555, 2323, 1]
const arrPlus = [911, 520, 486, 777, 555, 2323, 1]
console.log(quickSort(arr))
console.log(quickSortPlus(arrPlus))

