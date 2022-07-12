module.exports = function reverse(n) {
    let num =
        n < 0
            ? String(n * -1)
                  .split("")
                  .reverse()
                  .join("")
            : String(n).split("").reverse().join("");
    return Number(num);
};
