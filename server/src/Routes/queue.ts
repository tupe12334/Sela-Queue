import { Router } from "express";
import { DAL } from "..";

const Queue = Router();
Queue.get("/waiting", async (req, res, next) => {
  const queues = await DAL.client.findMany({
    where: { finish: false },
    orderBy: { queue: "asc" },
  });
  res.json(queues);
});
Queue.put("/finish", async (req, res, next) => {
  if (req.query?.number) {
    const number = parseInt(req.query.number.toString());
    const updated = await DAL.client.update({
      data: { finish: true },
      where: { queue: number },
    });
    console.log(updated);
    res.json(updated);
  }
});
export default Queue;
