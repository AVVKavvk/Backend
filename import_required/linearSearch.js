function linearSearch(arr,key){
    for (let i = 0; i < arr.length; i++){
    if(arr[i]===key) return i;
    }
    return -1;
}
console.log("calling linearSearching function");
module.exports={
    linear:linearSearch
}