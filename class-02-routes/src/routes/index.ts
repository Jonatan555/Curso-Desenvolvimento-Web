import { Router } from "express";

export const router = Router();

router.route("/").get((_req, res) => {
  res.send({ name: "Jonatan" });
});

router.get("/pokemon", (_req, res) => {
  res.send([
    { id: 1, name: "bulbasaur" },
    { id: 150, name: "pikachu" },
    { id: 6, name: "charizard" },
  ]);
});

// route params
router.get("/user/:id/:name", (req, res) => {
  const { id, name } = req.params;
  res.send({ id, name });
});

// query params
router.get("/user", (req, res) => {
  const { id, name, age } = req.query;
  res.send({ id, name, age });
});

//  body params
router.post("/user", (req, res) => {
  const { id, name, age } = req.body;
  console.log({ id, name, age });
  res.send({ satus: "user create!" });
});