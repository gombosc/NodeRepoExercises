const express = require("express");
const app = express();

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.use(express.static("public"));

app.listen(3000)

// app.get('/:id', (req, res) =>{
//     console.log(req.query);
//     console.log(req.headers);
//     console.log(req.body);
//     console.log(req.params);
//     res.status(404).send("Not Found");
    
// });

// app.get('/profile', (req, res) =>{
//     res.send("Getting Profile");
// });



// app.post('/profile', (req, res) =>{
//     console.log(req.body);
//     const user = {
//         name: "Andrew",
//         age: 15,
//         hobby: "Chess"
//     }
//     res.send(user);
// });

// app.listen(3000)




// ---------------------------------------------------------------------------

// Old way with http method

// const server = require('http');
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer( (req, res)  => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end('Hello World\n');
// })

// server.listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })