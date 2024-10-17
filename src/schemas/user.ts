import { z } from "zod";

import {
  COORDINATE_PATTERN,
  WEBSITE_PATTERN,
  ZIPCODE_PATTERN,
} from "../constants.js";

/**
 * Creates a Zod schema enforcing a minimum string length for the given field.
 *
 * @param length - Minimum number of characters required.
 * @param field - Field name for the error message.
 * @returns A Zod string schema with a `min` validator.
 */
const minLength = (length: number, field: string): z.ZodType<string> =>
  z.string().min(length, `${field} must be at least ${length} characters long`);

/**
 * Creates a Zod schema enforcing a regex pattern match for the given field.
 *
 * @param pattern - Regular expression to validate the field against.
 * @param field - Field name for the error message.
 * @returns A Zod string schema with a `regex` validator.
 */
const matchPattern = (pattern: RegExp, field: string): z.ZodType<string> =>
  z.string().regex(pattern, `${field} must match ${pattern}`);

const CoordinateSchema = matchPattern(COORDINATE_PATTERN, "Coordinate");

const WebsiteSchema = matchPattern(WEBSITE_PATTERN, "Website");

const ZipcodeSchema = matchPattern(ZIPCODE_PATTERN, "Zipcode");

// Schemas
const CompanySchema = z.object({
  name: minLength(3, "Name"),
  catchPhrase: minLength(3, "Catch phrase"),
  bs: minLength(3, "Bs"),
});

const GeoSchema = z.object({
  lat: CoordinateSchema,
  lng: CoordinateSchema,
});

const AddressSchema = z.object({
  street: minLength(3, "Street"),
  suite: minLength(3, "Suite"),
  city: minLength(3, "City"),
  zipcode: ZipcodeSchema,
  geo: GeoSchema,
});

const UserSchema = z.object({
  id: z.number(),
  name: minLength(3, "Name"),
  username: minLength(3, "Username"),
  email: z.string().email("Invalid email"),
  address: AddressSchema,
  phone: minLength(3, "Phone"),
  website: WebsiteSchema,
  company: CompanySchema,
});

const UserListSchema = z.array(UserSchema);

export { AddressSchema, CompanySchema, GeoSchema, UserSchema, UserListSchema };
