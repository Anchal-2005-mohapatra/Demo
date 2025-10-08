const http = require("http");
const fs = require("fs")
const url = require("url");



// console.log(http)
const myServer = http.createServer((req, res) => {
    if(req.url == "/favicon.ico") return res.end();
    // console.log("new request recevied")
    // console.log(req.headers);
    // console.log(req)
    const log = `${Date.now()} : ${req.method} ${req.url}New req receives\n`;
    const myUrl = url.parse(req.url, true);
    console
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case '/':res.end("home page");
            break;
            case '/about' : res.end("webbocket");
            break;
            case '/contact' : res.end("contact page");
            break;
            case '/search' :
                const search = myUrl.query.search_query;
                res.end(`you have searched for ${search}`);
                break;
            default : res.end("404 not found")
        }
        res.end("hello from server again");

    })

});

myServer.listen(8000, () => { console.log("Server Started ") });