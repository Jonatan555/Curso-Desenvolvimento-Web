import { Router } from "express";

export  const router= Router();

router.route("/").get((_req, res) => {
    res.send({ name: "Jonatan"});
});

 router.get("/pokemon", (_req, res) => {
   res.send ([
    {id: 1, name: "bulbasaur"},
    {id: 150, name: "pikachu"},
    {id: 6, name: "charizard"},
 ]);
 });