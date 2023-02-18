function chessboard() {
    let char_ch = "";

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            ((i + j) % 2 == 0 ? char_ch += "#" : char_ch += " ");
        }
        char_ch += "\n";
    }
    console.log(char_ch);
}

function transform(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

chessboard();
console.log("--------")
console.log(transform([['a', 1], ['b', 2]]));
