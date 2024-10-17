const getEnvOrDefault = <T extends string | number | boolean>(
  key: keyof NodeJS.ProcessEnv,
  defaultValue: T
): T => {
  const value = process.env[key];

  switch (typeof defaultValue) {
    case "number":
      return parseIntOrDefault(value, defaultValue) as T;
    case "boolean":
      return parseBooleanOrDefault(value, defaultValue) as T;
    default:
      return (value ?? defaultValue) as T;
  }
};

const parseBooleanOrDefault = (
  value: string | undefined,
  defaultValue: boolean
): boolean => {
  if (value == null) return defaultValue;
  switch (value.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return defaultValue;
  }
};

const parseIntOrDefault = (
  value: string | undefined,
  defaultValue: number
): number => {
  if (value == null) return defaultValue;
  const parsedValue = parseInt(value, 10);
  return isNaN(parsedValue) ? defaultValue : parsedValue;
};

export { getEnvOrDefault };
