// //string problem 
// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// let text = "leet code", brokenLetters = "lt"//convert in array 
// let counter=0
// // for (let w of W) if (![...bL].some(l => w.includes(l))) counter++;


// let pq = new MaxPriorityQueue({priority: x => x}), sum = 0
// console.log(pq)


var minDeletionSize = function (strs) {
    let count = 0;

    for (let i = 0; i < strs[0].length - 1; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j][i] < strs[j][i]) {
                count++; break;
            }
        }
    }
    return count;
};

const res = minDeletionSize(["abc", "bce", "cae"]);

console.log(res);