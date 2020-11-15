function filterDivisibleByThree(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    return arr.filter((el) => el % 3 == 0);
}