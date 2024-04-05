import express, { json } from "express";
import "dotenv/config";
import { router } from "./@types";
import { pageNotFound } from "./errors/pageNotFound";
import { appErrors } from "./errors/appErrors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
