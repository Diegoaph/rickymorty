const express = require("express");
const server = express();
const router = require("./routes/index");
require("dotenv").config();
const { PORT } = process.env;

server.use(express.json());

server.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "https://devdiego-rickymorty.vercel.app"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log(`server raised in port ${process.env.PORT}`);
});
