//归并主控函数
function mergeSort(arr) {

    //1.递归出口
    if (arr.length <= 1) {
        return arr
    }

    //2.数组切分
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    //3.递归切分左右半边，后合并
    return merge(mergeSort(left), mergeSort(right))

}


//核心归并函数
function merge(left, right) {

    //1.准备返回数组及探照灯
    let result = []
    let i = 0
    let j = 0

    //2.进行归并
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push[i]
            i++
        } else {
            result.push[j]
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++;
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result

}