import { Router } from "express";
import { DAL } from "..";

const Form = Router();
Form.post("/", async (req, res, next) => {
  if (req.query?.name) {
    const client = await DAL.client.create({
      data: { name: req.query?.name.toString() },
    });
    res.json(client);
  } else {
    res.status(400).send("Fail");
  }
});

export default Form;
