import { z } from "zod";

import {
  AddressSchema,
  CompanySchema,
  GeoSchema,
  UserSchema,
  UserListSchema,
} from "./schemas/user.js";

type User = z.infer<typeof UserSchema>;
type Address = z.infer<typeof AddressSchema>;
type Company = z.infer<typeof CompanySchema>;
type Geo = z.infer<typeof GeoSchema>;
type UserList = z.infer<typeof UserListSchema>;

export type { Address, Company, Geo, User, UserList };
