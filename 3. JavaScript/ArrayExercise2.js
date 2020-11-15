function double(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr is not an array");
        return false;
    }
    return arr.map((el) => el * 2);
}