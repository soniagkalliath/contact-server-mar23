//steps to generate json server

//1. import json-server
const jsonServer = require('json-server')

//2. create server app
const server = jsonServer.create()

//3.generete a middleware  to use in json server
const middleware = jsonServer.defaults()

//4. set up route / path for json file 
const router = jsonServer.router("db.json")

//5. set up port number to run server app
const port = 3000 || process.env.PORT

//6. use middleware and router to the server app
server.use(middleware)
server.use(router)

//7. to listen / run server in specified port
server.listen(port,()=>{
    console.log(`Contact server app started at port ${port}`);
})

