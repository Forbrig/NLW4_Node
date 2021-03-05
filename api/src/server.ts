import express, { request } from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({"message": "Hello world!"})
})

app.post("/", (request, response) => {
    return response.json({message: "dados salvos"})
})

app.listen(3333, () => console.log("server is runningg"));