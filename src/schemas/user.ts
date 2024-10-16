import { z } from "zod";

const CompanySchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  catchPhrase: z
    .string()
    .min(3, "Catch phrase must be at least 3 characters long"),
  bs: z.string().min(3, "Bs must be at least 3 characters long"),
});

const GeoSchema = z.object({
  lat: z.string().min(3, "Latitude must be at least 3 characters long"),
  lng: z.string().min(3, "Longitude must be at least 3 characters long"),
});

const AddressSchema = z.object({
  street: z.string().min(3, "Street must be at least 3 characters long"),
  suite: z.string().min(3, "Suite must be at least 3 characters long"),
  city: z.string().min(3, "City must be at least 3 characters long"),
  zipcode: z.string().min(3, "Zip must be at least 3 characters long"),
  geo: GeoSchema,
});

const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email"),
  address: AddressSchema,
  phone: z.string().min(3, "Phone must be at least 3 characters long"),
  website: z.string().min(3, "Website must be at least 3 characters long"),
  company: CompanySchema,
});

const UserListSchema = z.array(UserSchema);

export { AddressSchema, CompanySchema, GeoSchema, UserSchema, UserListSchema };
