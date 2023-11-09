import express, { Express, Request, Response} from "express";
import { routers } from "./api/routes/tutorRoutes";

const app: Express = express();
const port = 5000

app.use("/", routers)

app.listen(port, () => {
    console.log("Rodando")
})