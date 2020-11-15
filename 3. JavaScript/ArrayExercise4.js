function hasElementLessThanTen(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            return true;
        }
    }
    return false;
}