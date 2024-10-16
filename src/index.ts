import express from "express";
import type { Request, Response } from "express";

import { fetchUsers } from "./service/userService.js";
import type { User } from "./types.js";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World, again!");
});

app.get("/users", async (_req: Request, res: Response) => {
  const users: User[] = await fetchUsers();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

export default app;
