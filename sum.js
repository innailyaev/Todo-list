function sum(a,b){
    return a+b;
}

function sumArr(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}


module.exports={sum,sumArr};
