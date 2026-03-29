function insertionSort(arr){
    for(let i=1;i<arr.length;i++){

        let current = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>current){
            //当左右有数组且比原来大时候执行向右移动操作
            arr[j+1] = arr[j]
            j--;
        }
        //退出循环代表找到合适位置
        arr[j+1] = current

    }
    return arr
}


const testArr = [911,520,888,666,2323,12]
console.log("Before Sort:",testArr)
console.log("After Sort:",insertionSort(testArr))