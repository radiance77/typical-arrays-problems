exports.min = function min (array) {
    if(array === undefined || array.length === 0){
        return 0;
    }

    let minElem = Math.min(...array);
    return minElem;
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0){
        return 0;
    }
    let maxElem = Math.max(...array);
    return maxElem;
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0){
        return 0;
    }
    return (array.reduce((a,b) => a+b, 0)) / array.length;
}
