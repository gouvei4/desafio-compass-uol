import express, { Express } from "express";
import { tutorRoutes } from "./api/routes/tutorRoutes";
import { petRoutes } from "./api/routes/petRoutes";

const app: Express = express();
const port = 5000;

app.use(express.json())
app.use("/", tutorRoutes);
app.use("/", petRoutes)

app.listen(port, () => {
  console.log("Rodando");
});
