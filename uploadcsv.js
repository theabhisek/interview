// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");



// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// let text1 = "     Hello World!     ";
// let text2 = text1.trim();


// let text = "5";
//  text=text.padStart(2,"x");

//  text = "HELLO WORLD";
// let char = text.charAt(0);
// char = text.charCodeAt(0);
// console.log(char);
// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array2); 
// console.log(myChildren);
// let language = "JavaScript";

// let text3 = "";
// myChildren.forEach(element => {
//     text3+=element
   
// });
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.
//   });
// }).listen(8080);

const { Client } = require("pg")

// const fetch = require('node-fetch');
//databse create using direct method
const client = new Client({
    user: "admin",
    host: "localhost",
    database: "misky",
    password: "1234",
    port: 5432
})

client.connect().then(res=>{
console.log("Database connect at the port:5432")})
.catch(err=>{
    console.log(err)
}
)
module.exports= client
