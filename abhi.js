let ar = [3, 1, 2, 5,8, 5,6,9,10];
let i=0;
let j=ar.length-1;
while(i<j){
    let t=ar[i]
    ar[i]=ar[j]
    ar[j]=t
    i++
    j--
}
console.log(ar);


// let x = 1;
// let i = 0;
// let o = 0
// let p = ar.length;
// let g = []
// while (i < p) {
//     if (ar[i] == x) {
//         o = 1;
//         i++
//         x++

//     } else if (o == 1) {
//         g.push(x)
//         x++

//     }
//     if (o == 0) {
//         i++
//     }
//     if (o == 1 && ar[i] < ar[i - 1]) {
//         break;

//     }
// }
// conso
