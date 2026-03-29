const arr = [911,520,888,666,555,2323]
function bubbleSort(arr){
    let swapped
    let temp
    for(let i=0;i<arr.length-1;i++){
        swapped = false
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr;
}

console.log(bubbleSort(arr));