// let ar = [3, 1, 2, 5,8, 5,6,9,10];
// let i=0;
// let j=ar.length-1;
// while(i<j){
//     let t=ar[i]
//     ar[i]=ar[j]
//     ar[j]=t
//     i++
//     j--
// }
// console.log(ar);


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
// let arr=[1,43,2,1,56,7,8,9,2,4,5]
// console.time()

// let length = arr.length;
//         for (let j = 0; j < length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
                
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
   
//                 j = -1;
//             }
//         }
// console.timeEnd()
// a=[1,43,2,1,56,7,8,9,2,4,5]
// console.time()
// for(let i=0; i<a.length; i++){
//     for(let j=i+1; j<a.length; j++){
//         if (a[i] > a[j]) {
                
//                 let temp = a[i];
//                 a[i] = a[j ];
//                 a[j] = temp;
            
//         }
//     }
// }


// console.timeEnd()
// let nums=[1,0]
// // for(let a=0; a<nums.length; a++){
// //     for(let b=a+1; b<nums.length; b++){
// //         if(nums[a]>nums[b] && nums[b]>)
// //     }

// // }

// nums=nums.sort(function (a,b){return a-b})
// let a=0;
// while(a<nums.length){
//         if(nums[0]>0)

//         break;
//         nums.splice(0,1)
//     }
// console.log(nums);
// let i=1;
// let j=0;
// if(nums.length==1){
//    if( nums[0]<0)
//    return i
//    else if(nums[0]>1)
//    return i
      
// }
// while(i<=nums[nums.length-1] ){
  
//     if(nums[j]>0){
//         if(nums[j]!=i){
//             break
//         }
//         i++

//     }
//     j++
// }
// if(j==nums.length-1){
//     if(nums.length>0)
//     if(nums[nums.length-1]<=1 && nums[nums.length-1]>=0)
//     i=nums[nums.length-1]+1
//     else 
//     i=nums[nums.length-1]+1

// }
// console.log(i)

// let p=[1,2,3,4,4]
// let d=new Array(p)
// console.log(d[0])



// let arr=[];
// let obj={};
// for(let i=0; i<arr.length; i++)
// {};
// for(let i of arr){};
// let i=0;
// let j=arr.length;
// while(i<j){};
// let output=""
// let input=5
// let forSize=1
// for(let i=1; i<input*2; i++){
//     let reSizeInput=input
//     let reSize=1
//     for(let j=1; j<input*2; j++){
//         output+=reSizeInput
//         if((forSize==i && reSize<forSize )||(forSize==(input*2)-i && reSize<forSize && i>(input*2)/2)){
//             reSizeInput--;
//             reSize++;
//         }
//         else if((input*2)-forSize<=j && reSize==forSize){
//             reSizeInput++
//         }
//     }
//     output+="\n"
//     if(input*2/2>i){
//         forSize+=1
//     }
//     else {
//         forSize-=1
//     }
// }
// console.log(output);



// let arr=[-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
// arr.sort( (a,b)=>{return a-b})
// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         if(i==arr[j]){
//             let t=arr[i]
//             arr[i]=arr[j]
//             arr[j]=t;
//             break
//         }
//     }
// }
// console.log(arr);