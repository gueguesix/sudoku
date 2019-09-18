'use strict'
// var arr = [[2,0,0,0,8,0,3,0,0],
//              [0,6,0,0,7,0,0,8,4],
//              [0,3,0,5,0,0,2,0,9],
//              [0,0,0,1,0,5,4,0,8],
//              [0,0,0,0,0,0,0,0,0],
//              [4,0,2,7,0,6,0,0,0],
//              [3,0,1,0,0,7,0,4,0],
//              [7,2,0,0,4,0,0,6,0],
//              [0,0,4,0,1,0,0,0,3]];

// var arr = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   ];

var arr = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 3, 0, 8, 5],
        [0, 0, 1, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 5, 0, 7, 0, 0, 0],
        [0, 0, 4, 0, 0, 0, 1, 0, 0],
        [0, 9, 0, 0, 0, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 7, 3],
        [0, 0, 2, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 9]]


let testarr = [];
console.time('checkResult');

for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        if (arr[i][j] == 0) {
            let testarrPos = {x : i, y: j}
            testarr.push(testarrPos)
        }     
    }   
}


function checkSquare(arr, x, y, k) {
    let row = Math.floor(x / 3) * 3;
    let col = Math.floor(y / 3) * 3;

    for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
            if (arr[row + m][col + n] == k) {
                return false;
            }
            
        }
    }
    return true;
}

function checkConditions(arr, x, y, k) {
    for (var l=0; l < 9; l++) {
        
        if (arr[x][l] != k && arr[l][y] != k) {
            continue
        }
        else {
            return false;
        }
    }
    if (checkSquare(arr, x, y, k)) {
        return true;
    }
    return false;
}

function checkResult(testarr, arr, index) {
    if (index == testarr.length) {
        console.log(JSON.parse(JSON.stringify(arr)), "WIN")
        return true;
    }
    let x = testarr[index].x;
    let y = testarr[index].y;

    for (var k = 1; k <= 9; k++) {
        if (checkConditions(arr, x, y, k))  {
            arr[x][y] = k;
            
            if (checkResult(testarr, arr, index + 1)) {
                return true
            }
            arr[x][y] = 0;
        }
    }
    return false;
    
}

checkResult(testarr, arr, 0);
console.timeEnd('checkResult');



