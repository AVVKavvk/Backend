function linearSearch(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key) return i;
    }
    return -1;

}

function binarySearch(arr,key){
    let s=0,e=arr.length-1;
    while(s<=e){
        let mid=s+(e-s)/2;
        if(arr[mid]===key) return mid;
        else if(arr[mid]>key) e=mid-1;
        else s=mid+1;

    }
    return -1;
}


// export default binarySearch;
export default {binarySearch};

export {linearSearch}