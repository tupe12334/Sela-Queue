import express from "express";
import Form from "./Routes/form";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import Queue from "./Routes/queue";

const app = express();
app.use(cors());

export const DAL = new PrismaClient();

app.use("/form", Form);
app.use("/queue", Queue);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
