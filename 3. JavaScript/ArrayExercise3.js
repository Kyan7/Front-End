function filterEven(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    return arr.filter((el) => el % 2 == 0);
}