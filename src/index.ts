import dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express";

import { fetchUsers } from "./service/userService.js";
import { getEnvOrDefault } from "./utils/envUtils.js";

import type { User } from "./types.js";

dotenv.config();

const port: number = getEnvOrDefault("PORT", 3000);

const app = express();

app.get("/", (_req: Request, res: Response) => {
  // res.sendFile(path.join(__dirname, "../pages/index.html"));
  res.send("Hello Express!");
});

app.get("/users", async (_req: Request, res: Response<User[]>) => {
  const users: User[] = await fetchUsers();
  res.json(users);
});

app.listen(port, () => {
  console.log(`[APP] Listening on port ${port}`);
});

export default app;
