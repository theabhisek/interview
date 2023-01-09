//##################3not streaming
const fs = require("fs")
const http = require("http")

const server=http.createServer();

// server.on("request",(req,res)=>{
//     fs.readFile("input.txt",(err,data)=>{
//         if(err)
//          return console.error(err);

//          res.end(data.toString())
//     })
// })


// way of stream
// server.on("request",(req,res)=>{
//     const rdable=  fs.createReadStream("input.txt")

//     rdable.on("data",(chunkdata)=>{
//     res.write(chunkdata)
//     })
//     rdable.on("end",()=>{
//         res.end()
//     })
    
// })

//help of piping
server.on("request",(req,res)=>{
    const rdable=  fs.createReadStream("input.txt")
    rdable.pipe(res)
    
})



server.listen(8000,"127.0.0.1")
