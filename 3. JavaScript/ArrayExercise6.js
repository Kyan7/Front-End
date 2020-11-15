function sum(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    return arr.reduce((a, b) => a + b);
}