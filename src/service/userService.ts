import { createZodFetcher } from "zod-fetch";

import { UserListSchema } from "../schemas/user.js";
import type { User } from "../types.js";

const fetchWithZod = createZodFetcher();

const fetchUsers = async (): Promise<User[]> =>
  fetchWithZod(UserListSchema, "https://jsonplaceholder.typicode.com/users");

export { fetchUsers };
