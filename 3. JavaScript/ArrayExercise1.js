function print(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return true;
}