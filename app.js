const express = require ('express')
const app = express ()
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

app.use(express.static('public'))

app.get('/', function (req,res){
    res.sendFile(__dirname + "/index.html")
})

$("#article1Btn").click(function(){
    app.get('/', function(req,res){
        res.sendFile(__dirname + "/article1.html")
    })
})

$(".homePageLink").click(function(){
    app.get("/", function(req,res){
        res.sendFile(__dirname + "/index.html")
    })
})

$(".contactUs").click(function(){
    app.get("/",function(req,res){
        res.sendFile(__dirname + "/contact.html")
    })
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})

