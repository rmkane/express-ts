const COORDINATE_PATTERN = /^-?[0-9]+(\.[0-9]+)?$/;

const WEBSITE_PATTERN =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

const ZIPCODE_PATTERN = /^\d{5}(-\d{4})?$/;

export { COORDINATE_PATTERN, WEBSITE_PATTERN, ZIPCODE_PATTERN };
