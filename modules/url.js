// const url= require("url");
// // const url ="https://www.google.com/search?q=what+is+ec2+instance&ei=G7ezY46INu7Kz7sPqLi7uAg&oq=what+ec2+instance+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46CggAEEcQ1gQQsAM6BwgAELADEEM6CAgAEIAEELEDOgUIABCABDoICAAQsQMQkQI6BQgAEJECOgsIABCxAxCDARCRAkoECEEYAEoECEYYAFDpBliuJWCcRmgBcAF4AIABkgGIAbwLkgEEMC4xMZgBAKABAcgBCsABAQ&sclient=gws-wiz-serp"

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log()

let a=[5,4,4]
let x=-1
while(a[0]!=0 || a[1]!=0 || a[2]!=0){
   if(a[0]>0 && a[1]>0){
    a[0]-=1
    a[1]-=1
   }else if(a[0]>0 && a[2]>0){
    a[0]-=1
    a[2]-=1

   }else if(a[1]>0 && a[2]>0){
    a[1]-=1
    a[2]-=1

   }else if (a[0]>0){
      a[0]-=1
    }
    else if(a[1]>0){
        a[1]-=1
      }
      else if(a[2]>0){
        a[2]-=1
      }
   x++
      console.log(a)
}
console.log(x,a)