/**
 * 主控函数 
 */
function heapSort(arr) {

    //1.准备
    let len = arr.length

    //2.构建大顶堆
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, len, i)
    }

    //3.进行排序（老板退休，菜鸟顶上，菜鸟下放）
    for (let i = len - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        //3.1.重构大顶堆
        heapify(arr, i, 0)
    }

    //4.返回
    return arr

}




/**
 * 核心操作
 */

function heapify(arr, len, i) {

    //1.准备
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    //2.进行左右判断
    if (left < len && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        //2.1.操作到底
        heapify(arr, len, largest)
    }

}


const testArr = [911, 520, 888, 666, 555, 2323, 1]
console.log("排序后:", heapSort(testArr));