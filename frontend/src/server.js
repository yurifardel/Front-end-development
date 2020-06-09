const express = require("express");
const server = express();


server.use(express.static("frontend/public"))

const nunjucks = require("nunjucks")
nunjucks.configure("frontend/src/views",  {
    express: server,
    noCache: true
})


server.get("/", function(req, res){
    return res.render("index.html")
})

server.get("/create-point", function(req, res){
    return res.render("create-point.html")
})

server.get("/search-results", function(req, res){
    return res.render("search-results.html")
})

server.listen(3000);
