function lastTwo(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    return arr.slice(-2);
}